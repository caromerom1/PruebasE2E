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
});

describe("Create post", () => {
  it("should create a new post", () => {
    createPostPage.createPost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT);

    createPostPage.elements.notification().should("be.visible");
  });

  it("should create a new post with title '(untitled)' when no title is set", () => {
    createPostPage.createPost("", CONSTANTS.POST_CONTENT);

    createPostPage.elements.notification().should("be.visible");

    createPostPage.elements.postTitleInput().should("have.value", "(Untitled)");
  });

  it("should not be able create a new post when it does not have content", () => {
    createPostPage.elements.postTitleInput().type(CONSTANTS.POST_TITLE);

    createPostPage.elements.publishButton().should("not.exist");
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
