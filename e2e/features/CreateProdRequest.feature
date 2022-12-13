Feature: Create Request
  In order to use the app
  As a user
  I want to register a new request

  Background:
    Given I'm in the homepage
    And I log in as "user" with password "password"
    Given There is a product offer already created with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |

  Scenario: Register new Request
    Given I go to




