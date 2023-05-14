const ghostUrl = Cypress.env("ghostUrl");

class CreateAccountPage {
  elements = {
    blogTitleInput: () => cy.get("input[name='blog-title']"),
    nameInput: () => cy.get("input[name='name']"),
    emailInput: () => cy.get("input[name='email']"),
    passwordInput: () => cy.get("input[name='password']"),
    createAccountButton: () => cy.get("button[data-test-button='setup']"),
    loginButton: () => cy.get("button.login"),
    inputErrors: () => cy.get("p.response"),
    mainError: () => cy.get("p.main-error"),
    skipNormalFlowButton: () => cy.get("a.gh-done-pink"),
  };

  createAccount(blogTitle, name, email, password) {
    const signupUrl = `${ghostUrl}/ghost/#/setup`;

    cy.visit(signupUrl);
    cy.wait(1000);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.blogTitleInput().type(blogTitle);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.nameInput().type(name);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.emailInput().type(email);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.passwordInput().type(password);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.createAccountButton().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  }
}

export const createAccountPage = new CreateAccountPage();
