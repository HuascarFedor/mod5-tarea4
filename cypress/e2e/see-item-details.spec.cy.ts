describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8002')
    cy.get('body').then(($body) => {
      if ($body.find('a.detalles').length > 0) {
        cy.get('a.detalles').first().click()
        cy.url().should('include', '/products');
      } else {
        cy.log('No se encontró ningún enlace, registre un producto para ejecutar esta prueba.')
      }
    })
  })
})