 Feature: Transacion
  In order to use the app
  As a user
  I want to create, edit and view transactions

  Scenario: View transactions list
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    When I click the "List" option in menu "Transaction"
    Then I should see "Transaction List"


   Scenario: Change transaction price
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then It creates an announcment
    Then It creates a transaction
    When I click the "List" option in menu "Transaction"
    Then I should see "Transaction List"
    Then I click the "Details" button
    Then I click the "Edit transaction" button
    Then I edit the price with the new value "23"
