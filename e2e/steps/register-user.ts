import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I\'m in the homepage', () => {
  cy.visit('http://localhost:4200');
});

Given('I\'m not logged in', () => {
  cy.get('.nav-link').contains('Login');
});

Given('I log in as {string} with password {string}', (username, password) => {
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type(username).blur();
  cy.get('#password').type(password).blur();
  cy.get('button').contains('Submit').click();
});

Given('I click the {string} menu', (option) => {
  cy.get('.nav-link').contains(option).click();
});

When('I fill the form with', (table: DataTable) => {
    table.rows().forEach((pair: string[]) =>
      cy.get('#' + pair[0]).type(pair[1]).blur() );
 });

When('I click the {string} button', (label) => {
    cy.get('button').contains(label).click();
  });

Then('I\'m logged in as user {string}', (username) => {
  cy.get('#currentUser')
    .invoke('text')
    .should('contains', username);
});

Then('I see error message {string}', (message) => {
  cy.get('.alert')
    .invoke('text')
    .should('contains', message);
});

Then('The {string} button is disabled', (label) => {
  cy.get('button').contains(label)
    .should('be.disabled');
});

Then('The {string} menu is not present', (option) => {
  cy.get('.nav-link').contains(option)
    .should('not.exist');
});

Then('I see input field feedback message {string}', (message) => {
  cy.get('.invalid-feedback')
    .should('be.visible')
    .invoke('text')
    .should('contains', message);
});
