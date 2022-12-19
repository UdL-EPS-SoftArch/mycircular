Feature: Create a new ProductOffer
  In order to use the app
  As a user
  I want to register a new Product Offer

  Scenario: Register new Product Offer
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
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
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
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
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Product offer create page
    And I fill the create product offer form with
      | FIELD    | VALUE         |
      | name | A         |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button
    Then I see error message for input name product "ProductOffer name: length must be between 2 and 24"

  Scenario: Register new Product Offer with mistakes in field description product
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Product offer create page
    And I fill the create product offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button
    Then I see error message for input name product "ProductOffer description: length must be between 10 and 200"

  Scenario: Register new Product Offer with mistakes in field date product
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Product offer create page
    And I fill the create product offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram  |
      | price | 700      |
      | dateTime | 07/07/20     |
      | offerer | users/demo      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button
    Then I see error message for input name product "Text '07/07/20' could not be parsed at index 0"


  Scenario: Register new Product Offer with mistakes in field Offerer product
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Product offer create page
    And I fill the create product offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram  |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z     |
      | offerer | demo      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button
    Then I see error message for input name product "Cannot resolve URI demo. Is it local or remote? Only local URIs are resolvable."
