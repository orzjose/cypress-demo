describe('wait', () => {
  it('happy path', () => {
    cy.visit('http://localhost:8080/wait')

    cy.get('[cy-data="user"]').should('have.text', '张三')
  })
})
