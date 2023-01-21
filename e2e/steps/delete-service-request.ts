import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { savedID } from "./delete-product-request";

Given(/^I go to the "([^"]*)" service details$/, function (serviceName) {
  cy.get('.card-text').contains(serviceName).click();
  cy.wait(2000);
});

// THIS IS NOT FOR TESTING; JUST TO AVOID ERRORS BC CYPRESS IS SHITTY
Then(/^I delete the "([^"]*)" service offer to avoid interfering other tests$/, function (offerName) {
  cy.visit('http://localhost:4200/serviceOffers');
  cy.url().should('include', '/serviceOffers');
  cy.wait(1000);
  cy.get('.card-text').contains(offerName).click();
  cy.wait(2000);
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  cy.visit('http://localhost:4200/serviceOffers');
  cy.wait(1000);
  cy.url().should('include', '/serviceOffers');
  cy.contains(offerName).should('not.exist');
});
Then(/^I see an error message telling me that the action is forbidden on service$/, function () {
  const message: string = "Http failure response for http://localhost:8080/servRequests/" + savedID + ": 403 Forbidden";

  cy.get('.alert')
    .invoke('text')
    .should('contains', message);
});
