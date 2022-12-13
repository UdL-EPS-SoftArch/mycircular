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

Then('The {string} button is disabled', (label) => {
  cy.get('button').contains(label)
    .should('be.disabled');
});

Then('I see error message for input name product {string}', (message) => {
  cy.get('.alert')
    .invoke('text')
    .should('contains', message);
});

Then('Go to Product offer {string}', (id) => {
  cy.visit('http://localhost:4200/productOffers/1');
});

When('I click the {string} button', (label) => {
  cy.get('button').contains(label).click();
});
