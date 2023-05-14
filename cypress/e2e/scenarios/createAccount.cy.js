import { createAccountPage } from "../../pages/createAccount";
import { loginPage } from "../../pages/login";
import GENERAL_CONSTANTS from "../constants";

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
};

describe("Create ghost account", () => {
  it("should not create a new ghost account when all inputs are empty", () => {
    const signupUrl = `${ghostUrl}/ghost/#/setup/two`;

    cy.visit(signupUrl);
    cy.wait(1000);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    createAccountPage.elements.createAccountButton().click();
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);

    createAccountPage.elements
      .inputErrors()
      .should("have.length", 4)
      .each((response, index) => {
        expect(Cypress.$(response).text()).to.contain(
          CONSTANTS.ERROR_LABELS[index]
        );
      });

    createAccountPage.elements
      .mainError()
      .should("have.length", 1)
      .should("contain", CONSTANTS.MAIN_ERROR_LABEL);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should not create a new ghost account when email is invalid", () => {
    createAccountPage.createAccount(
      GENERAL_CONSTANTS.SITE_TITLE,
      GENERAL_CONSTANTS.VALID_NAME,
      GENERAL_CONSTANTS.INVALID_EMAIL,
      GENERAL_CONSTANTS.VALID_PASSWORD
    );

    createAccountPage.elements
      .inputErrors()
      .should("have.length", 4)
      .should("contain", CONSTANTS.INVALID_EMAIL_ERROR);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should not create a new ghost account when password has less than 10 characters", () => {
    createAccountPage.createAccount(
      GENERAL_CONSTANTS.SITE_TITLE,
      GENERAL_CONSTANTS.VALID_NAME,
      GENERAL_CONSTANTS.VALID_EMAIL,
      GENERAL_CONSTANTS.INVALID_PASSWORD
    );

    createAccountPage.elements
      .inputErrors()
      .should("have.length", 4)
      .should("contain", CONSTANTS.ERROR_LABELS[3]);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should create a new ghost account when all inputs are valid", () => {
    createAccountPage.createAccount(
      GENERAL_CONSTANTS.SITE_TITLE,
      GENERAL_CONSTANTS.VALID_NAME,
      GENERAL_CONSTANTS.VALID_EMAIL,
      GENERAL_CONSTANTS.VALID_PASSWORD
    );

    createAccountPage.elements.skipNormalFlowButton().click();
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    cy.visit(`${ghostUrl}/ghost/#/signout`);

    loginPage.login(
      GENERAL_CONSTANTS.VALID_EMAIL,
      GENERAL_CONSTANTS.VALID_PASSWORD
    );
  });
});
