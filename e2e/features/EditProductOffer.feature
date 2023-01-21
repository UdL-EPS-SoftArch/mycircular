Feature: edit a exist ProductOffer
  In order to use the app
  As a user
  I want to edit a exist Product Offer

  Scenario: Edit Product Offer
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Product offer edit page with id "1"
    And I fill the edit product offer form with
      | FIELD    | VALUE         |
      | name | Laptop EditTest          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram  |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z     |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button
    Then i check the Product Offer with id "1"

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
    Then Go to Product offer edit page with id "1"
    And I fill the edit product offer form with
      | FIELD    | VALUE         |
      | price | 7000      |
    And I click the "Submit" button
    And I click the "Submit" button
    And I click the "Submit" button
    Then I see the alert message "This user cannot edit this product offer because it is not its owner."
