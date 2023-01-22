Feature: Create a new ServiceOffer
  In order to use the app
  As a user
  I want to register a new Service Offer

  Scenario: Register new Service Offer
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Service offer create page
    And I fill the create service offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus 2         |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 5      |
    And I click the "Submit" button
    Then i create a new service offer with id "1"

  Scenario: Register new Service Offer 2
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Service offer create page
    And I fill the create service offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus gaming laptop |
      | price | 900      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 3      |
    And I click the "Submit" button
