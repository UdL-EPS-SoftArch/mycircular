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

Then('Go to Service offer delete page with id {string}', (id) => {
  cy.visit('http://localhost:4200/serviceOffers/'+id+'/delete');
});

When('I click the {string} button', (label) => {
  cy.get('button').contains(label).click({ force: true });
});

Then('i check the service offer list', () => {
  cy.visit('http://localhost:4200/serviceOffers/');
});
