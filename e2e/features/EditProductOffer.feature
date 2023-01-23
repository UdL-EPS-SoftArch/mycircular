Feature: edit a exist ProductOffer
  In order to use the app
  As a user
  I want to edit a exist Product Offer

  Scenario: Edit Product Offer
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I go to ProductOffers Page
    Then Select the Product offer "Laptop Asus 2"
    And I click the "Edit" button
    And I fill the edit product offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus 2          |
      | description    | Laptop Asus 2 description test  |
      | price | 1000      |
      | dateTime | 2018-02-12T12:08:23Z     |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button
    And I go to ProductOffers Page

  Scenario: Edit Product Offer with mistakes in field description product
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I go to ProductOffers Page
    Then Select the Product offer "Laptop Asus 2"
    And I click the "Edit" button
    And I fill the edit product offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus 2         |
      | description    | Asus |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    When I click the "Submit" button now
    Then I see the alert message "ProductOffer description: length must be between 10 and 200"

  Scenario: Edit Product Offer with mistakes in field name product
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I go to ProductOffers Page
    Then Select the Product offer "Laptop Asus 2"
    And I click the "Edit" button
    And I fill the edit product offer form with
      | FIELD    | VALUE         |
      | name | A         |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    When I click the "Submit" button now
    Then I see the alert message "ProductOffer name: length must be between 2 and 24"

  Scenario: Edit Product Offer with mistakes in field date product
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I go to ProductOffers Page
    Then Select the Product offer "Laptop Asus 2"
    And I click the "Edit" button
    And I fill the edit product offer form with
      | FIELD    | VALUE         |
      | name | Laptop Asus 2         |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram  |
      | price | 700      |
      | dateTime | 07/07/20     |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    When I click the "Submit" button now
    Then I see the alert message "Text '07/07/20' could not be parsed at index 0"

  Scenario: Edit Product Offer with other user
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
    And I go to ProductOffers Page
    Then Select the Product offer "Laptop Asus 2"
    And I click the "Edit" button
    And I fill the edit product offer form with
      | FIELD    | VALUE         |
      | price | 7000      |
    When I click the "Submit" button now
    Then I see the alert message "This user cannot edit this product offer because it is not its owner."
