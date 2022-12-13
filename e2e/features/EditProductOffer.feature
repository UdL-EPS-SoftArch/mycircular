Feature: edit a exist ProductOffer
  In order to use the app
  As a user
  I want to edit a exist Product Offer

  Scenario: Edit Product Offer
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Login" menu
    And fill the login form with
      | FIELD    | VALUE         |
      | username | demo          |
      | password | password      |
    And I click the "Submit" button
    Then Go to Product offer edit page with id "1"
    And I fill the edit service offer form with
      | FIELD    | VALUE         |
      | name | Laptop EVGA          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram  |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z     |
      | offerer | users/demo      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button
    Then i check the Product Offer with id "1"
