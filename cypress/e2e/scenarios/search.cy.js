import GENERAL_CONSTANTS from "../constants";
const ghostUrl = Cypress.env("ghostUrl");

describe("Search", () => {
  beforeEach(() => {
    cy.visit(`${ghostUrl}/ghost/#/signin`);
    cy.get("input[name='identification']").type(GENERAL_CONSTANTS.VALID_EMAIL);
    cy.get("input[name='password']").type(GENERAL_CONSTANTS.VALID_PASSWORD);
    cy.get("button.login").click();

    cy.wait(500);
  });

  it("should open search modal when ctrl+k is pressed", () => {
    cy.get(".gh-nav-search-modal").should("not.exist");
    cy.get("body").type("{ctrl}k");
    cy.get(".gh-nav-search-modal").should("exist");
  });

  it("should close search modal when esc is pressed", () => {
    cy.get(".gh-nav-search-modal").should("not.exist");
    cy.get("body").type("{ctrl}k");
    cy.get(".gh-nav-search-modal").should("exist");
    cy.get("body").type("{esc}");
    cy.get(".gh-nav-search-modal").should("not.exist");
  });
});
