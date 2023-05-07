import GENERAL_CONSTANTS from "../constants";
const ghostUrl = Cypress.env("ghostUrl");

const CONSTANTS = {
  POST_TITLE: "Test post",
  POST_CONTENT: "Test post content",
};

beforeEach(() => {
  const signupUrl = `${ghostUrl}/ghost/#/setup/two`;

  cy.visit(signupUrl);
});

beforeEach(() => {
  cy.visit(`${ghostUrl}/ghost/#/signin`);
  cy.get("input[name='identification']").type(GENERAL_CONSTANTS.VALID_EMAIL);
  cy.get("input[name='password']").type(GENERAL_CONSTANTS.VALID_PASSWORD);
  cy.get("button.login").click();

  cy.get("a[title='New post']").click();
});

describe("Create ghost account", () => {
  it("should create a new post", () => {
    cy.get("textarea[placeholder='Post Title']").type(CONSTANTS.POST_TITLE);
    cy.get(".koenig-editor__editor").type(CONSTANTS.POST_CONTENT);

    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-publishmenu-button").click();

    cy.get("div.gh-notification-content").should("be.visible");
  });

  it("should create a new post with title '(untitled)' when no title is set", () => {
    cy.get(".koenig-editor__editor").type(CONSTANTS.POST_CONTENT);

    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-publishmenu-button").click();

    cy.get("div.gh-notification-content").should("be.visible");

    cy.get("textarea[placeholder='Post Title']").should(
      "have.value",
      "(Untitled)"
    );
  });

  it("should not be able create a new post when it does not have content", () => {
    cy.get("textarea[placeholder='Post Title']").type(CONSTANTS.POST_TITLE);

    cy.get("div.gh-publishmenu-trigger").should("not.exist");
  });

  it("should be able to unpublish a post", () => {
    cy.get("textarea[placeholder='Post Title']").type(CONSTANTS.POST_TITLE);
    cy.get(".koenig-editor__editor").type(CONSTANTS.POST_CONTENT);

    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-publishmenu-button").click();

    cy.get("div.gh-publishmenu-radio").contains("Unpublished").click();
    cy.get("button.gh-publishmenu-button")
      .contains("span", "Unpublish")
      .click();
    cy.get("div.gh-notification-content").contains("Saved");
  });
});
