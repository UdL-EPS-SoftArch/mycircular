Feature: Retrieve an existing request
  In order to use the app
  As a user
  I want to retrieve an existing request

  Background:
    # TODO: there is a better way to do all this steps...?
    # TODO; there is a better way to do all the steps that are just the background but for just 1 scenario?
    Given I'm in the homepage
    And I'm not logged in
    Then I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Given I go to Product offer creation page
    Then I fill the product offer creation form with
      | FIELD    | VALUE         |
      | name | cypress          |
      | description    | lo vendo porque es una mierda |
      | price | 1      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | manufacturer | cypress      |
      | brand | cypress      |
      | productCode | 987654321      |
    And I click the "Submit" button
    Given I click the "Offer Product" menu (not_linked)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    Then I see the product offer list
    And I click the "Request" button
    And I log out

  Scenario: Try to update my own request
    Given I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Given I click the "Requests" menu
    And I wait to see my Product Request list
    When I go into "cypress" request to see the product details
    Then There is no "Update" or "Edit" button
    # DELETE OFFER: NOT TESTING PURPOSES
    Then I delete the "cypress" request to avoid interfering other tests
    And I delete the "cypress" offer to avoid interfering other tests
