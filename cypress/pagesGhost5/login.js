const ghostUrl = Cypress.env("ghostUrl");

class LoginPage {
  elements = {
    emailInput: () => cy.get("input[name='identification']"),
    passwordInput: () => cy.get("input[name='password']"),
    loginButton: () => cy.get("button.login"),
  }

  login(email, password) {
    cy.visit(`${ghostUrl}/ghost/#/signin`);
    cy.wait(1000);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.emailInput().type(email);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.passwordInput().type(password);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.loginButton().click();
    cy.wait(1000);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  }
}

export const loginPage = new LoginPage();
