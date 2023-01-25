Feature: Create a new ServiceOffer
  In order to use the app
  As a user
  I want to register a new Service Offer

  Scenario: Register new Service Offer
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Service offer create page
    And I fill the create service offer form with
      | FIELD    | VALUE         |
      | name | AllRepair        |
      | description    | Repair all brands of laptops |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 5      |
    And I click the "Submit" button
    Then i create a new service offer with id "1"

  Scenario: Register new Service Offer 2
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Service offer create page
    And I fill the create service offer form with
      | FIELD    | VALUE         |
      | name | All types Repair         |
      | description    | Repair all brands of laptops |
      | price | 900      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 3      |
    And I click the "Submit" button

  Scenario: Register new Service Offer with empty fields
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Service offer create page
    And I fill the create service offer form with
      | FIELD    | VALUE         |
      | name | All types Repair           |
      | description    | Repair all brands of laptops |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 3      |
    Then The "Submit" button is disabled

  Scenario: Register new Service Offer with mistakes in field name product
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Service offer create page
    And I fill the create service offer form with
      | FIELD    | VALUE         |
      | name | L          |
      | description    | Repair all brands of laptops |
      | price | 900      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 3      |
    And I click the "Submit" button
    Then I see error message for input name product "ServiceOffer name: length must be between 2 and 24"

  Scenario: Register new Service Offer with mistakes in field description product
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Service offer create page
    And I fill the create service offer form with
      | FIELD    | VALUE         |
      | name | All types Repair           |
      | description    | laptop |
      | price | 900      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 3      |
    And I click the "Submit" button
    Then I see error message for input name product "ServiceOffer description: length must be between 10 and 200"

  Scenario: Register new Service Offer with mistakes in field date product
    Given I'm in the homepage
    And I'm not logged in
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then Go to Service offer create page
    And I fill the create service offer form with
      | FIELD    | VALUE         |
      | name | All types Repair         |
      | description    | Repair all brands of laptops |
      | price | 900      |
      | dateTime | 07/07/20       |
      | availability | true      |
      | durationInHours | 3      |
    And I click the "Submit" button
    Then I see error message for input name product "Text '07/07/20' could not be parsed at index 0"
