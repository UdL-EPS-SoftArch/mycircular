Feature: Delete a ProductOffer
  In order to use the app
  As a user
  I want to delete a Product Offer

  Scenario: Delete Product Offer
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Login" menu
    And fill the login form with
      | FIELD    | VALUE         |
      | username | demo          |
      | password | password      |
    And I click the "Submit" button
    And I'm logged in as user "demo"
    Given I'm in the homepage
    And I go to ProductOffers Page
    Then Select the Product offer "Laptop MSI"
    And I click the "Delete" button now
    And I click the "Delete" button now
    Then i check the product offer list

  Scenario: Delete Product Offer with not offer owner
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
    And I go to ProductOffers Page
    And Select the Product offer "Laptop Asus 2"
    And I wait for the "123456789" content to appear
    When I click the "Delete" button
    And I wait for the "confirm deletion" content to appear
    And I click the "Delete" button
    Then I see the alert message "This user cannot delete this product offer because it is not its owner."
