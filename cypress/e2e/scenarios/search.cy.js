import { loginPage } from "../../pages/login";
import { searchPage } from "../../pages/search";
import GENERAL_CONSTANTS from "../constants";

describe("Search", () => {
  beforeEach(() => {
    loginPage.login(
      GENERAL_CONSTANTS.VALID_EMAIL,
      GENERAL_CONSTANTS.VALID_PASSWORD
    );

    cy.wait(500);
  });

  it("should open search modal when ctrl+k is pressed", () => {
    searchPage.elements.searchModal().should("not.exist");
    searchPage.openSearchModal();
    searchPage.elements.searchModal().should("exist");
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should close search modal when esc is pressed", () => {
    Cypress.on("uncaught:exception", (_err, _runnable) => {
      return false;
    });
    searchPage.elements.searchModal().should("not.exist");
    searchPage.openSearchModal();
    searchPage.elements.searchModal().should("exist");
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    searchPage.closeSearchModal();
    searchPage.elements.searchModal().should("not.exist");
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });
});
