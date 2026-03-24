const { test, expect } = require('./framework/fixtures/testFixtures');

test.skip('student exercise: add a new page object method and use it in a framework test', async ({ catalogPage }) => {
  await catalogPage.open();

  // Add a reusable method to CatalogPage for adding a product to cart by name or id.
  // Then use that method here and validate the cart count.

  await expect(catalogPage.cartCount).toHaveText('1');
});
