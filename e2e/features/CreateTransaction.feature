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
    Then Go to Transaction create page
    And I fill the create transaction form with
      | FIELD    | VALUE |
      | price    | 10    |
      | seller   | demo  |
      | buyer    | demo  |
    And I click the "Create" button
