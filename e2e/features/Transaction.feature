 Feature: Transacion
  In order to use the app
  As a user
  I want to create, edit and view transactions

  Scenario: View transactions list
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I am on the transactions list page
    Then I should see "Transaction List"
