import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


  Given("the student is on the ISTQB exam page", () => {
    //Visitar una pagina web diferente a la que este en base url
    //cy.visit("https://bootcampqa.com/");

    //Cuando esta definida en cypress.config.js la baseurl 
    cy.visit("/");

    //borrar todas las cookies. Por defecto ya se borran en cypress antes de iniciar el test por lo que no suele ser necesario usarlo.
    cy.clearCookies();

    //recargar la pagina
    cy.reload();


  });

  When("the student click on welcome menu", () => {
    //coger un elemento de la pagina con get
    //1. Mas recomendada por data-test o data-cy
    cy.get('[data-cy="menu-welcome"]').click();
    //2. Por texto, lo segundo mas recomendado
    cy.contains("Welcome").click();
    //hacer click el titulo h2 con la palabra welcome
    cy.get('h2').contains("Welcome").click();

    //3. Algo menos recomendada pero bien, por id
    cy.get('#menu-welcome-id').click();
    //4. por clase (no recomendada)
    cy.get(".nav-link").first().click(); //el primer elemento con class=nav-link
    cy.get(".nav-link").filter('[href="#welcome"]').click(); //elemento con class=nav-link que ademas tenga atributo href=#welcome
    //5.por tipo de elemento (no recomendada, esta la que menos de todas)
    cy.get('a').first().click(); //haz click en el primer elemento de tipo a

   //HACER CLICK DERECHO
   cy.get('[data-cy="menu-welcome"]').rightclick();

   //HACER DOBLE CLICK
   cy.get('[data-cy="menu-welcome"]').dblclick();
  });

  Then("the istqb test page url should include welcome", () => {
    //la url debe tener el texto indicado
    cy.url().should('includes','#welcome');
    //la url debe ser exactamente igual al texto indicado
    cy.url().should('eq','https://bootcamp-qa.github.io/istqb-online-test/#welcome');
  });

  Then("the istqb test page title should be equal to ISTQB ONLINE TEST", () => {
    //la url debe tener el texto indicado
    cy.title().should('includes','ISTQB');
    //la url debe ser exactamente igual al texto indicado
    cy.title().should('eq','ISTQB ONLINE TEST');
  });

  Then("the istqb menu should have 3 elements", () => {
    //comprueba que hay en total 3 elementos en el menu (los elementos en el menu tienen todos data-cy menu-)
    cy.get('[data-cy*="menu-"]').should('have.length',3);
    //comprueba que en el menu hay mas de dos elementos
    cy.get('[data-cy*="menu-"]').should('have.length.greaterThan',2);
    //comprueba que en el menu hay menus de 4 elementos
    cy.get('[data-cy*="menu-"]').should('have.length.lessThan',4);
    //comprueba que en el menu no hay 1 solo elemento
    cy.get('[data-cy*="menu-"]').should('not.have.length',1);
  });

  

  Then("the istqb page should have header title ISTQB Online Test", () => {
    //COMPRUEBA QUE EL ELEMENTO ES VISIBLE
    cy.contains("ISTQB Online Test").should('be.visible');
    //COMPRUEBA QUE EL ELEMENTO TIENE EL TEXTO EXACTO
    cy.contains("ISTQB Online Test").should('have.text', 'ISTQB Online Test');
    //COMPRUEBA QUE EL ELEMENTO CONTIENE EL TEXTO
    cy.contains("ISTQB Online Test").should('include.text', 'ISTQB');
    //COMPRUEBA QUE EL ELEMENTO NO CONTIENE EL TEXTO
    cy.contains("ISTQB Online Test").should('not.contain', 'Bootcamp');
  });