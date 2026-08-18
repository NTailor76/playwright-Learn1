//Pages/ Product Detail Page

export class ProductDetailsPage{
    constructor(page){
        this.page=page;

     this.InventoryItemTitle = page.locator('.inventory_details_name');     
     this.InventoryItemPrice = page.getByRole('textbox', { name: 'inventory-item-price' });

    // Action buttons on the details page
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.removeButton = page.getByRole('button', { name: 'Remove' });
        this.backToProductsButton = page.getByRole('button', { name: 'Back to products' });

    };

    // getInventoryItemName(ItemName) {
    //     return this.page.locator('.inventory_item_name', { hasText: ItemName });
  //  };
    // DYNAMIC ACTIONS
    async addItemToCart() { this.addToCartButton.Click()};
    async removeItemFromCart() {await this.removeButton.click()};
    async backToProductsButton() {await this.backToProductsButton.click()};
    async InventoryItemTitle() { await this.InventoryItemTitle.click() };

}


//         const item = this.getInventoryItemName(ItemName);
//         // Finds the "Add to cart" button ONLY inside that specific product's card
//         await item.getByRole('button', { name: 'Add to cart' }).click();
//     }
//         async removeItemFromCart(ItemName) {
//         const item = this.getInventoryItemName(ItemName);
//         // Finds the "Remove" button ONLY inside that specific product's card
//         await item.getByRole('button', { name: 'Remove' }).click();
//     }

// };

// //-----------------------
// import { test, expect } from '@playwright/test';

//  await page.locator('[data-test="item-sauce-labs-backpack-img"]').click();
//   await page.locator('[data-test="inventory-item-price"]').click();



// test('test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await page.locator('[data-test="item-4-title-link"]').click();
//   await page.locator('[data-test="inventory-item-name"]').click();
//   await page.locator('[data-test="add-to-cart"]').click();
//   await page.locator('[data-test="remove"]').click();




//-----------