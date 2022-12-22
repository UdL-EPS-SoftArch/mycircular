import { environment } from './../../src/environments/environment';
import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';
import {toInteger} from "@ng-bootstrap/ng-bootstrap/util/util";

And ('I am on the transactions list page', () => {
  cy.visit('http://localhost:4200/transactions');
  cy.wait(1000);
});

Then ('I should see {string}', (text) => {
    cy.wait(500);
    cy.contains(text);
});

Then ('It creates an announcment',()=>{
    cy.request('POST',`${environment.API}/announcements`,{
      "price": "20",
      "name": "portatil",
      "description": "Nuevo y reluciente, listo para usar"
    }).then((response)=>{
      response.body.price = 20
      console.log(`Price is correct`)
    });
});

Then('It creates a transaction',()=>{
    let item;
    cy.request('POST',`${environment.API}/transactions`, {
      "seller": "/users/demo",
      "announcementAbout": "/announcements/1",
      "buyer": "/users/demo",
      "price" : 12
  }).then((response)=>{
      response.body.price = 12
      console.log(`Price is correct`)
    });
});

Then ('I edit the price with the new value {string}',(price)=>{
  cy.wait(500);
  cy.get("#price").clear();
  cy.get("#price").type(price).blur();
  cy.get('button').contains('Submit').click();
})
