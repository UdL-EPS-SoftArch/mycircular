Feature: Modify review

Scenario: Modify number of stars in a review
 Given I'm in the homepage
 When I click the "Register" menu
 And I fill the form with
      | FIELD    | VALUE           |
      | username | user13          |
      | email    | user13@demo.app |
      | password | password        |
 And I click the "Submit" button
 And I'm logged in as user "user13"
 And I click on nav link "Reviews"
 And I click the "Create Rating" button
 And I click on dropdown menu "demo2"
 And I fill the form with
      | FIELD    | VALUE            |
      | message  | Great by user13! |
      | stars    | 5                |
      | about    | demo2            |
 When I click the "Submit" button
 And I wait for the "Great by user13!" content to appear
 And I click on card-text item "Great by user13!"
 And I wait for the "Great by user13!" content to appear
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
 And I click on card-text item "Great by user13!"
 And I wait for the "Great by user13!" content to appear
 And I click the "Edit" button
 And I clear and fill the form with
      | FIELD    | VALUE                |
      | message  | Nice by user13!      |
 When I click the "Update" button
 Then I get redirected to that review page

 Scenario: Modify message and number of stars in a review
 Given I'm in the homepage
 And I log in as "user13" with password "password"
 And I'm logged in as user "user13"
 And I click on nav link "Reviews"
 And I click on card-text item "Nice by user13!"
 And I wait for the "Nice by user13!" content to appear
 And I click the "Edit" button
 And I clear and fill the form with
      | FIELD    | VALUE                 |
      | message  | Not bad by user13!!   |
      | stars    | 3                     |
 When I click the "Update" button
 Then I get redirected to that review page

 Scenario: Modify review as different user than author
 Given I'm in the homepage
 And I log in as "demo" with password "password"
 And I wait for the "Reviews" nav-link to appear
 And I click on nav link "Reviews"
 And I wait for the "Not bad by user13!" content to appear
 And I click on card-text item "Not bad by user13!"
 Then The button "Edit" does not exist

Scenario: Modify review as admin
 Given I'm in the homepage
 And I log in as "admin" with password "password"
 And I wait for the "Reviews" nav-link to appear
 And I click on nav link "Reviews"
 And I wait for the "Not bad by user13!" content to appear
 And I click on card-text item "Not bad by user13!"
 Then The button "Edit" does not exist


