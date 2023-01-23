Feature: Edit a exist ServiceOffer
  In order to use the app
  As a user
  I want to edit a exist Service Offer

  Scenario: Edit Service Offer
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I go to ServiceOffers Page
    Then Select the Service offer "All types Repair"
    And I click the "Edit" button
    And I fill the edit service offer form with
      | FIELD    | VALUE         |
      | name | All types Repair      |
      | description    | Repair Laptop EditTest  |
      | price | 100     |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 10      |
    And I click the "Submit" button
    And I go to ServiceOffers Page

  Scenario: Edit Service Offer with mistakes in field name product
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I go to ServiceOffers Page
    Then Select the Service offer "All types Repair"
    And I click the "Edit" button
    And I fill the edit service offer form with
      | FIELD    | VALUE         |
      | name | A         |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 10      |
    When I click the "Submit" button now
    Then I see the alert message "ServiceOffer name: length must be between 2 and 24"

  Scenario: Register new Product Offer with mistakes in field description product
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I go to ServiceOffers Page
    Then Select the Service offer "All types Repair"
    And I click the "Edit" button
    And I fill the edit service offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 10      |
    When I click the "Submit" button now
    Then I see the alert message "ServiceOffer description: length must be between 10 and 200"

  Scenario: Register new Product Offer with mistakes in field date product
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I go to ServiceOffers Page
    Then Select the Service offer "All types Repair"
    And I click the "Edit" button
    And I fill the edit service offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram  |
      | price | 700      |
      | dateTime | 07/07/20     |
      | availability | true      |
      | durationInHours | 10      |
    When I click the "Submit" button now
    When I click the "Submit" button now
    Then I see the alert message "Text '07/07/20' could not be parsed at index 0"

  Scenario: Non owner user of a service offer doesn't see the edit button
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
    And I go to ServiceOffers Page
    Then Select the Service offer "All types Repair"
    And There is no "Edit" button

  Scenario: Edit Service Offer with not service offer owner
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

