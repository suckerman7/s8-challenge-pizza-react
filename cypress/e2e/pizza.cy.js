describe('Pizza Order Flow', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('ACIKTIM').click();
  });

  it('müşteri ismi inputuna metin girilebilmeli', () => {
    cy.get('[data-cy="customer-name"]')
      .type('Mert')
      .should('have.value', 'Mert');
  });

  it('birden fazla malzeme seçilebilmeli', () => {
    cy.get('[data-cy="ingredient-Pepperoni"]').check().should('be.checked');
    cy.get('[data-cy="ingredient-Sosis"]').check().should('be.checked');
    cy.get('[data-cy="ingredient-Mısır"]').check().should('be.checked');
  });

  it('form doldurulup sipariş gönderilebilmeli', () => {
    // isim
    cy.get('[data-cy="customer-name"]').type('Mert');

    // pizza boyutu
    cy.get('[data-cy="size-Orta"]').check();

    // hamur
    cy.get('[data-cy="dough-size"]').select('Orta');

    // malzemeler (min 4)
    cy.get('[data-cy="ingredient-Pepperoni"]').check();
    cy.get('[data-cy="ingredient-Sosis"]').check();
    cy.get('[data-cy="ingredient-Mısır"]').check();
    cy.get('[data-cy="ingredient-Sucuk"]').check();

    // submit
    cy.get('[data-cy="submit-order"]').should('not.be.disabled').click();

    // success ekranı
    cy.contains('SİPARİŞİNİZ ALINDI').should('be.visible');
  });
});