class SearchPage {
  elements = {
    searchModal: () => cy.get(".gh-nav-search-modal"),
    body: () => cy.get("body"),
  }

  openSearchModal() {
    this.elements.body().type("{ctrl}k");
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  }

  closeSearchModal() {
    this.elements.body().type("{esc}");
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  }
}

export const searchPage = new SearchPage();
