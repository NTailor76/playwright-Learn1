//LoginPage Class

export class LoginPage{
    constructor(page){
         this.page = page;
       // 💡 Store the URL as a class property
       this.url = 'http://localhost/loginPracticePage.html';   
       
       this.emailInput = page.getByRole('textbox', { name: 'Email' });
       this.passwordInput = page.getByRole('textbox', { name: 'Password' });
       this.signInButton = page.getByRole('Button', { name: 'Sign In' });
    }
  // 💡 Add a dedicated navigation action method
    async navigate() {
        await this.page.goto(this.url);
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click({ force: true });
    }   
}

