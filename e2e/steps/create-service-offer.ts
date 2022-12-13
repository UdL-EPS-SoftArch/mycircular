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

When('fill the login form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur() );
  cy.get('button').contains('Submit').click();
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
