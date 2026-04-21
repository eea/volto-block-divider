import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Divider Block: Combinations Tests', () => {
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

  it('renders multiple dividers on same page independently', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Multiple Dividers Test');

    // Add first divider with text
    addDividerBlock();
    cy.get('fieldset.divider-block .divider').first().click({ force: true });
    cy.get('.field-wrapper-text #field-text')
      .should('be.visible')
      .click()
      .type('First Divider');

    // Add second divider via adding a new empty block
    cy.getSlate().click();
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
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

    // At least one divider should be short
    cy.get('#page-document .divider.short').should('exist');
  });

  it('adds divider block using block chooser search', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Search Divider Test');

    cy.getSlate().click();

    // Use search box in block chooser
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get(".blocks-chooser .ui.form .field.searchbox input[type='text']")
      .should('be.visible')
      .type('divider');

    cy.get('.blocks-chooser .button.dividerBlock')
      .contains('Divider')
      .click({ force: true });

    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    cy.get('.field-wrapper-text #field-text')
      .click()
      .type('Searched Divider');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.contains('Searched Divider');
  });

  it('adds divider, then removes it via block toolbar', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Remove Divider Test');

    addDividerBlock();
    cy.get('fieldset.divider-block').should('exist');

    // Click the block delete button (trash icon in block toolbar)
    cy.get('.block.toolbar div[role="button"][title="Delete block"]').click({
      force: true,
    });

    cy.get('fieldset.divider-block').should('not.exist');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .divider').should('not.exist');
  });

  it('copies and pastes divider block', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Copy Paste Divider Test');

    addDividerBlock();
    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    cy.get('.field-wrapper-text #field-text').click().type('Original Divider');

    // Copy block
    cy.get('.block.toolbar div[role="button"][title="Copy block"]').click({
      force: true,
    });

    // Paste block
    cy.get('.block.toolbar div[role="button"][title="Paste block"]').click({
      force: true,
    });

    cy.get('fieldset.divider-block').should('have.length', 2);

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .divider').should('have.length.at.least', 2);
    cy.contains('Original Divider');
  });
});
