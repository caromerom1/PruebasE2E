import { editPostPage } from "../../pagesGhost5/editPost";
import { loginPage } from "../../pagesGhost5/login";
import GENERAL_CONSTANTS from "../constants";

const ghostUrl = Cypress.env("ghostUrl");

const CONSTANTS = {
  POST_TITLE: "Test post",
  POST_CONTENT: "Test post content",
};

describe("Edit post", () => {
  beforeEach(() => {
    loginPage.login(
      GENERAL_CONSTANTS.VALID_EMAIL,
      GENERAL_CONSTANTS.VALID_PASSWORD
    );

    cy.wait(500);
    cy.visit(`${ghostUrl}/ghost/#/posts?type=draft`);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    editPostPage.elements.firstPost().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should be able to edit a post title", () => {
    editPostPage.elements.postTitleInput().clear();

    const updatedTitle = `${CONSTANTS.POST_TITLE} Updated`;
    editPostPage.editPost(updatedTitle, "");
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);

    editPostPage.elements.contentInput().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);

    editPostPage.elements.navigateToPosts().click();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);

    cy.wait(1000);

    editPostPage.elements.firstPost().should("contain", updatedTitle);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should be able to edit a post content", () => {
    editPostPage.elements.contentInput().clear();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);

    const updatedContent = `${CONSTANTS.POST_CONTENT} Updated`;
    editPostPage.editPost("", updatedContent);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    editPostPage.elements.navigateToPosts().click();
    cy.wait(1000);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    editPostPage.elements.firstPost().click();
    cy.wait(1000);

    editPostPage.elements.contentInput().should("contain", updatedContent);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  it("should change the post title to '' if it is changed to empty text", () => {
    editPostPage.elements.postTitleInput().clear();
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);

    editPostPage.elements.contentInput().click();
    cy.wait(1000);

    editPostPage.elements.postTitleInput().should("have.value", "");
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });
});
