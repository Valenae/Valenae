     describe('My First Tests', () => {
        it('Visiting Google displays the correct title', () => {
          cy.visit('https://byndyusoft.com')
          cy.contains('Заказать презентацию').click()
          cy.get('.popup-callback__footer-contacts > a:first-child').should('have.text', '8 800 775-15-21')
          cy.get('.popup-callback__footer-contacts > a:last-child').should('have.text', 'sales@byndyusoft.com')
        });
      });