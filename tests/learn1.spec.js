import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

let loginPageInstance;  // Declare a variable to hold the instance of LoginPage

// Initialize the class and navigate automatically before every test --  // 1. ARRANGE
test.beforeEach(async ({ page }) => {
  loginPageInstance = new LoginPage(page);
  await loginPageInstance.navigate();
});

// --- SUCCESS PATH ---
test('Login Screen: Test Case 1: User can successfully log in', async ({ page }) => {
  // 2. ACT
  await loginPageInstance.login('standard_user', 'secret_sauce');   // 2. ACT
  await expect(page).toHaveURL(/inventory/);// 3. ASSERT
  await expect(page.getByText('Swag Labs')).toBeVisible(); // 3. ASSERT
  await expect(page.locator('[data-test="title"]')).toBeVisible();   // 3. ASSERT

});
// --- Locked out User ---
test('Login Screen: Test Case 2: Locked out User', async ({ page }) => {
  // 2. ACT
  await loginPageInstance.login('locked_out_user', 'secret_sauce');   // 2. ACT
  await expect(loginPageInstance.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.'); // 3. ASSERT
});
