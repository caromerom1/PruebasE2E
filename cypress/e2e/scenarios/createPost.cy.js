import GENERAL_CONSTANTS from "../constants";
import { loginPage } from "../../pages/login";
import { createPostPage } from "../../pages/createPost";

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
  cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
});

describe("Create post", () => {
  it("should create a new post", () => {
    createPostPage.createPost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT);

    createPostPage.elements.notification().should("be.visible");
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should create a new post with title '(untitled)' when no title is set", () => {
    createPostPage.createPost("", CONSTANTS.POST_CONTENT);

    createPostPage.elements.notification().should("be.visible");
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);

    createPostPage.elements.postTitleInput().should("have.value", "(Untitled)");
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should not be able create a new post when it does not have content", () => {
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    createPostPage.elements.postTitleInput().type(CONSTANTS.POST_TITLE);

    createPostPage.elements.publishButton().should("not.exist");
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should be able to unpublish a post", () => {
    createPostPage.createPost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT);

    createPostPage.elements.unpublishCheckbox().click();
    createPostPage.elements.unPublishButton().click();
    createPostPage.elements.notification().contains("Saved");
  });

  it("should be able to add email only content", () => {
    createPostPage.addEmailContent();
    createPostPage.elements.emailCard().should("exist");
  });
});
