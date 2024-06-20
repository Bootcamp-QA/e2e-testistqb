Feature: Welcome the student

Scenario: Enter a name with less than 10 characters

Given the student is on the ISTQB exam page
When the student enters the name "Marta"
And press start button
Then the student should see the message "Welcome Marta"


Scenario: Enter a name with more than 10 characters

Given the student is on the ISTQB exam page
When the student enters the name "Jose Manuel Diaz"
And press start button
Then the student should see the message "Welcome Jose Manue"



