Feature: Create a new Transaction
  In order to use the app
  As a user
  I want to create a new Transaction

  Scenario: Create a new Transaction
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And There are a announcements created
    When I fill the create transaction form with
      | FIELD    | VALUE |
      | price    | 10    |
      | seller   | demo  |
      | buyer    | demo  |
    And I click the "Create" button

  Scenario: Creating a Transaction with invalid price
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And There are a announcements created
    When I fill the create transaction form with
      | FIELD    | VALUE  |
      | price    | 0      |
      | seller   | demo   |
      | buyer    | demo   |
    And I click the "Create" button
    Then I see error message "The price must be greater than 0"


    Scenario: Creating a Transaction with no price
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And There are a announcements created
    When I fill the create transaction form with
      | FIELD    | VALUE  |
      | seller   | demo   |
      | buyer    | demo   |
    And I click the "Create" button
    Then I see error message "The transaction must have a price"
