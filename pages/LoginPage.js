//LoginPage Class

export class LoginPage{
    constructor(page){
         this.page = page;
       // 💡 Store the URL as a class property
       this.url = 'https://www.saucedemo.com';   
    
       
       this.userNameInput = page.getByRole('textbox', { name: 'username' });
       this.passwordInput = page.getByRole('textbox', { name: 'Password' });
       this.signInButton = page.getByRole('Button', { name: 'login' });
       this.errorContainer = page.locator('[data-test="error"]');
    }
  // 💡 Add a dedicated navigation action method
    async navigate() {
        await this.page.goto(this.url);
    }

    async login(username, password) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click({ force: true });
    }   
}

