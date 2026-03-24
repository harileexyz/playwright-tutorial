class CatalogPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByLabel('Search');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.cartCount = page.locator('#cart-count');
  }

  async open() {
    await this.page.goto('/catalog.html');
  }

  async search(term) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  product(name) {
    return this.page.getByText(name);
  }

  addToCartById(id) {
    return this.page.getByTestId(`add-to-cart-${id}`);
  }
}

module.exports = { CatalogPage };
