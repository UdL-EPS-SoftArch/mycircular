Feature: Delete a ServiceOffer
  In order to use the app
  As a user
  I want to delete a Service Offer

  Scenario: Delete Service Offer
  Given I'm in the homepage
  And I'm not logged in
  When I click the "Login" menu
  And fill the login form with
  | FIELD    | VALUE         |
  | username | demo          |
  | password | password      |
  And I click the "Submit" button
  Given I'm in the homepage
  Then Go to Service offer delete page with id "1"
  And I click the "Delete" button
  Then i check the service offer list
