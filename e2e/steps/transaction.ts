import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';
import {toInteger} from "@ng-bootstrap/ng-bootstrap/util/util";

And ('I am on the transactions list page', () => {
  cy.visit('http://localhost:4200/transactions');
});

Then ('I should see {string}', (text) => {
    cy.contains(text);
    cy.wait(500);
});

Then ('I edit the price with the new value {string}',(price)=>{
  cy.wait(500);
  cy.get("#price").clear();
  cy.get("#price").type(price).blur();
  cy.get('button').contains('Submit').click();
})
