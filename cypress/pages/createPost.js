class CreatePostPage {
  elements = {
    postTitleInput: () => cy.get("textarea[placeholder='Post Title']"),
    contentInput: () => cy.get(".koenig-editor__editor"),
    publishButton: () => cy.get("div.gh-publishmenu-trigger"),
    publishCheckbox: () => cy.get("button.gh-publishmenu-button"),
    unpublishCheckbox: () =>
      cy.get("div.gh-publishmenu-radio").contains("Unpublished"),
    unPublishButton: () =>
      cy.get("button.gh-publishmenu-button").contains("span", "Unpublish"),
    notification: () => cy.get("div.gh-notification-content"),
    newPostButton: () => cy.get("a[title='New post']"),
    addCustomContentButton: () => cy.get("button.koenig-plus-menu-button"),
    emailSection: () => cy.get("div").contains("Email"),
    emailCard: () => cy.get(".kg-email-card"),
  };

  createPost(title, content) {
    if (title) {
      this.elements.postTitleInput().type(title);
      cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    }
    if (content) {
      this.elements.contentInput().type(content);
      cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    }
    this.elements.publishButton().click();
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.publishCheckbox().click();
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  }

  addEmailContent() {
    this.elements.addCustomContentButton().click();
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.emailSection().click();
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  }
}

export const createPostPage = new CreatePostPage();
