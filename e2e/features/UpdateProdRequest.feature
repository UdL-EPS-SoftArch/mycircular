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
      | name | lol          |
      | description    | es gratis pero lo vendo |
      | price | 100      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | manufacturer | riot      |
      | brand | riot      |
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
    When I go into "lol" request to see the product details
    Then There is no "Update" or "Edit" button
    # DELETE OFFER: NOT TESTING PURPOSES
    Then I delete the "lol" request to avoid interfering other tests
    And I delete the "lol" offer to avoid interfering other tests

  Scenario: Try to update other user's request
    # In order to do this test we need to get the request id so we can't see other's
    #   request via the buttons on the web
    Given I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Given I click the "Request" menu
    And I wait to see my Product Request list
    Then I go to the "lol" product details
    And I get the request id via the URL
    And I log out

    # Scenario start
    Given I log in as "demo2" with password "password"
    And I'm logged in as user "demo2"
    Then I try to go to other user's request
    Then There is no "Update" or "Edit" button
    # DELETE OFFER: NOT TESTING PURPOSES
    Given I log out
    And I log in as "demo" with password "password"
    Then I'm logged in as user "demo"
    And I delete the "lol" request to avoid interfering other tests
    And I delete the "lol" offer to avoid interfering other tests
