Feature: Search a transaction
  In order to find a transaction
  As a user
  I have to use the search bar

  Scenario: Search a transaction
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And There are a announcements created
    And There is a Transactions created
    Then We use the search bar to find a Transaction
    And We find the Transaction we were looking for
