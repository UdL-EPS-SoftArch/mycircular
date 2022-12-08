Feature: Create a new ProductOffer
  In order to use the app
  As a user
  I want to register a new Product Offer

  Scenario: Register new Product Offer
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Login" menu
    And fill the login form with
      | FIELD    | VALUE         |
      | username | demo          |
      | password | password      |
    And I click the "Submit" button
    When  I'm logged in
    Then Go to Product offer create page
    And I fill the create product offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button
    Then i create a new product offer with id 1

  Scenario: Register new Product Offer with empty fields
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Login" menu
    And fill the login form with
      | FIELD    | VALUE         |
      | username | demo          |
      | password | password      |
    And I click the "Submit" button
    When  I'm logged in
    Then Go to Product offer create page
    And I fill the create product offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | dateTime | 2018-02-12T12:08:23Z      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    Then The "Submit" button is disabled

  Scenario: Register new Product Offer with mistakes in field name product
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Login" menu
    And fill the login form with
      | FIELD    | VALUE         |
      | username | demo          |
      | password | password      |
    And I click the "Submit" button
    When  I'm logged in
    Then Go to Product offer create page
    And I fill the create product offer form with
      | FIELD    | VALUE         |
      | name | La         |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button
    Then I see error message "ProductOffer name: la longitud debe estar entre 2 y 24"
