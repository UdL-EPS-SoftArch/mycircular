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

Then ('It creates an announcement and Transaction',()=>{
    cy.request('POST',`${environment.API}/announcements`,{
      "price": "20",
      "name": "portatil",
      "description": "Nuevo y reluciente, listo para usar"
    }).then((announcement) =>{
      cy.request('POST',`${environment.API}/transactions`, {
        "seller": "/users/demo",
        "announcementAbout": announcement.body.uri,
        "buyer": "/users/demo",
        "price" : 12
      }).should(
        (response) => {
          expect(response.status).to.eq(201)
        }
      )
      }).should(
      (response) => {
        expect(response.status).to.eq(201)
      }
    )
});

Then ('I edit the price with the new value {string}',(price)=>{
  cy.wait(500);
  cy.get("#price").clear();
  cy.get("#price").type(price);
  cy.get('button').contains('Submit').click();
})
