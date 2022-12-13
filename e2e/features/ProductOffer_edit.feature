Feature: Edit a exist ProductOffer
  In order to use the app
  As a user
  I want to modified a Product Offer

  Scenario: Edit a exist product offer
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Login" menu
    And fill the login form with
      | FIELD    | VALUE         |
      | username | demo          |
      | password | password      |
    And I click the "Submit" button
    Then Go to Product offer "1"
    And I click the "Edit" button
