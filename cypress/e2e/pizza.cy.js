describe('Pizza Order Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('ACIKTIM').click();
  });

  it('müşteri ismi inputuna metin girilebilmeli', () => {
    cy.get('[data-cy="customer-name"]')
      .type('Mert')
      .should('have.value', 'Mert');
  });

  it('birden fazla malzeme seçilebilmeli', () => {
    cy.get('[data-cy="ingredient-Pepperoni"]').click();
    cy.get('[data-cy="ingredient-Sosis"]').click();
    cy.get('[data-cy="ingredient-Mısır"]').click();
  });

  it('form doldurulup sipariş gönderilebilmeli', () => {
    cy.get('[data-cy="customer-name"]').type('Mert');

    cy.get('[data-cy="size-Medium"]').click();

    cy.get('[data-cy="dough-size"]').select('Orta');

    cy.get('[data-cy="ingredient-Pepperoni"]').click();
    cy.get('[data-cy="ingredient-Sosis"]').click();
    cy.get('[data-cy="ingredient-Mısır"]').click();
    cy.get('[data-cy="ingredient-Sucuk"]').click();

    cy.get('[data-cy="submit-order"]').should('not.be.disabled').click();

    cy.contains('SİPARİŞ ALINDI').should('be.visible');
  });
});

describe('Pizza Order Validation Hata', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('ACIKTIM').click();
  });

  it('İsim 3 karakterden az olursa hata göster', () => {
    cy.get('[data-cy="customer-name"]').type("Çi");
    cy.get('[data-cy="customer-name"]').blur();

    cy.contains('İsminiz en az 3').should('be.visible');
    cy.get('[data-cy="submit-order"]').should('be.disabled');
  });
});

describe('Pizza Order Validation Submit Disabled', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('ACIKTIM').click();
  });

  it("4 malzemeden az seçilirse submit disabled olmalı", () => {
    cy.get('[data-cy="customer-name"]').type("Mert");
    cy.get('[data-cy="size-Small"]').click();
    cy.get('[data-cy="dough-size"]').select('Kalın');

    cy.get('[data-cy="ingredient-Domates"]').click();
    cy.get('[data-cy="ingredient-Sucuk"]').click();
    cy.get('[data-cy="ingredient-Kanada Jambonu"]').click();

    cy.get('[data-cy="submit-order"]').should('be.disabled');
  });

  it("Pizza boyutu seçilmezse submit disabled olmalı", () => {
    cy.get('[data-cy="customer-name"]').type("Tülay");
    cy.get('[data-cy="dough-size"]').select('Orta');

    cy.get('[data-cy="ingredient-Sosis"]').click();
    cy.get('[data-cy="ingredient-Jalepeno"]').click();
    cy.get('[data-cy="ingredient-Soğan"]').click();
    cy.get('[data-cy="ingredient-Sarımsak"]').click();

    cy.get('[data-cy="submit-order"]').should('be.disabled');
  });
});

describe('Pizza Order Validation Submit', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('ACIKTIM').click();
  });

  it("Form tamamen valid olunca submit enabled olmalı", () => {
    cy.get('[data-cy="customer-name"]').type("Seyfettin");
    cy.get('[data-cy="size-Small"]').click();
    cy.get('[data-cy="dough-size"]').select('İnce');

    cy.get('[data-cy="ingredient-Pepperoni"]').click();
    cy.get('[data-cy="ingredient-Salam"]').click();
    cy.get('[data-cy="ingredient-Kanada Jambonu"]').click();
    cy.get('[data-cy="ingredient-Jalepeno"]').click();
    cy.get('[data-cy="ingredient-Ananas"]').click();

    cy.get('[data-cy="submit-order"]').should('not.be.disabled');
  });
});

describe('Malzeme seçimi', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('ACIKTIM').click();
  });

  it('Birden fazla malzeme seçilebilir', () => {
    cy.get('[data-cy="ingredient-Kanada Jambonu"]').click();
    cy.get('[data-cy="ingredient-Biber"]').click();
    cy.get('[data-cy="ingredient-Domates"]').click();

    cy.get('[data-cy="ingredient-Kanada Jambonu"] input').should('be.checked');
    cy.get('[data-cy="ingredient-Biber"] input').should('be.checked');
    cy.get('[data-cy="ingredient-Domates"] input').should('be.checked');
  });
});

describe('Submit buton kontrol etmek', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('ACIKTIM').click();
  });

  it('Form eksikken buton disabled olsun', () => {
    cy.get('[data-cy="submit-order"]').should('be.disabled');
  });

  it('Form tamamlanınca buton aktif olsun', () => {
    cy.get('[data-cy="customer-name"]').type("Tuncay");
    cy.get('[data-cy="size-Large"]').click();
    cy.get('[data-cy="dough-size"]').select('Kalın');

    cy.get('[data-cy="ingredient-Kanada Jambonu"]').click();
    cy.get('[data-cy="ingredient-Biber"]').click();
    cy.get('[data-cy="ingredient-Salam"]').click();
    cy.get('[data-cy="ingredient-Kabak"]').click();

    cy.get('[data-cy="submit-order"]').should('not.be.disabled');
  });
});

describe('Auto Sipariş Gönderimi', () => {
    beforeEach(() => {
        cy.intercept('POST', 'https://reqres.in/api/pizza', {
        statusCode: 201,
        body: {
          id: '1',
          createdAt: '2025-12-19',
        },
      }).as('postOrder');

      cy.visit('http://localhost:5173/');
      cy.contains('ACIKTIM').click();
    });

    it('Formu başarıyla gönder ve Success sayfasına git', () => {
      cy.get('[data-cy="customer-name"]').type("Özden");

      cy.get('[data-cy="size-Small"]').click();
      cy.get('[data-cy="dough-size"]').select('Orta');

      cy.get('[data-cy="ingredient-Pepperoni"]').click();
      cy.get('[data-cy="ingredient-Sarımsak"]').click();
      cy.get('[data-cy="ingredient-Salam"]').click();
      cy.get('[data-cy="ingredient-Sosis"]').click();

      cy.get('[data-cy="submit-order"]').click();

      cy.wait('@postOrder');
      
      cy.url().should('include', '/success');
      cy.contains('SİPARİŞ ALINDI').should('be.visible');
    });
});

describe('Fiyat testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('ACIKTIM').click();
  });

  it('Malzemeleri seç ve fiyat hesaplansın', () => {
    cy.get('[data-cy="customer-name"]').type("Mert");
    cy.get('[data-cy="size-Medium"]').click();
    cy.get('[data-cy="dough-size"]').select('Orta');

    cy.get('[data-cy="ingredient-Kanada Jambonu"]').click();
    cy.get('[data-cy="ingredient-Biber"]').click();
    cy.get('[data-cy="ingredient-Salam"]').click();
    cy.get('[data-cy="ingredient-Kabak"]').click();
    cy.get('[data-cy="ingredient-Sarımsak"]').click();
    cy.get('[data-cy="ingredient-Sosis"]').click();

    cy.get('[data-cy="total-price"]').should('be.visible').and('contain', '115.50₺')
  });

  it('Pizza sayısı artınca toplam fiyat da artsın', () => {
    cy.get('[data-cy="customer-name"]').type("Mert");
    cy.get('[data-cy="size-Medium"]').click();
    cy.get('[data-cy="dough-size"]').select('Orta');

    cy.get('[data-cy="ingredient-Kanada Jambonu"]').click();
    cy.get('[data-cy="ingredient-Biber"]').click();
    cy.get('[data-cy="ingredient-Salam"]').click();
    cy.get('[data-cy="ingredient-Kabak"]').click();
    cy.get('[data-cy="ingredient-Sarımsak"]').click();
    cy.get('[data-cy="ingredient-Sosis"]').click();

    cy.get('[data-cy="increase-count"]').click();

    cy.get('[data-cy="total-price"]').should('be.visible').and('contain', '231.00₺')
  });
});





