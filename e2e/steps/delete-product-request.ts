import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

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

Then(/^I delete the "([^"]*)" offer to avoid interfering other tests$/, function (requestName) {
  cy.get('.nav-link').contains('Logout').click();
  cy.get('.nav-link').contains('Login').click();
  // Hardcoded like the background (this is not to test anything, just to avoid problems)
  cy.get('#username').type("demo").blur();
  cy.get('#password').type("password").blur();
  cy.get('button').contains('Submit').click();
  cy.get('#currentUser').invoke('text').should('contains', "demo");

  // TODO: There is a better way? I hope so
  // FIRST OFFER DELETE
  cy.visit('http://localhost:4200/productOffers');
  cy.get('.card-text').contains(requestName).click();
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  // SECOND OFFER DELETE
  cy.visit('http://localhost:4200/productOffers');
  cy.get('.card-text').contains(requestName).click();
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  // THIRD OFFER DELETE
  cy.visit('http://localhost:4200/productOffers');
  cy.get('.card-text').contains(requestName).click();
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();
  cy.get('button').contains("Delete").click();

  // TODO: NOT WORKING
  /*
  let mondongoElements = cy.get('.card-text').contains(requestName);
  while (mondongoElements.should('not.be.empty')) {

    cy.get('.card-text').contains(requestName).click();
    cy.get('button').contains("Delete").click();
    cy.get('button').contains("Delete").click();
    cy.get('button').contains("Delete").click();

    mondongoElements = cy.get('.card-text').contains(requestName);
  }
  */
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
