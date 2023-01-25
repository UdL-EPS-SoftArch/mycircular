import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

And('I click on nav link {string}', (value) => {
    cy.get('.nav-link').contains(value).click();
});

And('I get redirected to the {string} page', () => {
    cy.visit('http://localhost:4200/reviews');
});

And('I wait for the {string} nav-link to appear', (value) => {
    cy.get('.navbar').contains(value).should('exist');
});

And('I click on dropdown menu {string}', (value) => {
    cy.get('.form-select').select(value);
});

Then('The button {string} does not exist', (value) => {
    cy.get('button').contains(value).should('not.exist');
});



