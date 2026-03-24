const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3111;

const products = [
  { id: 1, name: 'Playwright Book', category: 'books', price: 499 },
  { id: 2, name: 'Testing Mug', category: 'merch', price: 299 },
  { id: 3, name: 'Automation Stickers', category: 'merch', price: 99 },
  { id: 4, name: 'UI Testing Notes', category: 'books', price: 199 },
];

const users = {
  student: {
    password: 'Password123',
    profile: {
      id: 101,
      name: 'Playwright Student',
      role: 'tester',
      email: 'student@example.test',
      permissions: ['catalog:read', 'orders:read', 'profile:read'],
    },
    token: 'training-token-student',
  },
  admin: {
    password: 'AdminPass456',
    profile: {
      id: 102,
      name: 'Playwright Admin',
      role: 'admin',
      email: 'admin@example.test',
      permissions: ['catalog:read', 'orders:read', 'profile:read', 'reports:read'],
    },
    token: 'training-token-admin',
  },
};

const ordersByUser = {
  student: [
    {
      id: 'ORD-1001',
      createdAt: '2026-03-01',
      status: 'processing',
      items: [
        { sku: 'BK-001', name: 'Playwright Book', quantity: 1, price: 499 },
        { sku: 'ST-003', name: 'Automation Stickers', quantity: 2, price: 99 },
      ],
    },
    {
      id: 'ORD-1002',
      createdAt: '2026-03-10',
      status: 'shipped',
      items: [
        { sku: 'MG-002', name: 'Testing Mug', quantity: 1, price: 299 },
        { sku: 'BK-004', name: 'UI Testing Notes', quantity: 1, price: 199 },
      ],
    },
  ],
  admin: [
    {
      id: 'ORD-2001',
      createdAt: '2026-03-05',
      status: 'delivered',
      items: [
        { sku: 'BK-001', name: 'Playwright Book', quantity: 2, price: 499 },
      ],
    },
  ],
};

function calculateTotals(items) {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const tax = Math.round(subtotal * 0.18);

  return {
    subtotal,
    tax,
    grandTotal: subtotal + tax,
  };
}

function getBearerToken(req) {
  const authHeader = req.headers.authorization || '';
  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return null;
  }

  return token;
}

function findUserByToken(token) {
  return Object.entries(users).find(([, user]) => user.token === token);
}

function requireAuth(req, res, next) {
  const token = getBearerToken(req);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Missing or invalid authorization token',
    });
  }

  const matchedUser = findUserByToken(token);

  if (!matchedUser) {
    return res.status(403).json({
      success: false,
      message: 'Token is not valid for this training app',
    });
  }

  const [username, user] = matchedUser;
  req.auth = { username, user };
  next();
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users[username];

  if (user && user.password === password) {
    return res.json({
      success: true,
      message: 'Login successful',
      token: user.token,
      user: user.profile,
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid username or password',
  });
});

app.get('/api/products', (req, res) => {
  const query = (req.query.q || '').toString().trim().toLowerCase();

  const filtered = query
    ? products.filter((product) => product.name.toLowerCase().includes(query))
    : products;

  res.json({
    count: filtered.length,
    items: filtered,
  });
});

app.get('/api/products/:id', (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Product ${req.params.id} was not found`,
    });
  }

  return res.json({
    success: true,
    item: product,
  });
});

app.get('/api/profile', requireAuth, (req, res) => {
  res.json({
    success: true,
    profile: req.auth.user.profile,
    meta: {
      tokenType: 'Bearer',
      environment: 'training',
    },
  });
});

app.get('/api/orders', requireAuth, (req, res) => {
  const { username } = req.auth;
  const orders = (ordersByUser[username] || []).map((order) => ({
    ...order,
    totals: calculateTotals(order.items),
  }));

  res.json({
    success: true,
    count: orders.length,
    orders,
  });
});

app.listen(port, () => {
  console.log(`Training app running at http://127.0.0.1:${port}`);
});
