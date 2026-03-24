const { test, expect } = require('@playwright/test');

test.skip('student exercise: validate invalid login API response', async ({ request }) => {
  // Send an invalid login request.
  // Validate the status code.
  // Validate the error message.

  const response = await request.post('/api/login', {
    data: {
      username: 'student',
      password: 'wrong-password',
    },
  });

  const body = await response.json();

  expect(response.status()).toBe(401);
  expect(body.message).toBe('Invalid username or password');
});

test.skip('student exercise: validate profile API rejects requests without a token', async ({ request }) => {
  // Call the protected profile endpoint without an Authorization header.
  // Validate the status code.
  // Validate the error response body.

  const response = await request.get('/api/profile');
  const body = await response.json();

  expect(response.status()).toBe(401);
  expect(body.success).toBe(false);
  expect(body.message).toBe('Missing or invalid authorization token');
});

test.skip('student exercise: iterate through orders JSON and validate each grand total', async ({ request }) => {
  // Log in as student.
  // Reuse the token to call /api/orders.
  // Loop through every order and calculate the subtotal from each line item.
  // Validate subtotal, tax, and grand total for every order.

  const loginResponse = await request.post('/api/login', {
    data: {
      username: 'student',
      password: 'Password123',
    },
  });
  const { token } = await loginResponse.json();

  const response = await request.get('/api/orders', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();

  expect(response.status()).toBe(200);

  for (const order of body.orders) {
    const subtotal = order.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    expect(order.totals.subtotal).toBe(subtotal);
    expect(order.totals.tax).toBe(Math.round(subtotal * 0.18));
    expect(order.totals.grandTotal).toBe(subtotal + order.totals.tax);
  }
});
