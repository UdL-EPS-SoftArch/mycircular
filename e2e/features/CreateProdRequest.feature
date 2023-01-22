Feature: Create Product Request
  In order to use the app
  As a user
  I want to register a new product request

  Background:
    Given I'm in the homepage
    And I'm not logged in
    Then I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Given I go to Product offer creation page
    Then I fill the product offer creation form with
      | FIELD    | VALUE         |
      | name | mondongo          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button

  Scenario: Register new Product Request
    Given I click the "Offer Product" menu (not_linked)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    Then I see the product offer list
    When I click the "Request" button
    And I click the "Requests" menu
    Then I wait to see my Product Request list
    And There is the new product request with name "mondongo"
    #Then I delete the "mondongo" request to avoid interfering other tests


    # TODO: if u are not logged in, when u press the request button, the web forces u to go to login page
  #Scenario: Register new Product Request when I'm not logged in
    #Given I'm not logged in
    #Given I click the "Offer Product" menu
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    #Then I see the product offer list
    #When I click the "Request" button
    #Then I get redirect to "Login" page
  #THIS TEST FAILS
  #Scenario: Can't register a request that already exists
    #Given I click the "Offer Product" menu (not_linked)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    #Then I see the product offer list
    #When I click the "Request" button
    # the error msg is "Http failure response for http://localhost:8080/prodRequests: 403 OK"
      # but in Cypress it's "Http failure response for http://localhost:8080/prodRequests: 403 Forbidden"
    #Then I see error message "Http failure response for http://localhost:8080/prodRequests: 403 Forbidden"
    #Given I click the "Requests" menu
    #And I wait to see my Product Request list
    #Then There is no "mondongo" request in the list

  # TODO: we need to test or do something about creating multiple offers to do the tests.
  #           Maybe we should delete de offer once the scenario is done

  # This is not working.... it's working like... awkward
  #Scenario: This scenario its just to clean the request "mondongo", this works like a @beforeAll
    #Given I delete the "mondongo" request to avoid interfering other tests
