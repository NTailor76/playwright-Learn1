// tests/inventory.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';


test.describe('SauceDemo Inventory & Cart Tests', () => {

    // This runs before every single test in this file so you don't have to keep logging in
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('https://saucedemo.com');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Should successfully add a single item to the cart', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        // 1. Add an item by passing its exact visible name
        await inventoryPage.addItemToCart('Sauce Labs Backpack');

        // 2. Assert the cart count changes to 1
        await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
    });

    test('Should be able to add multiple items and remove one', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        // 1. Add two different items
        await inventoryPage.addItemToCart('Sauce Labs Backpack');
        await inventoryPage.addItemToCart('Sauce Labs Fleece Jacket');
        await expect(inventoryPage.shoppingCartBadge).toHaveText('2');

        // 2. Remove one item
        await inventoryPage.removeItemFromCart('Sauce Labs Backpack');

        // 3. Assert the cart dropped down to 1
        await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
    });

    //--------------------------------------------------------------------
// Inside your existing test.describe block:
    test('Should view product details and manage cart from the details page', async ({ page }) => {
         const inventoryPage = new InventoryPage(page);
        const detailsPage = new ProductDetailsPage(page);

        const targetProduct = 'Sauce Labs Backpack';

    // 1. Click the product to open the details page
    await detailsPage.InventoryItemTitle(targetProduct);   
    
    // 2. ASSERT: Verify the details page shows the correct item information
    await expect(detailsPage.productName).toHaveText(targetProduct);
    await expect(detailsPage.productPrice).toHaveText('$29.99');
    await expect(detailsPage.productDescription).toContainText('Sleek, streamlined backpack');

    // 3. Add to cart from the details screen
    await detailsPage.addItemToCart();
    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');

    // 4. Remove it to test the remove button on this page too
    await detailsPage.removeItemFromCart();
    await expect(inventoryPage.shoppingCartBadge).not.toBeVisible(); // Cart badge disappears when empty

    // 5. Navigate back to the main shop catalog
    await detailsPage.goBackToCatalog();
    await expect(inventoryPage.pageTitle).toHaveText('Products');
    });
});

