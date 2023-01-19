Feature: Submit review
  In order to use the App
  As a buyer
  I want to submit a review to a seller

Scenario: Submit a new review as admin
  Given I'm in the homepage
  And I log in as "admin" with password "password"
  And I wait for the "Reviews" nav-link to appear
  And I click on nav link "Reviews"
  Then The button "Create Rating" does not exist

Scenario: Submit a new review with number of stars equals 0
  Given I'm in the homepage
  And I log in as "demo2" with password "password"
  And I'm logged in as user "demo2"
  And I click on nav link "Reviews"
  And I click the "Create Rating" button
  And I fill the form with
      | FIELD    | VALUE      |
      | message  | Good!!!!   |
      | stars    | 0          |
  And I click on dropdown menu "demo"
  When I click the "Submit" button
  Then I see error message "Review stars: The number of stars must be greater than or equal 1"

Scenario: Submit a new review with overvalued number of stars
  Given I'm in the homepage
  And I log in as "demo2" with password "password"
  And I'm logged in as user "demo2"
  And I click on nav link "Reviews"
  And I click the "Create Rating" button
  And I fill the form with
      | FIELD    | VALUE      |
      | message  | Good!!!!   |
      | stars    | 7          |
  And I click on dropdown menu "demo"
  When I click the "Submit" button
  Then I see error message "Review stars: The number of stars must be less than or equal 5"

Scenario: Submit a new review as user
  Given I'm in the homepage
  When I click the "Register" menu
  And I fill the form with
    | FIELD    | VALUE           |
    | username | user14          |
    | email    | user14@demo.app |
    | password | password        |
  And I click the "Submit" button
  And I'm logged in as user "user14"
  And I click on nav link "Reviews"
  And I click the "Create Rating" button
  And I click on dropdown menu "demo2"
  And I fill the form with
      | FIELD    | VALUE      |
      | message  | Wonderful  |
      | stars    | 5          |
      | about    | demo2      |
  When I click the "Submit" button
  Then I wait for the "Wonderful" content to appear

Scenario: Submit a new review without a message
  Given I'm in the homepage
  When I click the "Register" menu
  And I fill the form with
    | FIELD    | VALUE           |
    | username | user15          |
    | email    | user15@demo.app |
    | password | password        |
  And I click the "Submit" button
  And I'm logged in as user "user15"
  And I click on nav link "Reviews"
  And I click the "Create Rating" button
  And I click on dropdown menu "demo"
  And I fill the form with
      | FIELD    | VALUE      |
      | stars    | 2          |
      | about    | demo       |
  When I click the "Submit" button
  Then I wait for the "Author: user15" content to appear




