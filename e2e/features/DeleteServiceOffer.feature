Feature: Delete a ServiceOffer
  In order to use the app
  As a user
  I want to delete a Service Offer

  Scenario: Delete Service Offer
  Given I'm in the homepage
  And I'm not logged in
  When I click the "Login" menu
  And fill the login form with
  | FIELD    | VALUE         |
  | username | demo          |
  | password | password      |
  And I click the "Submit" button
    And I'm logged in as user "demo"
  Given I'm in the homepage
  Then Go to Service offer delete page with id "1"
  And I click the "Delete" button
  Then i check the service offer list

  Scenario: Register new user
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE         |
      | username | user2          |
      | email    | user2@demo.app |
      | password | password      |
    And I click the "Submit" button
    Then I'm logged in as user "user2"

  Scenario: Delete Service Offer with not service offer owner
    Given I'm in the homepage
    Then Go to Service offer delete page with id "2"
    And I click the "Delete" button
    And I click the "Delete" button
    And I click the "Delete" button
    Then I see the alert message "This user cannot delete this service offer because it is not its owner."
