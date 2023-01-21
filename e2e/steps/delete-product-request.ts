import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

export let savedID: string | undefined; // BAD PRACTICE

Given(/^I go to the "([^"]*)" product details$/, (productName) => {
  cy.get('.card-text').contains(productName).click();
});

Then(/^There is no "([^"]*)" request in the list$/, (requestName) => {
  cy.contains(requestName).should('not.exist');
});

When(/^I try to go to "([^"]*)" via url$/, (site) => {
  cy.visit("http://localhost:4200/" + site);
});

And(/^I log out$/, function () {
  cy.get('.nav-link').contains('Logout').click();
});

// This is just to avoid interferences between requests test, and it also helps us to check an error msg
Then(/^I delete the "([^"]*)" request to avoid interfering other tests$/, (requestName) => {
  cy.get('.nav-link').contains("Requests").click();
  cy.url().should('include', '/requests');
  cy.wait(1000);
  cy.get('.card-text').contains(requestName).click();
  cy.wait(2000);
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  cy.get('.nav-link').contains("Requests").click();
  cy.wait(1000);
  cy.url().should('include', '/requests');
  cy.contains(requestName).should('not.exist');
});

// THIS IS NOT FOR TESTING; JUST TO AVOID ERRORS BC CYPRESS IS SHITTY
Then(/^I delete the "([^"]*)" offer to avoid interfering other tests$/, function (requestName) {
  cy.visit('http://localhost:4200/productOffers');
  cy.url().should('include', '/productOffers');
  cy.wait(1000);
  cy.get('.card-text').contains(requestName).click();
  cy.wait(2000);
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  cy.visit('http://localhost:4200/productOffers');
  cy.wait(1000);
  cy.url().should('include', '/productOffers');
  cy.contains(requestName).should('not.exist');
});

Then(/^I get the request id via the URL$/, function () {
  cy.url().then((url) => {
     savedID = url.split('/').pop();
  });
});

Then(/^I try to go to other user's request$/, function () {
  cy.visit("http://localhost:4200/requests/" + savedID);
});

Then(/^I see an error message telling me that the action is forbidden$/, function () {
  const message: string = "Http failure response for http://localhost:8080/prodRequests/" + savedID + ": 403 Forbidden";

  cy.get('.alert')
    .invoke('text')
    .should('contains', message);
});

