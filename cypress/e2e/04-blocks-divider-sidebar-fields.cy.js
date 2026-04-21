import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Divider Block: Sidebar Fields', () => {
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

  it('sets divider title through sidebar and persists it in edit mode', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Title Test');
    cy.get('.documentFirstHeading').contains('Divider Title Test');

    addDividerBlock();

    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    // In Volto 17/18, the sidebar field may vary slightly; use a robust selector
    cy.get('.field-wrapper-title input[id^="field-"]')
      .should('be.visible')
      .click()
      .type('My Divider Title');

    cy.get('fieldset.divider-block legend').should('contain', 'My Divider Title');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.contains('Divider Title Test');
    cy.get('#page-document .divider-block legend').should('contain', 'My Divider Title');
  });

  it('sets divider text and renders horizontal divider', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Text Test');

    addDividerBlock();

    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    cy.get('.field-wrapper-text input[id^="field-"]')
      .should('be.visible')
      .click()
      .type('Divider Label');

    cy.get('fieldset.divider-block .divider').should('have.class', 'horizontal');
    cy.get('fieldset.divider-block .divider').should('contain', 'Divider Label');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .styled-dividerBlock .divider, #page-document .divider')
      .should('have.class', 'horizontal')
      .and('contain', 'Divider Label');
  });

  it('toggles section modifier and renders it in view mode', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Section Test');

    addDividerBlock();

    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    cy.get('.field-wrapper-section .ui.checkbox').click();
    cy.get('fieldset.divider-block .divider').should('have.class', 'section');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .styled-dividerBlock .divider, #page-document .divider')
      .should('have.class', 'section');
  });

  it('toggles short modifier and renders it in view mode', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Short Test');

    addDividerBlock();

    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    cy.get('.field-wrapper-short .ui.checkbox').click();
    cy.get('fieldset.divider-block .divider').should('have.class', 'short');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .styled-dividerBlock .divider, #page-document .divider')
      .should('have.class', 'short');
  });

  it('toggles fitted modifier and renders it in view mode', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Fitted Test');

    addDividerBlock();

    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    cy.get('.field-wrapper-fitted .ui.checkbox').click();
    cy.get('fieldset.divider-block .divider').should('have.class', 'fitted');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .styled-dividerBlock .divider, #page-document .divider')
      .should('have.class', 'fitted');
  });

  it('sets spacing option and applies CSS class in view mode', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Spacing Test');

    addDividerBlock();

    cy.get('fieldset.divider-block .divider').first().click({ force: true });

    // Toggle hidden first because spacing is intended to be used with hidden
    cy.get('.field-wrapper-hidden .ui.checkbox').click();

    // image_size widget renders S/M/L buttons
    cy.get('.field-wrapper-spacing')
      .find('button')
      .contains('M')
      .click({ force: true });

    cy.get('fieldset.divider-block .divider').should('have.class', 'divider-spacing-m');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .styled-dividerBlock .divider, #page-document .divider')
      .should('have.class', 'divider-spacing-m');
  });
});
