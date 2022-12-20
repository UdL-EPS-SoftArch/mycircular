Feature: Delete Product Request
  In order to use the app
  As a user
  I want to register a new product request

  Background:
    # TODO: there is a better way to do all this steps...?
    Given I'm in the homepage
    And I'm not logged in
    Then I log in as "demo" with password "password"
    And I'm logged in as user "demo"
    Given I go to Product offer creation page
    Then I fill the product offer creation form with
      | FIELD    | VALUE         |
      | name | vendo opel corsa          |
      | description    | besto car of the mercadeition |
      | price | 100000      |
      | dateTime | 2018-02-12T12:08:23Z      |
      | offerer | users/demo      |
      | manufacturer | Opel      |
      | brand | Opel      |
      | productCode | 987654321      |
    And I click the "Submit" button
    Given I click the "Offer Product" menu (not_linked)
    # ESTO DE AQUI ABAJO NO ES MI PROBLEMA Y LO DE ARRIBA CAMBIARLO A SOLO VISITAR EL ENLACE
    Then I see the product offer list
    And I click the "Request" button

  Scenario: Success product request delete
    Given I click the "Requests" menu
    # TODO: a better way to do this and?
    And I go to the "vendo opel corsa" product details
    When I click the "Delete" button
    # Reusamos paso para la confirmación o es mejor crear un paso extra?
    And I click the "Delete" button
    Then There is no "vendo opel corsa" request in the list

  Scenario: Try to access /requests without being logged in
    Given I'm not logged in
    When The "Requests" menu is not present
    When I try to go to "/requests" via url
    Then I see error message "You should be logged in to perform this action"
