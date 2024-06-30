describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8002')
    cy.contains('ECom').should('be.visible')
    cy.get('[data-testid="button-acceder"]').should('be.visible')
    cy.get('[data-testid="button-acceder"]').click()
    cy.url().should('include', '/login');
    cy.contains('Please log in to continue.').should('be.visible')
    cy.get('[data-testid="email"]').type('user1@example.com')
    cy.get('[data-testid="password"]').type('password123')
    cy.get('[data-testid="acceder"]').click()
    cy.url().should('include', '/dashboard');
    cy.contains('Permitido').should('be.visible')
    cy.get('[data-testid="Products"]').click()
    cy.url().should('include', '/products');
    cy.wait(3000);
    cy.get('body').then(($body) => {
      const botones = $body.find('button.remove');
      if (botones.length > 0) {
        cy.log(`Se encontraron ${botones.length} boton.`);
        cy.contains('button', 'Eliminar').first().click();
      } else {
        cy.log('No se encontró ningún producto, registre un producto para ejecutar esta prueba.');
      }
    });
  })
})