import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Divider Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Divider Block: Add and save divider', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Divider Test');
    cy.get('.documentFirstHeading').contains('Divider Test');

    cy.getSlate().click();

    // Add divider block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.dividerBlock')
      .contains('Divider')
      .click({ force: true });

    // Save
    cy.get('#toolbar-save').click();

    cy.contains('Divider Test');
  });

  it('Divider Block: Section divider', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Section Divider Test');

    cy.getSlate().click();

    // Add divider block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.dividerBlock')
      .contains('Divider')
      .click({ force: true });

    // Toggle section checkbox
    cy.get('.sidebar-container label[for="field-section"]').click();

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Section Divider Test');
  });

  it('Divider Block: Short divider', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Short Divider Test');

    cy.getSlate().click();

    // Add divider block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.dividerBlock')
      .contains('Divider')
      .click({ force: true });

    // Toggle short checkbox
    cy.get('.sidebar-container label[for="field-short"]').click();

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Short Divider Test');
  });

  it('Divider Block: Hidden divider', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Hidden Divider Test');

    cy.getSlate().click();

    // Add divider block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.dividerBlock')
      .contains('Divider')
      .click({ force: true });

    // Toggle hidden checkbox
    cy.get('.sidebar-container label[for="field-hidden"]').click();

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Hidden Divider Test');
  });

  it('Divider Block: Fitted divider', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Fitted Divider Test');

    cy.getSlate().click();

    // Add divider block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.dividerBlock')
      .contains('Divider')
      .click({ force: true });

    // Toggle fitted checkbox
    cy.get('.sidebar-container label[for="field-fitted"]').click();

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Fitted Divider Test');
  });
});