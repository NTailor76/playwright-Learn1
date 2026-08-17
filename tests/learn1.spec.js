import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

let loginPageInstance;  // Declare a variable to hold the instance of LoginPage

// Initialize the class and navigate automatically before every test --  // 1. ARRANGE
test.beforeEach(async ({ page }) => {
  loginPageInstance = new LoginPage(page);
  await loginPageInstance.navigate();
});

// --- SUCCESS PATH ---
test('1. Test Case 1: User can successfully log in', async ({ page }) => {
  // 2. ACT
  await loginPageInstance.login('nitin@example.com', '12345');   // 2. ACT
  await expect(page.getByText('Welcome Nitin')).toBeVisible();   // 3. ASSERT
});


// --- FAILURE PATH: WRONG PASSWORD ---
test('2. Test Case 2: Fails with incorrect password', async ({ page }) => {
  await loginPageInstance.login('nitin@example.com', 'wrong_password_xyz');   // 2. ACT
  await expect(page.getByText('Invalid credentials')).toBeVisible();   // 3. ASSERT
});  

// --- FAILURE PATH: WRONG EMAIL FORMAT ---
test('3. Test Case 3: Fails with invalid email format', async ({ page }) => {
  await loginPageInstance.login('nitinexample.com', '12345');   // 2. ACT // 👈 Missing the '@' sign
  await expect(page.getByText('Invalid credentials')).toBeVisible();   // 3. ASSERT
});


