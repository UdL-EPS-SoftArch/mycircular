Feature: Delete Service Request
  In order to use the app
  As a user
  I want to register a new Service request

  Background:
    # TODO: there is a better way to do all this steps...?
    # TODO; there is a better way to do all the steps that are just the background but for just 1 scenario?
    Given I'm in the homepage
    And I'm not logged in
    Then I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Given I go to Service offer creation page
    Then I fill the service offer creation form with
      | FIELD    | VALUE         |
      | name | vendo opel corsa          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 5      |
    And I click the "Submit" button
    Given I click the "Offer Service" menu (not_linked v2)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    Then I see the service offer list
    And I click the "Request" button
    And I'm in the homepage

  Scenario: Success service request delete
    Given I click the "Requests" menu
    Then I wait to see my service Request list
    # TODO: a better way to do this and?
    And I go to the "vendo opel corsa" service details
    When I click the "Delete" button
    # Reusamos paso para la confirmación o es mejor crear un paso extra?
    And I click the "Delete" button
    # We have to do it 3 times...
    #And I click the "Delete" button
    Then I click the "Requests" menu
    Then There is no "vendo opel corsa" request in the list
    # DELETE OFFER: NOT TESTING PURPOSES
    And I delete the "vendo opel corsa" service offer to avoid interfering other tests

  Scenario: Try to delete other user's request
    # In order to do this test we need to get the request id so we can't see other's
    #   request via the buttons on the web
    Given I click the "Request" menu
    And I wait to see my service Request list
    Then I go to the "vendo opel corsa" service details
    And I get the request id via the URL
    And I log out

    # Scenario start
    Given I log in as "demo2" with password "password"
    And I'm logged in as user "demo2"
    Then I try to go to other user's request
    When I click the "Delete" button
    And I click the "Delete" button
    #And I click the "Delete" button
    Then I see an error message telling me that the action is forbidden on service

    # DELETE OFFER: NOT TESTING PURPOSES
    Given I log out
    And I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Then I delete the "vendo opel corsa" service offer to avoid interfering other tests
    And I delete the "vendo opel corsa" request to avoid interfering other tests
