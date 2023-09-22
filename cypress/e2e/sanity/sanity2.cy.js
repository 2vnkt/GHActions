describe('template spec', () => {
    it('Sanity2 case-1', () => {
      cy.visit('https://example.cypress.io')
      cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
      cy.wait(5000)
      cy.get('.navbar-brand').click()
      cy.wait(5000)
      cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
    })
    it('Sanity2 case-2', () => {
        cy.visit('https://example.cypress.io')
        cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
        cy.wait(5000)
        cy.get('.navbar-brand').click()
        cy.wait(5000)
        cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
      })
})