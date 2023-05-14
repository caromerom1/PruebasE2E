class CreatePostPage {
  elements = {
    postTitleInput: () => cy.get("textarea[placeholder='Post title']"),
    contentInput: () => cy.get(".koenig-editor__editor"),
    publishButton: () => cy.get("button[data-test-button='publish-flow']"),
    confirmPublishButton: () => cy.get("button[data-test-button='continue']"),
    publishPostRightNowButton: () =>
      cy.get("button[data-test-button='confirm-publish']"),
    revertToDraftButton: () =>
      cy.get("button[data-test-button='revert-to-draft']"),
    unPublishButton: () => cy.get("button[data-test-button='update-flow']"),
    publishSuccessTitle: () => cy.get("div[data-test-complete-title]"),
    backToEditorButton: () =>
      cy.get("button[data-test-button='back-to-editor']"),
    newPostButton: () => cy.get("a[title='New post']"),
    addCustomContentButton: () => cy.get("button.koenig-plus-menu-button"),
    emailSection: () => cy.get("div").contains("Email"),
    emailCard: () => cy.get(".kg-email-card"),
    notification: () => cy.get("div[data-test-text='notification-content']"),
  };

  createPost(title, content) {
    if (title) {
      this.elements.postTitleInput().type(title);
      cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    }
    if (content) {
      this.elements.contentInput().type(content);
      cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    }
    this.elements.publishButton().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    cy.wait(1000);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.confirmPublishButton().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    cy.get(".gh-publish-settings-container").screenshot(
      `v5-${Cypress.currentTest.titlePath.join("/")}/step`
    );
    this.elements.publishPostRightNowButton().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    cy.get(".gh-publish-settings-container").screenshot(
      `v5-${Cypress.currentTest.titlePath.join("/")}/step`
    );
  }

  createAndUnpublishPost(title, content) {
    this.createPost(title, content);

    this.elements.backToEditorButton().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.unPublishButton().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.revertToDraftButton().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  }

  addEmailContent() {
    this.elements.contentInput().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.addCustomContentButton().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    this.elements.emailSection().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  }
}

export const createPostPage = new CreatePostPage();
