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
      if ($body.find('a.edit').length > 0) {
        cy.get('a.edit').first().click()
        cy.url().should('include', '/products/edit')
        cy.get('[data-testid="name"]').type(` editado`);
        cy.get('[data-testid="description"]').type(` editado`);
        cy.get('[data-testid="edit"]').click()
        cy.url().should('eq', 'http://localhost:8002/dashboard/products');
      } else {
        cy.log('No se encontró ningún enlace, registre un producto para ejecutar esta prueba.')
      }
    })
  })
})