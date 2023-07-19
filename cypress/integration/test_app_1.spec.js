/// <reference types="cypress" />

import testApp1Po from "../../cypress/support/testApp1";
const testApp1 = new testApp1Po();

describe("Test app Sign-up and Sign-in ", () => {
  describe("should display elements on the page", () => {
    before ( 'visit page', () => {
      testApp1.enVersion()
    })

    it("should get page title", () => {
      cy.title().should("equal", "Car of your dream");
    });

    it("Get text on the page", () => {
      cy.contains("Car of your dream");
      cy.contains("It is required only one minute");
      cy.contains("Forgot password?");
      cy.contains("All copyrights are reserved.");
      cy.contains("Sign-up");
      cy.contains("Sign-in");
    });

    it("Get Links' ", () => {
      testApp1.enLink().should("be.visible").click();
      cy.url().should("be.equal", "http://localhost:3000/app/test_app_1.html?lang=en");
      testApp1.ruLink().should("be.visible").click();
      cy.url().should("be.equal", "http://localhost:3000/app/test_app_1.html?lang=ru");
      testApp1.enLink().should("be.visible").click();
      testApp1.restoreLink().should("be.visible").click();
      cy.url().should("be.equal", "http://localhost:3000/app/test_app_1.html?lang=en");
    });

    it("Get Inputs ", () => {
      testApp1
        .firstNameInput()
        .should("be.empty")
        .should("have.attr", "placeholder", "First Name"); 
      testApp1
        .lastNameInput()
        .should("be.empty")
        .should("have.attr", "placeholder", "Last Name");
      testApp1
        .aboutYearselfInput()
        .should("be.empty")
        .should("have.attr", "placeholder", "About yourself");
      testApp1
        .signUpEmailInput()
        .should("be.empty")
        .should("have.attr", "placeholder", "Email");
      testApp1
        .signUpPasswordInput()
        .should("be.empty")
        .should("have.attr", "placeholder", "Password");
      testApp1
        .signInEmailInput()
        .should("be.empty")
        .should("have.attr", "placeholder", "Email");
      testApp1
        .signInPasswordInput()
        .should("be.empty")
        .should("have.attr", "placeholder", "Password");
    });

    it("Get Buttons ", () => {
      testApp1
        .signUpResetButton()
        .should("be.visible")
        .and("be.enabled")
        .and("have.text", "Reset");
      testApp1
        .signUpContinueButton()
        .should("be.visible")
        .and("have.text", "Continue")
      testApp1
        .signInResetButton()
        .should("be.visible")
        .and("be.enabled")
        .and("have.text", "Reset");
      testApp1
        .signInLoginButton()
        .should("be.visible")
        .and("have.text", "Login")
    });
  });

  describe("should do Sign-Up user", () => {
    beforeEach ( 'visit page', () => {
      testApp1.enVersion()
    })

    it('should do register user', () => {
      testApp1.firstNameInput().type('Harry');
      testApp1.lastNameInput().type('Potter');
      testApp1.signUpEmailInput().type('test@test.com');
      testApp1.signUpPasswordInput().type('qwerty');
      testApp1.signUpContinueButton().click();
      cy.get('.main .success').should('have.text', 'You are registered');
    });
  });

  describe("should do Sign-In user", () => {
    beforeEach ( 'visit page', () => {
      testApp1.enVersion()
    })

    it('should do login user', () => {
      testApp1.signInEmailInput().type('test@test.com');
      testApp1.signInPasswordInput().type('qwerty');
      testApp1.signInLoginButton().click();
      cy.get('.main .success').should('have.text', 'You are logged in');
    });
  });
});

