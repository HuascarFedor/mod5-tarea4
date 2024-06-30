describe('Authorization Redirect', () => {
  it('should redirect to login if not authorized', () => {
    cy.visit('http://localhost:8002');
    cy.visit('http://localhost:8002/dashboard', { failOnStatusCode: false });
    cy.url().should('include', '/login');
  });
});