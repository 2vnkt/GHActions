describe('template spec', () => {
  it('case-1', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
    cy.wait(5000)
    cy.get('.navbar-brand').click()
    cy.wait(5000)
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
  })

  it('Case-2', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
    cy.wait(5000)
    cy.get('.navbar-brand').click()
    cy.wait(5000)
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
  })

  it('pCase-3', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
    cy.wait(5000)
    cy.get('.navbar-brand').click()
    cy.wait(5000)
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
  })

  it('Case-4', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
    cy.wait(5000)
    cy.get('.navbar-brand').click()
    cy.wait(5000)
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('be.visible')
  })

})