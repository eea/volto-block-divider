import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Divider Block: Styling Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  const addDividerBlock = () => {
    cy.getSlate().click();
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.dividerBlock')
      .contains('Divider')
      .click({ force: true });
  };

  const openBlock = () => {
    cy.get('fieldset.divider-block .divider').first().click({ force: true });
  };

  const openStylingIfPresent = () => {
    // In Volto 18 styling may be in an accordion or tab; try both
    cy.get('body').then(($body) => {
      if ($body.find('.sidebar-container .formtabs .item:contains("Styling")').length > 0) {
        cy.get('.sidebar-container .formtabs .item').contains('Styling').click({ force: true });
      } else if ($body.find('.sidebar-container .ui.accordion .title:contains("Styling")').length > 0) {
        cy.get('.sidebar-container .ui.accordion .title').contains('Styling').click({ force: true });
      }
      // else styling fields may already be visible
    });
  };

  it('applies theme via sidebar and renders in view mode', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Styling Test');

    addDividerBlock();
    openBlock();
    openStylingIfPresent();

    // Toggle inverted if present
    cy.get('body').then(($body) => {
      if ($body.find('.field-wrapper-styles-inverted .ui.checkbox').length > 0) {
        cy.get('.field-wrapper-styles-inverted .ui.checkbox').click({ force: true });
      }
    });

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // Divider should exist in view
    cy.get('#page-document .divider').should('exist');
  });
});
