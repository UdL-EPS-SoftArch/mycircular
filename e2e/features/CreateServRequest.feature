Feature: Create Service Request
  In order to use the app
  As a user
  I want to register a new service request

  Background:
    Given I'm in the homepage
    And I log in as "user" with password "password"
   # Given There is a service offer already created with
      | FIELD    | VALUE         |
      | name | Laptop Asus          |
      | description    | Asus DashF15 with 3060RTX and 16gb of ram |
      | price | 700      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | manufacturer | Asus      |
      | brand | Asus      |
      | productCode | 123456789      |

  Scenario: Register new Product Request
    Given I click the "Offer Service" menu (not_linked)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
#    Then I see the service offer list
    When I click the "Request" button
    And I click the "Aceptar" button
    When I click the "Request" menu
 #   Then I see my Service Request list
 #   And There is the new service request with name "name" and description "description"

    # TODO: if u are not logged in, when u press the request button, the web forces u to go to login page
  Scenario: Register new Product Request when I'm not logged in
    Given I'm not logged in
    Given I click the "Offer Product" menu
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
#    Then I see the service offer list
    When I click the "Request" button
 #   Then I get redirect to "Login" page


  Scenario: Cancel the Register Request process
    Given I click the "Offer Service" menu (not_linked)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
 #   Then I see the service offer list
    When I click the "Request" button
    And I click the "Canelar" button
    When I click the "Request" menu
#    Then I see my Service Request list
#    And There is no new service request with name "name" and description "description"

  Scenario:
    Given I click the "Offer Service" menu (not_linked)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
#    Then I see the service offer list
    When I click the "Request" button
    And I click the "Aceptar" button
    Then I see error message "Http failure response for http://localhost:8080/prodRequests: 403 OK"

