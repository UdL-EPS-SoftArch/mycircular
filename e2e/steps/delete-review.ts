import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then('The review with message {string} does not exist', (value) => {
    cy.get('.card-text').contains(value).should('not.exist');
});