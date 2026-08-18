// // Inventory Page Class

// pages/InventoryPage.js
export class InventoryPage {
    // 1. ARRANGE - The Setup - The constructor
    constructor(page) {
        this.page = page;
        
        // General page locators
        this.pageTitle = page.getByText('Products');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.productItemName = page.locator('.item_4_title_link');
    }

    /**
     * Helper method to locate a specific product container card by its visible text name.
     * This mimics how a real human scans the store shelf!
     * Smart finding tool to see if the product Name passed matches first.
     *      */
    getProductContainer(productName) {
        return this.page.locator('.inventory_item', { hasText: productName });
    }

    // DYNAMIC ACTIONS
    async addItemToCart(productName) {
        const item = this.getProductContainer(productName);
        // Finds the "Add to cart" button ONLY inside that specific product's card
        await item.getByRole('button', { name: 'Add to cart' }).click();
    }

    async removeItemFromCart(productName) {
        const item = this.getProductContainer(productName);
        // Finds the "Remove" button ONLY inside that specific product's card
        await item.getByRole('button', { name: 'Remove' }).click();
    }
}




