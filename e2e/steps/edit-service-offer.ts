import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then('Go to Service offer edit page with id {string}', (id) => {
  cy.visit('http://localhost:4200/serviceOffers/'+id+'/edit');
});

When('I fill the edit service offer form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).clear().type(pair[1]).blur() );
});

Then('i check the service offer with id {string}', (id) => {
  cy.visit('http://localhost:4200/serviceOffers/'+id);
});
