Feature: Edit a exist ServiceOffer
  In order to use the app
  As a user
  I want to edit a exist Service Offer

  Scenario: Edit Service Offer
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Service offer edit page with id "1"
    And I fill the edit service offer form with
      | FIELD    | VALUE         |
      | name | Repair Laptop EditTest      |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 100     |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 10      |
    And I click the "Submit" button
    Then i check the service offer with id "1"

  Scenario: Edit Service Offer with not service offer owner
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Login" menu
    And fill the login form with
      | FIELD    | VALUE         |
      | username | user2          |
      | password | password      |
    And I click the "Submit" button
    And I'm logged in as user "user2"
    Given I'm in the homepage
    Then Go to Service offer edit page with id "1"
    And I fill the edit service offer form with
      | FIELD    | VALUE         |
      | price | 500     |
    And I click the "Submit" button
    And I click the "Submit" button
    And I click the "Submit" button
    Then I see the alert message "This user cannot edit this service offer because it is not its owner."
