import { editProfilePage } from "../../pagesGhost5/editProfile";
import { loginPage } from "../../pagesGhost5/login";
import GENERAL_CONSTANTS from "../constants";

const CONSTANTS = {
  ERROR_LABELS: ["Please enter a name."],
  USER_LOCATION: "Colombia",
  FACEBOOK_URL: "https://www.facebook.com/",
  FACEBOOK_USERNAME: "test_user",
};

describe("Edit profile", () => {
  beforeEach(() => {
    loginPage.login(
      GENERAL_CONSTANTS.VALID_EMAIL,
      GENERAL_CONSTANTS.VALID_PASSWORD
    );

    cy.wait(500);
    editProfilePage.visitEditProfilePage();
    cy.wait(500);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should not be able to edit profile if the user name is empty", () => {
    editProfilePage.elements.nameInput().clear();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    editProfilePage.elements.saveButton().click();
    editProfilePage.elements.inputErrors().contains(CONSTANTS.ERROR_LABELS[0]);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should be able to edit user location", () => {
    editProfilePage.elements.locationInput().clear();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    editProfilePage.elements.locationInput().type(CONSTANTS.USER_LOCATION, {
      force: true,
    });
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);

    editProfilePage.elements.saveButton().click();

    editProfilePage.elements.savedButton().should("be.visible");
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should have the same slug if input is cleared", () => {
    editProfilePage.elements.slugInput().clear();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);

    const defaultSlug =
      GENERAL_CONSTANTS.VALID_NAME.split(" ")[0].toLowerCase();

    editProfilePage.elements.slugInput().click().blur();

    editProfilePage.elements.slugInput().should("have.value", defaultSlug);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should auto include the facebook url when input gets unfocused", () => {
    editProfilePage.elements.facebookInput().clear();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    editProfilePage.elements.facebookInput().type(CONSTANTS.FACEBOOK_USERNAME, {
      force: true,
    });

    const url = `${CONSTANTS.FACEBOOK_URL}${CONSTANTS.FACEBOOK_USERNAME}`;

    editProfilePage.elements.facebookInput().click().blur();

    editProfilePage.elements.facebookInput().should("have.value", url);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });
});
