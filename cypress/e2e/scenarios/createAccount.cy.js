const ghostUrl = Cypress.env("ghostUrl");

const CONSTANTS = {
  ERROR_LABELS: [
    "Please enter a blog title.",
    "Please enter a name.",
    "Please enter an email.",
    "Password must be at least 10 characters long",
  ],
  MAIN_ERROR_LABEL: "Please fill out the form to setup your blog.",
  INVALID_EMAIL_ERROR: "Invalid Email.",
  SITE_TITLE: "Ghost",
  VALID_NAME: "John Doe",
  VALID_EMAIL: "test@test.com",
  VALID_PASSWORD: "Sec.ure@Pas.sw0rd*158",
  INVALID_EMAIL: "email_invalid.com",
  INVALID_PASSWORD: "123456789",
};

beforeEach(() => {
  const signupUrl = `${ghostUrl}/ghost/#/setup/two`;

  cy.visit(signupUrl);
});

describe("Create ghost account", () => {
  it("should not create a new ghost account when all inputs are empty", () => {
    cy.get(
      "button.gh-btn.gh-btn-green.gh-btn-lg.gh-btn-block.gh-btn-icon.ember-view"
    ).click();

    cy.get("p.response")
      .should("have.length", 4)
      .each((response, index) => {
        expect(Cypress.$(response).text()).to.contain(
          CONSTANTS.ERROR_LABELS[index]
        );
      });

    cy.get("p.main-error")
      .should("have.length", 1)
      .should("contain", CONSTANTS.MAIN_ERROR_LABEL);
  });

  it("should not create a new ghost account when email is invalid", () => {
    cy.get("input[name='blog-title']").type(CONSTANTS.SITE_TITLE);
    cy.get("input[name='name']").type(CONSTANTS.VALID_NAME);
    cy.get("input[name='email']").type(CONSTANTS.INVALID_EMAIL);
    cy.get("input[name='password']").type(CONSTANTS.VALID_PASSWORD);

    cy.get(
      "button.gh-btn.gh-btn-green.gh-btn-lg.gh-btn-block.gh-btn-icon.ember-view"
    ).click();

    cy.get("p.response")
      .should("have.length", 4)
      .should("contain", CONSTANTS.INVALID_EMAIL_ERROR);
  });

  it("should not create a new ghost account when password has less than 10 characters", () => {
    cy.get("input[name='blog-title']").type(CONSTANTS.SITE_TITLE);
    cy.get("input[name='name']").type(CONSTANTS.VALID_NAME);
    cy.get("input[name='email']").type(CONSTANTS.VALID_EMAIL);
    cy.get("input[name='password']").type(CONSTANTS.INVALID_PASSWORD);

    cy.get(
      "button.gh-btn.gh-btn-green.gh-btn-lg.gh-btn-block.gh-btn-icon.ember-view"
    ).click();

    cy.get("p.response")
      .should("have.length", 4)
      .should("contain", CONSTANTS.ERROR_LABELS[3]);
  });

  it("should create a new ghost account when all inputs are valid", () => {
    cy.get("input[name='blog-title']").type(CONSTANTS.SITE_TITLE);
    cy.get("input[name='name']").type(CONSTANTS.VALID_NAME);
    cy.get("input[name='email']").type(CONSTANTS.VALID_EMAIL);
    cy.get("input[name='password']").type(CONSTANTS.VALID_PASSWORD);

    cy.get("button.gh-btn.gh-btn-green.gh-btn-lg.gh-btn-block.gh-btn-icon.ember-view").click();

    cy.get("button.gh-flow-skip").click();
    cy.visit(`${ghostUrl}/ghost/#/signout`);
    cy.visit(`${ghostUrl}/ghost/#/site`);
    cy.get("input[name='identification']").type(CONSTANTS.VALID_EMAIL);
    cy.get("input[name='password']").type(CONSTANTS.VALID_PASSWORD);
    cy.get("button.login").click();
  });
});
