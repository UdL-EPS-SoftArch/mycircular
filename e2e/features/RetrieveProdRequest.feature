Feature: Retrieve an existing request
  In order to use the app
  As a user
  I want to retrieve an existing request

  Background:
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    #And There is a request created with name "croquetas", description "la venganza de las croquetas", price 50 and requester "demo"

  Scenario: Retrieve an existing request successfully
    When I click the "Request" button
  #  Then I'm in the request list page

  Scenario: Retrieve an existing request but user's not logged in

  Scenario: Retrieve other user's request

  Scenario: Retrieve other user's request but current user is not logged in

  Scenario: Retrieve a non existing request
