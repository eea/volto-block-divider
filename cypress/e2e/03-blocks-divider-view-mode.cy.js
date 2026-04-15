import { slateBeforeEach, slateAfterEach } from '../support/e2e';

const setPageTitle = (title) => {
  cy.clearSlateTitle();
  cy.getSlateTitle().type(title);
  cy.get('.documentFirstHeading').contains(title);
};

const addDividerBlock = () => {
  cy.getSlate().click();
  cy.get('.ui.basic.icon.button.block-add-button').first().click();
  cy.get('.blocks-chooser .title').contains('Common').click();
  cy.get('.content.active.common .button.dividerBlock')
    .contains('Divider')
    .click({ force: true });
};

const setCheckbox = (field, checked) => {
  cy.get(`input#field-${field}`).then(($input) => {
    const isChecked = $input.prop('checked');
    if (isChecked !== checked) {
      cy.wrap($input)[checked ? 'check' : 'uncheck']({ force: true });
    }
  });
};

describe('Divider Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('persists divider text when edited from view back to edit mode', () => {
    setPageTitle('Divider Text Test');
    addDividerBlock();

    cy.get('.field-wrapper-text #field-text')
      .click()
      .type('Initial Divider Text');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/cypress/my-page`);

    cy.get(
      '#page-document .styled-dividerBlock .divider, #page-document .divider',
    )
      .should('have.class', 'horizontal')
      .and('contain', 'Initial Divider Text');

    cy.visit('/cypress/my-page/edit');
    cy.get('fieldset.divider-block .divider').first().click({ force: true });
    cy.get('.field-wrapper-text #field-text')
      .clear()
      .type('Updated Divider Text');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/cypress/my-page`);

    cy.get(
      '#page-document .styled-dividerBlock .divider, #page-document .divider',
    ).contains('Updated Divider Text');
    cy.contains('Initial Divider Text').should('not.exist');
  });

  it('renders hidden and fitted divider modifiers in view mode', () => {
    setPageTitle('Divider Modifiers Test');
    addDividerBlock();

    setCheckbox('hidden', true);
    setCheckbox('fitted', true);

    cy.get('#toolbar-save').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/cypress/my-page`);

    cy.get(
      '#page-document .styled-dividerBlock .divider, #page-document .divider',
    )
      .should('have.class', 'hidden')
      .and('have.class', 'fitted')
      .and('not.have.class', 'section')
      .and('not.have.class', 'short')
      .and('not.have.class', 'horizontal');
  });
});
