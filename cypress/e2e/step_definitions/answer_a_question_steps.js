import {
    Given,
    When,
    Then,
    And,
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

  When('the user answers questions:', (dataTable) => {

    dataTable.hashes().forEach(element => {
      //aqui dentro va el codigo que quieres que se repita por cada elemento del array
      //element. el nombre que hayais puesto en el feature a la columna de la tabla
      cy.get('[data-cy="question'+element.questionNumber+'"]').select(element.selectedAnswer);
      
      
    });

  }); 
When('the user press button finish test', () => {
  // Write code here that turns the phrase above into concrete actions
})
