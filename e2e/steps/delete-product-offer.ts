import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then('Go to product offer delete page with id {string}', (id) => {
  cy.visit('http://localhost:4200/productOffers/'+id+'/delete');
});

Then('i check the product offer list', () => {
  cy.visit('http://localhost:4200/productOffers/');
});

Then('I see the alert message {string}', (message) => {
  // Give an alias to the stub, so we can use "get" on it.
  const alertShown = cy.stub().as("alertShown")

  cy.on ('window:alert', alertShown)

  cy.get('button').contains("Delete").click();
// By using get, we ensure this will be retried if the checkbox has
// not been called yet.
  cy.get("@alertShown").should("have.been.calledOnceWith", message)
});
