const { test, expect } = require('@playwright/test');

test('GET products supports filtering and returns valid catalog data', async ({ request }) => {
  const response = await request.get('/api/products?q=Book');
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.count).toBe(1);
  expect(body.items[0]).toEqual({
    id: 1,
    name: 'Playwright Book',
    category: 'books',
    price: 499,
  });
});

test('POST login returns a token that can be reused for authenticated requests', async ({ request }) => {
  const loginResponse = await request.post('/api/login', {
    data: {
      username: 'student',
      password: 'Password123',
    },
  });

  const loginBody = await loginResponse.json();

  expect(loginResponse.status()).toBe(200);
  expect(loginBody.success).toBe(true);
  expect(loginBody.token).toBeTruthy();
  expect(loginBody.user.name).toBe('Playwright Student');
  expect(loginBody.user.permissions).toContain('profile:read');

  const profileResponse = await request.get('/api/profile', {
    headers: {
      Authorization: `Bearer ${loginBody.token}`,
    },
  });

  const profileBody = await profileResponse.json();

  expect(profileResponse.status()).toBe(200);
  expect(profileBody.profile.email).toBe('student@example.test');
  expect(profileBody.meta.tokenType).toBe('Bearer');
});

test('GET orders allows iterating through nested JSON and validating totals', async ({ request }) => {
  const loginResponse = await request.post('/api/login', {
    data: {
      username: 'student',
      password: 'Password123',
    },
  });
  const { token } = await loginResponse.json();

  const ordersResponse = await request.get('/api/orders', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const ordersBody = await ordersResponse.json();

  expect(ordersResponse.status()).toBe(200);
  expect(ordersBody.count).toBeGreaterThan(0);

  for (const order of ordersBody.orders) {
    expect(order.id).toMatch(/^ORD-/);
    expect(['processing', 'shipped', 'delivered']).toContain(order.status);
    expect(order.items.length).toBeGreaterThan(0);

    let calculatedSubtotal = 0;

    for (const item of order.items) {
      expect(item.sku).toMatch(/^[A-Z]{2}-\d{3}$/);
      expect(item.quantity).toBeGreaterThan(0);
      expect(item.price).toBeGreaterThan(0);
      calculatedSubtotal += item.quantity * item.price;
    }

    expect(order.totals.subtotal).toBe(calculatedSubtotal);
    expect(order.totals.tax).toBe(Math.round(calculatedSubtotal * 0.18));
    expect(order.totals.grandTotal).toBe(order.totals.subtotal + order.totals.tax);
  }
});

test('GET product by id returns 404 for an unknown item', async ({ request }) => {
  const response = await request.get('/api/products/999');
  const body = await response.json();

  expect(response.status()).toBe(404);
  expect(body.success).toBe(false);
  expect(body.message).toContain('999');
});
