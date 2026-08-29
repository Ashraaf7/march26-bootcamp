class LoginPage {
    //variables
    emailInput: string = "";
    passwordInput: string = "";
    loginButton: string = "";
    rememberMeCheckbox: boolean = false;


    //Methods
    typeEmail(email: string): void {
        this.emailInput = email;
    }

    typePassword(password: string): void {
        this.passwordInput = password;
    }
    clickLoginButton(): void {
        console.log(`Clicked login button with email: ${this.emailInput} and password: ${this.passwordInput}`);
    }


    login(email: string, password: string): void {
        this.typeEmail(email);
        this.typePassword(password);
        this.rememberMeCheckbox = true; // Assuming we want to check the "Remember Me" checkbox
        this.clickLoginButton();
    }


}


//100 tc 

let loginPage = new LoginPage();

loginPage.login("test@example.com", "password123");

