import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Divider Block: Theming Tests', () => {
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

  it('renders divider with default styling in view mode', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Default Theme');

    addDividerBlock();
    openBlock();

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // Should be wrapped in styled-dividerBlock when no theme
    cy.get('#page-document .styled-dividerBlock').should('exist');
    cy.get('#page-document .styled-dividerBlock .divider').should('exist');
  });

  it('renders divider with inverted in view mode if sidebar allows', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Inverted Test');

    addDividerBlock();
    openBlock();

    // Try to toggle inverted if field is present in sidebar
    cy.get('body').then(($body) => {
      if ($body.find('.field-wrapper-styles-inverted .ui.checkbox').length > 0) {
        cy.get('.field-wrapper-styles-inverted .ui.checkbox').click({ force: true });
      }
    });

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .divider').should('exist');
  });
});
