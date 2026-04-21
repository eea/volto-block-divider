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

  it('applies primary theme and renders in view mode without wrapper', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Primary Theme');

    addDividerBlock();
    openBlock();

    // Open Styling tab
    cy.get('.sidebar-container .formtabs .item')
      .contains('Styling')
      .click({ force: true });

    // Volto theme_picker shows color buttons; first non-empty could be primary
    cy.get('.field-wrapper-styles-theme .color-picker-widget .buttons button')
      .eq(1)
      .click({ force: true });

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // Without wrapper when theme is set
    cy.get('#page-document .styled-dividerBlock').should('not.exist');
    cy.get('#page-document .divider').should('have.class', 'primary');
  });

  it('applies secondary theme', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Secondary Theme');

    addDividerBlock();
    openBlock();

    cy.get('.sidebar-container .formtabs .item')
      .contains('Styling')
      .click({ force: true });

    cy.get('.field-wrapper-styles-theme .color-picker-widget .buttons button')
      .eq(2)
      .click({ force: true });

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .divider').should('have.class', 'secondary');
  });

  it('applies inverted style alongside theme', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Inverted Theme');

    addDividerBlock();
    openBlock();

    cy.get('.sidebar-container .formtabs .item')
      .contains('Styling')
      .click({ force: true });

    cy.get('.field-wrapper-styles-theme .color-picker-widget .buttons button')
      .eq(1)
      .click({ force: true });

    cy.get('.field-wrapper-styles-inverted .ui.checkbox').click({ force: true });

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .divider')
      .should('have.class', 'primary')
      .and('have.class', 'inverted');
  });

  it('clears theme and returns to styled wrapper', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Clear Theme');

    addDividerBlock();
    openBlock();

    cy.get('.sidebar-container .formtabs .item')
      .contains('Styling')
      .click({ force: true });

    cy.get('.field-wrapper-styles-theme .color-picker-widget .buttons button')
      .eq(1)
      .click({ force: true });

    // Clear by selecting the default / first button
    cy.get('.field-wrapper-styles-theme .color-picker-widget .buttons button')
      .first()
      .click({ force: true });

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .styled-dividerBlock').should('exist');
  });
});
