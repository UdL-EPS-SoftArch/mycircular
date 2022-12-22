Feature: Delete review

Scenario: Delete review as a user
 Given I'm in the homepage
 When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE         |
      | username | user12          |
      | email    | user12@demo.app |
      | password | password      |
 And I click the "Submit" button
 And I'm logged in as user "user12"
 And I click on nav link "Reviews"
 And I click on card-text item "Very good!"
 And I wait for the "Very good!" content to appear
 And I click the "Delete" button
 And I click the "Delete" button
 Then I get redirected to the "List Ratings" page