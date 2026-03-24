const { test, expect } = require('../fixtures/testFixtures');

test('catalog search and add-to-cart using framework structure', async ({ catalogPage }) => {
  await catalogPage.open();
  // Demo-only wait so students can observe the catalog page.
  await catalogPage.page.waitForTimeout(1000);
  await catalogPage.search('Book');
  // Demo-only wait so students can observe filtered results.
  await catalogPage.page.waitForTimeout(1000);

  await expect(catalogPage.product('Playwright Book')).toBeVisible();
  await catalogPage.addToCartById(1).click();
  // Demo-only wait so students can observe the cart update.
  await catalogPage.page.waitForTimeout(1200);
  await expect(catalogPage.cartCount).toHaveText('1');
});
