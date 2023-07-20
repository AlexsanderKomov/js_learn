/// <reference types="cypress" />

describe('Приоржение TODO', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('input').type('Новое дело');
    cy.contains('Добавь дело').click();
    cy.get('ul li').should('contain.text', 'Новое дело');
  });

  it('Дело успешно удаляется', () => {
    cy.get('ul li:first-child').contains('Удалить').click();
    cy.get('ul').should('be.empty');
  });

  it('Дело успешно отмечается как сделанное или не сделанное', () => {
    cy.get('ul li:first-child').contains('Готово').click();
    cy.get('ul li:first-child').should('have.class', 'list-group-item-success');
    cy.get('ul li:first-child').contains('Готово').click();
    cy.get('ul li:first-child').should(
      'not.have.class',
      'list-group-item-success'
    );
  });
});
