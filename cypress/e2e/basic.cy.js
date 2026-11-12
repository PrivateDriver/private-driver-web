describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the headline', () => {
    cy.get('h1')
    .contains('A Driver Driven App!');
  })

  it('loads the logo image', () => {
    cy.get('img.main-logo')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})
