import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I\'m in the homepage', () => {
  cy.visit('http://localhost:4200');
});

Given('I\'m not logged in', () => {
  cy.get('.nav-link').contains('Login');
});

Given('I click the {string} menu', (option) => {
  cy.get('.nav-link').contains(option).click();
});

When('I click the {string} button', (label) => {
  cy.get('button').contains(label).click();
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
