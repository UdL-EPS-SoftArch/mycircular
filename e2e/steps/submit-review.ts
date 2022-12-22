import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

And('I click on nav link {string}', (value) => {
    cy.get('.nav-link').contains(value).click();
});


And('I get redirected to the {string} page', () => {
    cy.visit('http://localhost:4200/reviews');
});

