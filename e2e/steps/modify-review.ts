import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I click on card-text item {string}', (value) => {
    cy.get('.card-text').contains(value).click();
});

And('I wait for the {string} content to appear', (value) => {
    cy.contains(value).should('exist');
});

Then('I get redirected to that review page', () => {
    cy.visit('http://localhost:4200/reviews/1');
});

And('I clear and fill the form with', (table: DataTable) => {
    table.rows().forEach((pair: string[]) =>
        cy.get('#' + pair[0]).clear().type(pair[1]).blur());
});