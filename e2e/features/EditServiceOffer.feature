Feature: Edit a ServiceOffer
  In order to use the app
  As a user
  I want to edit a Service Offer

  Scenario: Edit Service Offer
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Login" menu
    And fill the login form with
      | FIELD    | VALUE         |
      | username | demo          |
      | password | password      |
    And I click the "Submit" button
    Given I'm in the homepage
    Then Go to Service offer edit page with id "1"
    And I fill the edit service offer form with
      | FIELD    | VALUE         |
      | name | Repair Laptop Asus          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 100     |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | availability | true      |
      | durationInHours | 10      |
    And I click the "Submit" button
    Then i check the service offer with id "1"
