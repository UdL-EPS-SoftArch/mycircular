Feature: Register User
  In order to use the app
  As a user
  I want to register myself and get an account

  Scenario: Register new user
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE         |
      | username | user          |
      | email    | user@demo.app |
      | password | password      |
    And I click the "Submit" button
    Then I'm logged in as user "user"

  Scenario: Register existing username
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE         |
      | username | user          |
      | email    | user@demo.app |
      | password | password      |
    And I click the "Submit" button
    Then I see error message "Unique index or primary key violation"

  Scenario: Register user when already authenticated
    Given I'm in the homepage
    And I log in as "user" with password "password"
    Then The "Register" menu is not present

  Scenario: Register user with empty password
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE         |
      | username | user          |
      | email    | user@demo.app |
    Then The "Submit" button is disabled

  Scenario: Register user with empty email
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE         |
      | username | user          |
      | password | password      |
    Then The "Submit" button is disabled

  Scenario: Register user with invalid email
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE         |
      | username | user          |
      | email    | userdemo.app  |
      | password | password      |
    Then The "Submit" button is disabled
    And I see input field feedback message "An e-mail is required"

  Scenario: Register user with password shorter than 8 characters
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE         |
      | username | user          |
      | email    | user@demo.app |
      | password | pass          |
    Then The "Submit" button is disabled

  Scenario: Register user with an existing email
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE         |
      | username | user2         |
      | email    | user@demo.app |
      | password | password      |
    And I click the "Submit" button
    Then I see error message "Unique index or primary key violation"
