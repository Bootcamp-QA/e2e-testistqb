import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


  When("the student enters the name {string}", (name) => {
    //borrar un elemento input
    cy.get('[data-cy="input-welcome-name"]').clear();
    //escribir en el elemento input
    cy.get('[data-cy="input-welcome-name"]').type(name);

  }); 

  When("press start button", () => {
    //hacer click en el boton comenzar
    cy.get('[data-cy="button-start"]').click();
  }); 


  Then("the student should see the message {string}", (welcomeMessage) => {
    cy.get('[data-cy="welcome-message"]').should('have.text', welcomeMessage);
  }); 