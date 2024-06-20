import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


  When("the user select answer {string} on question {string}", (selectedAnswer,questionnumber) => {

    cy.get('[data-cy="question'+questionnumber+'"]').select(selectedAnswer);

  }); 

  When("the user check answer {string} on question {string}", (selectedAnswer,questionnumber) => {

    cy.get('[data-cy="question'+questionnumber+'"]').find('input').check(selectedAnswer);

  }); 

  When("the user press correct button on question {string}", (questionnumber) => {

    cy.get('[data-cy="button-correct-question'+questionnumber+'"]').click();

  }); 

  Then("the user should see the message {string} on question {string}", (expectedMessage,questionnumber) => {

    cy.get('[data-cy="messagequestion'+questionnumber+'"]').should('have.text',expectedMessage);

  }); 


