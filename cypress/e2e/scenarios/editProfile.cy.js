import GENERAL_CONSTANTS from "../constants";
const ghostUrl = Cypress.env("ghostUrl");

const CONSTANTS = {
  ERROR_LABELS: ["Please enter a name."],
  USER_LOCATION: "Colombia",
  FACEBOOK_URL: "https://www.facebook.com/",
  FACEBOOK_USERNAME: "test_user",
};

describe("Edit profile", () => {
  beforeEach(() => {
    cy.visit(`${ghostUrl}/ghost/#/signin`);
    cy.get("input[name='identification']").type(GENERAL_CONSTANTS.VALID_EMAIL);
    cy.get("input[name='password']").type(GENERAL_CONSTANTS.VALID_PASSWORD);
    cy.get("button.login").click();

    cy.wait(500);
    const userParam = GENERAL_CONSTANTS.VALID_NAME.split(" ")[0].toLowerCase();
    cy.visit(`${ghostUrl}/ghost/#/staff/${userParam}`);
  });

  it("should not be able to edit profile if the user name is empty", () => {
    cy.get("input[placeholder='Full Name']").clear();
    cy.get("button.gh-btn").contains("Save").click();
    cy.get("p.response").contains(CONSTANTS.ERROR_LABELS[0]);
  });

  it("should be able to edit user location", () => {
    cy.get("input#user-location").clear();
    cy.get("input#user-location").type(CONSTANTS.USER_LOCATION, {
      force: true,
    });

    cy.get("button.gh-btn").contains("Save").click();

    cy.get("button.gh-btn").contains("Saved");
  });

  it("should have the same slug if input is cleared", () => {
    cy.get("input[placeholder='Slug']").clear();

    const defaultSlug =
      GENERAL_CONSTANTS.VALID_NAME.split(" ")[0].toLowerCase();

    cy.get("input[placeholder='Slug']").click().blur();

    cy.get("input[placeholder='Slug']").should("have.value", defaultSlug);
  });

  it("should auto include the facebook url when input gets unfocused", () => {
    cy.get("input[name='user[facebook]']").clear();
    cy.get("input[name='user[facebook]']").type(CONSTANTS.FACEBOOK_USERNAME, {
      force: true,
    });

    const url = `${CONSTANTS.FACEBOOK_URL}${CONSTANTS.FACEBOOK_USERNAME}`;

    cy.get("input[name='user[facebook]']").click().blur();

    cy.get("input[name='user[facebook]']").should("have.value", url);
  });
});
