Feature: Visit Istqb Test Page

    As a student, I want to visit istqb test page, so I can practice for my exam

Scenario: Visit istqb test page 
    Given the student is on the ISTQB exam page
    When the student click on welcome menu
    Then the istqb test page url should include welcome
    And the istqb test page title should be equal to ISTQB ONLINE TEST
    And the istqb menu should have 3 elements
    And the istqb page should have header title ISTQB Online Test

Scenario: Visit istqb test page 2
