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

  const openStylingTab = () => {
    // In Volto, the Styling tab might be the second tab or accessible via accordion
    // Try clicking the styling fieldset in sidebar
    cy.get('.sidebar-container .formtabs .item')
      .contains('Styling')
      .click({ force: true });
  };

  it('applies theme and inverted styles via sidebar and renders in view mode', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Styling Test');

    addDividerBlock();

    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    openStylingTab();

    // Click a theme button (Primary)
    cy.get('.field-wrapper-styles-theme .color-picker-widget .buttons button')
      .eq(1)
      .click({ force: true });

    // Toggle inverted
    cy.get('.field-wrapper-styles-inverted .ui.checkbox').click({ force: true });

    // Verify in edit preview
    cy.get('fieldset.divider-block .divider').should('have.class', 'primary');
    cy.get('fieldset.divider-block .divider').should('have.class', 'inverted');

    // When theme is set, View.jsx wraps Divider directly (no styled-dividerBlock wrapper)
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .divider').should('exist');
    cy.get('#page-document .divider')
      .should('have.class', 'primary')
      .and('have.class', 'inverted');
  });

  it('removes theme when No theme is selected and renders with styled wrapper', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider No Theme Test');

    addDividerBlock();

    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    openStylingTab();

    // First apply a theme
    cy.get('.field-wrapper-styles-theme .color-picker-widget .buttons button')
      .eq(1)
      .click({ force: true });

    // Then select No theme (first button)
    cy.get('.field-wrapper-styles-theme .color-picker-widget .buttons button')
      .first()
      .click({ force: true });

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // Without theme, View.jsx wraps in styled-dividerBlock
    cy.get('#page-document .styled-dividerBlock').should('exist');
    cy.get('#page-document .styled-dividerBlock .divider').should('exist');
  });
});
