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
      | FIELD | VALUE |
      | name | Hearts of Iron IV |
      | description | Also known as HOI4, is a grand strategy computer wargame |
      | price | 50 |
      | dateTime | 2016-02-06T12:08:23Z |
      | manufacturer | Paradox Interactive |
      | brand | Paradox Interactive |
      | productCode | 123456789 |
    And I click the "Submit" button

  Scenario: Create a new Message
    Given I'm in the homepage
    Then Go to Message create page
    When I fill the create message form with
      | FIELD | VALUE |
      | about | Hearts of Iron IV |
      | text | Hello! I will interested in your game |
    And I click the "Submit" button
    Then I create a new message with id 2

  Scenario: Create a new Message but Submit button is disabled because about field is empty
    Given I'm in the homepage
    Then Go to Message create page
    When I fill the create message form with
      | FIELD | VALUE |
      | about |  |
      | text | Hello! I will interested in your game |
    Then the "Submit" button is disabled

  Scenario: Create a new Message but Submit button is disabled because text field is empty
    Given I'm in the homepage
    Then Go to Message create page
    When I fill the create message form with
      | FIELD | VALUE |
      | about | Hearts of Iron IV |
      | text |  |
    Then the "Submit" button is disabled

  Scenario: Create a new Message but I can't perform the action because the number of words of the message is greater than 250 words
    Given I'm in the homepage
    Then Go to Message create page
    When I fill the create message form with
      | FIELD | VALUE |
      | about | Hearts of Iron IV |
      | text | Lorem ipsum sagittis neque, blandit aliquam sem sapien nec leo. Vivamus pharetra finibus lacus eu convallis. Morbi augue sapien, iaculis sit amet diam eu, condimentum sollicitudin leo. Mauris nec ullamcorper felis. Sed id volutpat eros. Fusce a nibh id risus. |
    And I click the "Submit" button
    Then an error message will be displayed indicating that the length of the message must be between 0 and 250 words
