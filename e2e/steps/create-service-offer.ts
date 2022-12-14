import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

When('fill the login form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur());
});

Then('Go to Service offer create page', () => {
  cy.visit('http://localhost:4200/serviceOffers/create');
});

When('I fill the create service offer form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur() );
});

Then('i create a new service offer with id 1', (option) => {
  cy.visit('http://localhost:4200/serviceOffers/1');
});
