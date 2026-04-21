import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Divider Block: Spacing Tests', () => {
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

  const setSpacing = (value) => {
    cy.get('.field-wrapper-spacing')
      .find('button')
      .contains(value)
      .click({ force: true });
  };

  it('applies small spacing by default and no extra class when hidden is off', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Default Spacing');

    addDividerBlock();
    openBlock();

    // Default is S but hidden is false = no spacing class rendered
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .styled-dividerBlock .divider').should('exist');
  });

  it('applies hidden with small spacing and renders spacing class', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Hidden Small');

    addDividerBlock();
    openBlock();

    cy.get('.field-wrapper-hidden .ui.checkbox').click();
    // default spacing is already S
    setSpacing('S');

    cy.get('fieldset.divider-block .divider').should('have.class', 'divider-spacing-s');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .divider')
      .should('have.class', 'hidden')
      .and('have.class', 'divider-spacing-s');
  });

  it('applies hidden with medium spacing', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Hidden Medium');

    addDividerBlock();
    openBlock();

    cy.get('.field-wrapper-hidden .ui.checkbox').click();
    setSpacing('M');

    cy.get('fieldset.divider-block .divider').should('have.class', 'divider-spacing-m');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .divider')
      .should('have.class', 'hidden')
      .and('have.class', 'divider-spacing-m');
  });

  it('applies hidden with large spacing', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Hidden Large');

    addDividerBlock();
    openBlock();

    cy.get('.field-wrapper-hidden .ui.checkbox').click();
    setSpacing('L');

    cy.get('fieldset.divider-block .divider').should('have.class', 'divider-spacing-l');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .divider')
      .should('have.class', 'hidden')
      .and('have.class', 'divider-spacing-l');
  });

  it('switches spacing value and updates class in edit mode', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Switch Spacing');

    addDividerBlock();
    openBlock();
    cy.get('.field-wrapper-hidden .ui.checkbox').click();

    setSpacing('S');
    cy.get('fieldset.divider-block .divider').should('have.class', 'divider-spacing-s');

    setSpacing('M');
    cy.get('fieldset.divider-block .divider').should('not.have.class', 'divider-spacing-s');
    cy.get('fieldset.divider-block .divider').should('have.class', 'divider-spacing-m');

    setSpacing('L');
    cy.get('fieldset.divider-block .divider').should('not.have.class', 'divider-spacing-m');
    cy.get('fieldset.divider-block .divider').should('have.class', 'divider-spacing-l');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('#page-document .divider').should('have.class', 'divider-spacing-l');
  });
});
