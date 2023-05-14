const ghostUrl = Cypress.env("ghostUrl");

class CreateAccountPage {
  elements = {
    blogTitleInput: () => cy.get("input[name='blog-title']"),
    nameInput: () => cy.get("input[name='name']"),
    emailInput: () => cy.get("input[name='email']"),
    passwordInput: () => cy.get("input[name='password']"),
    createAccountButton: () =>
      cy.get(
        "button.gh-btn.gh-btn-green.gh-btn-lg.gh-btn-block.gh-btn-icon.ember-view"
      ),
    loginButton: () => cy.get("button.login"),
    inputErrors: () => cy.get("p.response"),
    mainError: () => cy.get("p.main-error"),
    skipNormalFlowButton: () => cy.get("button.gh-flow-skip"),
  };

  createAccount(blogTitle, name, email, password) {
    const signupUrl = `${ghostUrl}/ghost/#/setup/two`;

    cy.visit(signupUrl);
    cy.wait(1000);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.blogTitleInput().type(blogTitle);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.nameInput().type(name);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.emailInput().type(email);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.passwordInput().type(password);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.createAccountButton().click();
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  }
}

export const createAccountPage = new CreateAccountPage();
