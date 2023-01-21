import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';


let savedID: string | undefined;

Given(/^I go to the "([^"]*)" product details$/, (productName) => {
  /*
  cy.get(`label[for=${productName}]`)
    .should('be.visible')
    .and('have.attr', 'href')
    .then((href) => {
      cy.get(`label[for=${productName}]`).click();
    });
   */
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

// This is just to avoid interferences between requests test, and it also helps us to check a error msg
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

/*
const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('un usuario hace una petición GET a la API', () => {
  cy.request({
    method: 'GET',
    url: '/api/products',
  }).as('response');
});

When('la petición es exitosa', () => {
  cy.get('@response').should((response) => {
    expect(response.status).to.equal(200);
  });
});

Then('se recibe una respuesta con el código de estado 200', () => {
  cy.get('@response').should((response) => {
    expect(response.body).to.have.property('products');
  });
});

 */
