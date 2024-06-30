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
    cy.get('a#add-product').should('be.visible');
    cy.get('a#add-product').click()
    const randomNumber = Math.floor(Math.random() * 1000);
    const productName = `Licuadora ${randomNumber}`;
    cy.get('[data-testid="name"]').type(productName);
    cy.get('[data-testid="description"]').type('Licuadora')
    cy.get('[data-testid="price"]').type(randomNumber.toString())
    cy.get('[data-testid="add"]').click()
    cy.url().should('eq', 'http://localhost:8002/dashboard/products');
  })
})