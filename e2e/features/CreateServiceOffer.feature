Feature: Create a new ServiceOffer
  In order to use the app
  As a user
  I want to register a new Service Offer

  Scenario: Register new Product Offer
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Login" menu
    And fill the login form with
      | FIELD    | VALUE         |
      | username | demo          |
      | password | password      |
    And I click the "Submit" button
    Then Go to Service offer create page
    And I fill the create service offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | availability | true      |
      | durationInHours | 5      |
    And I click the "Submit" button
    Then i create a new service offer with id 1
