import GENERAL_CONSTANTS from "../e2e/constants";

const ghostUrl = Cypress.env("ghostUrl");

class EditProfilePage {
  elements = {
    nameInput: () => cy.get("input[placeholder='Full Name']"),
    saveButton: () => cy.get("button.gh-btn").contains("Save"),
    savedButton: () => cy.get("button.gh-btn").contains("Saved"),
    nameError: () => cy.get("p.response"),
    locationInput: () => cy.get("input#user-location"),
    slugInput: () => cy.get("input[placeholder='Slug']"),
    facebookInput: () => cy.get("input[name='user[facebook]']"),
    inputErrors: () => cy.get("p.response"),
  };

  visitEditProfilePage() {
    const userParam = GENERAL_CONSTANTS.VALID_NAME.split(" ")[0].toLowerCase();
    cy.visit(`${ghostUrl}/ghost/#/staff/${userParam}`);
    cy.wait(1000);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  }
}

export const editProfilePage = new EditProfilePage();
