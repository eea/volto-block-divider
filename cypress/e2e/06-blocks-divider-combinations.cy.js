import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Divider Block: Combinations Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  const clickFirstSlate = () => {
    cy.get('.slate-editor [contenteditable=true]').first().click();
  };

  const openBlockChooser = () => {
    cy.get('body').then(($body) => {
      if ($body.find('.block-add-button:visible').length > 0) {
        cy.get('.block-add-button:visible').first().click();
      } else {
        cy.get('.block-add-button').first().click();
      }
    });
  };

  const addDividerBlock = () => {
    clickFirstSlate();
    openBlockChooser();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.dividerBlock')
      .contains('Divider')
      .click({ force: true });
  };

  it('renders multiple dividers on same page independently', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Multiple Dividers Test');

    // Add first divider with text
    addDividerBlock();
    cy.get('fieldset.divider-block .divider').first().click({ force: true });
    cy.get('.sidebar-container .field-wrapper-text input')
      .first()
      .should('be.visible')
      .click()
      .type('First Divider');

    // Add second divider
    clickFirstSlate();
    openBlockChooser();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.dividerBlock')
      .contains('Divider')
      .click({ force: true });

    cy.get('fieldset.divider-block').should('have.length', 2);

    // Click on second divider
    cy.get('fieldset.divider-block')
      .eq(1)
      .find('.divider')
      .first()
      .click({ force: true });

    cy.get('.field-wrapper-short .ui.checkbox').click();

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // Both dividers should be visible
    cy.get('#page-document .divider').should('have.length.at.least', 2);
    cy.contains('First Divider');
    cy.get('#page-document .divider.short').should('exist');
  });

  it('adds divider block using block chooser search', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Search Divider Test');

    clickFirstSlate();

    // Use search box in block chooser
    openBlockChooser();
    cy.get(".blocks-chooser .ui.form .field.searchbox input[type='text']")
      .should('be.visible')
      .type('divider');

    cy.get('.blocks-chooser .button.dividerBlock')
      .contains('Divider')
      .click({ force: true });

    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    cy.get('.sidebar-container .field-wrapper-text input')
      .first()
      .click()
      .type('Searched Divider');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.contains('Searched Divider');
  });
});
