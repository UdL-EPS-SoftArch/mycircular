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
      | offerer | users/demo      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |
    And I click the "Submit" button


    # If this first scenario does not work, the third one neither
  Scenario: Register new Product Request
    Given I click the "Offer Product" menu (not_linked)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    Then I see the product offer list
    When I click the "Request" button
    And I click the "Requests" menu
    Then I wait to see my Product Request list
    And There is the new product request with name "mondongo"
    And I delete the "mondongo" offer to avoid interfering other tests

  Scenario: Register new Product Request when I'm not logged in
    Given I log out
    And I'm not logged in
    Given I click the "Offer Product" menu (not_linked)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    Then I see the product offer list
    When I click the "Request" button
    Then I see error message "Username or password incorrect"
    # NEED TO DELETE STUFF, NOT PART OF THE TEST T_T
    Then I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    And I delete the "mondongo" offer to avoid interfering other tests

  Scenario: Can't register a request that already exists
    Given I click the "Offer Product" menu (not_linked)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    Then I see the product offer list
    When I click the "Request" button
    # the error msg is "Http failure response for http://localhost:8080/prodRequests: 403 OK"
      # but in Cypress it's "Http failure response for http://localhost:8080/prodRequests: 403 Forbidden"
    Then I see error message "Http failure response for http://localhost:8080/prodRequests: 403 Forbidden"
    Then I delete the "mondongo" request to avoid interfering other tests
    And I delete the "mondongo" offer to avoid interfering other tests



  # TODO: we need to test or do something about creating multiple offers to do the tests.
  #           TODO: Maybe we should delete de offer once the scenario is done

  # idk wtf happend with cypress but it deppends of the response speed ...
   #Scenario: Just to clean offers
  # Given I click the "Offer Product" menu (not_linked)
  # Then I delete the "mondongo" offer to avoid interfering other tests
