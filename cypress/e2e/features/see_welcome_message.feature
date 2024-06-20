Feature: Welcome the student

Scenario: Enter a name with less than 10 characters

Given the student is on the ISTQB exam page
When the student enters the name "Reyes Mari"
Then the student should see the message "Welcome Reyes Mari"
