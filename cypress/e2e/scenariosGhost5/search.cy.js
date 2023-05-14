import { loginPage } from "../../pagesGhost5/login";
import { searchPage } from "../../pagesGhost5/search";
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
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should close search modal when esc is pressed", () => {
    searchPage.elements.searchModal().should("not.exist");
    searchPage.openSearchModal();
    searchPage.elements.searchModal().should("exist");
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    searchPage.closeSearchModal();
    searchPage.elements.searchModal().should("not.exist");
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });
});
