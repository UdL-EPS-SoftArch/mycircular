# new feature
# Tags: optional
    
Feature: Create a new Message
  In order to use the app
  As a user
  I want to create a new Message

  Scenario: Create new Message
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Go to Message create page
    And I fill the create message form with
      | FIELD    | VALUE         |
      | about | Hola          |
      | text    | Hola estic interessat amb el teu producte |
      | when | 2018-02-12T12:08:23Z      |
    And I click the "Submit" button
    Then i create a new message with id 1
