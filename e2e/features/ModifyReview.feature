Feature: Modify review

Scenario: Modify number of stars in a review
 Given I'm in the homepage
 When I click the "Register" menu
 And I fill the form with
      | FIELD    | VALUE         |
      | username | user13          |
      | email    | user13@demo.app |
      | password | password      |
 And I click the "Submit" button
 And I'm logged in as user "user13"
 And I click on nav link "Reviews"
 And I click on card-text item "Great!"
 And I wait for the "Great!" content to appear
 And I click the "Edit" button
 And I clear and fill the form with
      | FIELD    | VALUE      |
      | stars    | 2          |
 When I click the "Update" button
 Then I get redirected to that review page

 Scenario: Modify message in a review
 Given I'm in the homepage
 And I log in as "user13" with password "password"
 And I'm logged in as user "user13"
 And I click on nav link "Reviews"
 And I click on card-text item "Great!"
 And I wait for the "Great!" content to appear
 And I click the "Edit" button
 And I clear and fill the form with
      | FIELD    | VALUE      |
      | message  | Nice!      |
 When I click the "Update" button
 Then I get redirected to that review page

 Scenario: Modify message and number of stars in a review
 Given I'm in the homepage
 And I log in as "user13" with password "password"
 And I'm logged in as user "user13"
 And I click on nav link "Reviews"
 And I click on card-text item "Very good!"
 And I wait for the "Nice!" content to appear
 And I click the "Edit" button
 And I clear and fill the form with
      | FIELD    | VALUE      |
      | message  | Not bad!   |
      | stars    | 3          |
 When I click the "Update" button
 Then I get redirected to that review page