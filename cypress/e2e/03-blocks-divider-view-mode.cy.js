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
  const checkboxSelector = `.field-wrapper-${field} .ui.checkbox`;

  cy.get(checkboxSelector).then(($checkbox) => {
    const isChecked = $checkbox.hasClass('checked');
    if (isChecked !== checked) {
      cy.wrap($checkbox).click({ force: true });
    }
  });

  cy.get(checkboxSelector).should(
    checked ? 'have.class' : 'not.have.class',
    'checked',
  );
};

const assertHiddenModifier = (selector) => {
  cy.get(selector).should(($divider) => {
    const hasHiddenClass = $divider.hasClass('hidden');
    const hasHiddenAttr =
      $divider.attr('hidden') !== undefined || $divider.prop('hidden') === true;
    expect(
      hasHiddenClass || hasHiddenAttr,
      'hidden modifier should be represented as class or hidden attribute',
    ).to.equal(true);
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

    // Apply one modifier at a time and wait for edit preview update.
    setCheckbox('hidden', true);
    assertHiddenModifier('fieldset.divider-block .divider');
    setCheckbox('fitted', true);
    cy.get('fieldset.divider-block .divider').should('have.class', 'fitted');

    cy.get('#toolbar-save').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/cypress/my-page`);

    const viewDividerSelector =
      '#page-document .styled-dividerBlock .divider, #page-document .divider';

    assertHiddenModifier(viewDividerSelector);
    cy.get(viewDividerSelector)
      .should('have.class', 'fitted')
      .and('not.have.class', 'section')
      .and('not.have.class', 'short')
      .and('not.have.class', 'horizontal');
  });
});
