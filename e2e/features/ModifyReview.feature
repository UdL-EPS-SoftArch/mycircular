Feature: Modify review

Scenario: Modify number of stars in a review
 Given I'm in the homepage
 And I log in as "user" with password "password"
 And I'm logged in as user "user"
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
 And I log in as "user" with password "password"
 And I'm logged in as user "user"
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
 And I log in as "user" with password "password"
 And I'm logged in as user "user"
 And I click on nav link "Reviews"
 And I click on card-text item "Nice!"
 And I wait for the "Nice!" content to appear
 And I click the "Edit" button
 And I clear and fill the form with
      | FIELD    | VALUE      |
      | message  | Not bad!   |
      | stars    | 3          |
 When I click the "Update" button
 Then I get redirected to that review page