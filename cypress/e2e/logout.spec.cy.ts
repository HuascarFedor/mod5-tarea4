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
    cy.get('[data-testid="logout-btn"]').click()
    cy.url().should('eq', 'http://localhost:8002/');
  })
})