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
    And I go to ServiceOffers Page
    Then Select the Service offer "AllRepair"
    And I click the "Delete" button now
    And I click the "Delete" button now
    Then i check the service offer list

  Scenario: Delete Service Offer with not service offer owner
    Given I'm in the homepage
    And I'm not logged in
    And I click the "Login" menu
    And fill the login form with
      | FIELD    | VALUE         |
      | username | user2          |
      | password | password      |
    And I click the "Submit" button
    And I'm logged in as user "user2"
    And I'm in the homepage
    And I go to ServiceOffers Page
    When Select the Service offer "All types Repair"
    Then There is no "Delete" button
