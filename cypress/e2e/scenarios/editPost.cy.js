import GENERAL_CONSTANTS from "../constants";
const ghostUrl = Cypress.env("ghostUrl");

const CONSTANTS = {
  POST_TITLE: "Test post",
  POST_CONTENT: "Test post content",
};

describe("Edit post", () => {
  beforeEach(() => {
    cy.visit(`${ghostUrl}/ghost/#/signin`);
    cy.get("input[name='identification']").type(GENERAL_CONSTANTS.VALID_EMAIL);
    cy.get("input[name='password']").type(GENERAL_CONSTANTS.VALID_PASSWORD);
    cy.get("button.login").click();

    cy.wait(500);
    cy.visit(`${ghostUrl}/ghost/#/posts?type=draft`);
  });

  it("should be able to edit a post title", () => {

    cy.get(".gh-list-row.gh-posts-list-item").first().click();

    cy.get("textarea[placeholder='Post Title']").clear();
    const updatedTitle = `${CONSTANTS.POST_TITLE} Updated`;

    cy.get("textarea[placeholder='Post Title']").type(updatedTitle, {
      force: true,
    });

    cy.get(".koenig-editor__editor").click();

    cy.get("a[href='#/posts/?type=draft']").contains("Posts").click();

    cy.get(".gh-list-row.gh-posts-list-item")
      .first()
      .should("contain", updatedTitle);
  });

  it("should be able to edit a post content", () => {
    cy.get(".gh-list-row.gh-posts-list-item").first().click();

    cy.get(".koenig-editor__editor").clear();
    const updatedContent = `${CONSTANTS.POST_CONTENT} Updated`;
    cy.get(".koenig-editor__editor").type(updatedContent, {
      force: true,
    });
    cy.get("a[href='#/posts/?type=draft']").contains("Posts").click();
    cy.get(".gh-list-row.gh-posts-list-item").first().click();

    cy.get(".koenig-editor__editor").should("contain", updatedContent);
  });

  it("should change the post title to (Untitled) if it is changed to empty text", () => {
    cy.get(".gh-list-row.gh-posts-list-item").first().click();

    cy.get("textarea[placeholder='Post Title']").clear();

    cy.get(".koenig-editor__editor").click();

    cy.get("textarea[placeholder='Post Title']").should(
      "have.value",
      "(Untitled)"
    );
  });
});
