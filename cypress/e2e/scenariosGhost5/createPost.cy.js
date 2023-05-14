import GENERAL_CONSTANTS from "../constants";
import { loginPage } from "../../pagesGhost5/login";
import { createPostPage } from "../../pagesGhost5/createPost";

const CONSTANTS = {
  POST_TITLE: "Test post",
  POST_CONTENT: "Test post content",
};

beforeEach(() => {
  loginPage.login(
    GENERAL_CONSTANTS.VALID_EMAIL,
    GENERAL_CONSTANTS.VALID_PASSWORD
  );
  createPostPage.elements.newPostButton().click();
  cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
});

describe("Create post", () => {
  it("should create a new post", () => {
    createPostPage.createPost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT);

    createPostPage.elements.publishSuccessTitle().should("be.visible");
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should create a new post with title '' when no title is set", () => {
    createPostPage.createPost("", CONSTANTS.POST_CONTENT);

    createPostPage.elements.publishSuccessTitle().should("be.visible");

    createPostPage.elements.backToEditorButton().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);

    createPostPage.elements.postTitleInput().should("have.value", "");
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should not be able create a new post when it does not have content", () => {
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    createPostPage.elements.postTitleInput().type(CONSTANTS.POST_TITLE);

    createPostPage.elements.publishButton().should("not.exist");
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should be able to unpublish a post", () => {
    createPostPage.createAndUnpublishPost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT);

    createPostPage.elements.notification().contains("Post successfully reverted to a draft.")
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should be able to add email only content", () => {
    createPostPage.addEmailContent();
    createPostPage.elements.emailCard().should("exist");
  });
});
