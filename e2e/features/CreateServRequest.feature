Feature: Create Service Request
  In order to use the app
  As a user
  I want to register a new service request

  Background:
    Given I'm in the homepage
    And I'm not logged in
    Then I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Given I go to Service offer creation page
    Then I fill the service offer creation form with
      | FIELD    | VALUE         |
      | name | mondongo          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | availability | true      |
      | durationInHours | 5      |
    And I click the "Submit" button


    # If this first scenario does not work, the third one neither
  Scenario: Register new service Request
    Given I click the "Offer Service" menu (not_linked v2)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    Then I see the service offer list
    When I click the "Request" button
    And I click the "Requests" menu
    Then I wait to see my service Request list
    And There is the new service request with name "mondongo"
    And I delete the "mondongo" service offer to avoid interfering other tests

  Scenario: Register new Service Request when I'm not logged in
    Given I log out
    And I'm not logged in
    Given I click the "Offer Service" menu (not_linked v2)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    Then I see the service offer list
    When I click the "Request" button
    Then I see error message "Username or password incorrect"
    # NEED TO DELETE STUFF, NOT PART OF THE TEST T_T
    Then I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I delete the "mondongo" service offer to avoid interfering other tests

  Scenario: Can't register a request that already exists
    Given I click the "Offer Service" menu (not_linked v2)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    Then I see the service offer list
    When I click the "Request" button
    # the error msg is "Http failure response for http://localhost:8080/servRequests: 403 OK"
      # but in Cypress it's "Http failure response for http://localhost:8080/servRequests: 403 Forbidden"
    Then I see error message "Http failure response for http://localhost:8080/servRequests: 403 Forbidden"
    Then I delete the "mondongo" request to avoid interfering other tests
    And I delete the "mondongo" service offer to avoid interfering other tests


