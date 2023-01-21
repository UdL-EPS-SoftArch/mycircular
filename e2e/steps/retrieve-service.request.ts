import { Then } from 'cypress-cucumber-preprocessor/steps';
import {DataTable} from "@cucumber/cucumber";
Then(/^I check the service have:$/, function (table: DataTable) {
  table.rows().forEach((pair: string[]) =>
    cy.get(".card-text").contains(pair[1]).should('exist'));
});
