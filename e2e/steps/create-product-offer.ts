import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';


When('I\'m logged in', () => {
  cy.get('.nav-link').contains('demo');
});

Then('Go to Product offer create page', () => {
  cy.visit('http://localhost:4200/productOffers/create');
});

When('I fill the create product offer form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur() );
});

Then('i create a new product offer with id 1', (option) => {
  cy.visit('http://localhost:4200/productOffers/1');
});

Then('I see error message for input name product {string}', (message) => {
  cy.get('.alert')
    .invoke('text')
    .should('contains', message);
});

Then('Go to Product offer {string}', (id) => {
  cy.visit('http://localhost:4200/productOffers/1');
});
