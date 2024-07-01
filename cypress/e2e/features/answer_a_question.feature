Feature: Answer a question

Background:
   Given the student is on the ISTQB exam page


Scenario: Select a valid answer
When the user select answer "Respuesta B" on question "1"
And the user press button finish test
And the user select answer "Respuesta A" on question "2"
And the user check answer "A" on question "3"
And the user press correct button on question "1"
Then the user should see the message "Incorrect, -1 points." on question "1"

Scenario Outline: Correct a question
When the user select answer <selectedAnswer> on question <questionNumber>
And the user press correct button on question <questionNumber>
Then the user should see the message <expectedMessage> on question <questionNumber>

Examples:
   | questionNumber   | selectedAnswer   | expectedMessage |
   | "1"              | "Respuesta B"    | "Incorrect, -1 points." |
   | "1"              | "Respuesta A"    | "Correct, 2 points." |
   | "1"              | "--"             | "Incorrect, 0 points." |


Scenario: Answer multiple questions 2
When the user answers questions:
    | questionNumber | selectedAnswer |
    | 1              | Respuesta B    |
    | 2              | Respuesta A    |
When the user press button finish test