Feature: Delete review

Scenario: Delete review as a user
 Given I'm in the homepage
 When I click the "Register" menu
 And I fill the form with
      | FIELD    | VALUE           |
      | username | user0            |
      | email    | user0@demo.app  |
      | password | password        |
 And I click the "Submit" button
 And I'm logged in as user "user0"
 And I click on nav link "Reviews"
 And I click the "Create Rating" button
 And I click on dropdown menu "demo2"
 And I fill the form with
      | FIELD    | VALUE      |
      | message  | Beautiful  |
      | stars    | 5          |
      | about    | demo2      |
 When I click the "Submit" button
 And I wait for the "Beautiful" content to appear
 And I click on card-text item "Beautiful"
 Then The button "Delete" does not exist

Scenario: Delete review as admin
 Given I'm in the homepage
 And I log in as "admin" with password "password"
 And I wait for the "Reviews" nav-link to appear
 And I click on nav link "Reviews"
 And I wait for the "Beautiful" content to appear
 And I click on card-text item "Beautiful"
 And I click the "Delete" button
 And I click the "Delete" button
 Then I get redirected to the "List Ratings" page
