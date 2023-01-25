import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then('Go to product offer delete page with id {string}', (id) => {
  cy.visit('http://localhost:4200/productOffers/'+id+'/delete');
});

Then('i check the product offer list', () => {
  cy.visit('http://localhost:4200/productOffers/');
});

Then('I see the alert message {string}', (message) => {
  cy.get('.alert')
    .should('be.visible')
    .invoke('text')
    .should('contains', message);
});

When('I click the {string} button now', (label) => {
  cy.contains('button', label).should('be.visible');
  cy.get('button').contains(label).click({force: true});
});

And('I try to forcefully delete the product offer', () =>{
  cy.url().then((url) => {
    cy.visit(url+"/delete");
  })
});

And('I see that the "Delete" button is still there and nothing happened', (label) => {
  cy.contains('button', label).should('be.visible');
  cy.get('button').contains(label).click({force: true});
})
