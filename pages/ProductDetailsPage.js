//Pages/ Product Detail Page

export class ProductDetailsPage{
    constructor(page){
        this.page=page;

        this.productName = page.locator('.inventory_details_name');     
        this.productPrice = page.locator('[data-test="inventory-item-price"]');
        this.productDescription = page.locator('[data-test="inventory-item-desc"]');

        // Action buttons on the details page
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.removeButton = page.getByRole('button', { name: 'Remove' });
        this.backButton = page.getByRole('button', { name: 'Back to products' });
    }

    // Helper method to find product title link by product name
    getProductTitleLink(productName) {
        return this.page.locator('.inventory_item_name', { hasText: productName });
    }

    // DYNAMIC ACTIONS
    async clickProductTitle(productName) {
        const productLink = this.getProductTitleLink(productName);
        await productLink.click();
    }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async removeItemFromCart() {
        await this.removeButton.click();
    }

    async goBackToCatalog() {
        await this.backButton.click();
    }
}