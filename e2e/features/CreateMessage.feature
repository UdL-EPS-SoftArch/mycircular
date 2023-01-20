# new feature
# Tags: optional

Feature: Create a new Message
  In order to use the app
  As a user
  I want to create a new Message

  Background:
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Product offer create page
    And I fill the create product offer form with
      | FIELD    | VALUE         |
      | name | Hearts of Iron IV          |
      | description    | Also known as HOI4, is a grand strategy computer wargame |
      | price | 50      |
      | dateTime | 2016-02-06T12:08:23Z      |
      | manufacturer | Paradox Interactive      |
      | brand | Paradox Interactive      |
      | productCode | 123456789      |
    And I click the "Submit" button

  Scenario: Create new Message
    Given I'm in the homepage
    Then Go to Message create page
    When I fill the create message form with
      | FIELD    | VALUE         |
      | about | Hearts of Iron IV          |
      | text    | Hello! I will interested in your game |
    And I click the "Submit" button
    Then i create a new message with id 1
