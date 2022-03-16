describe('HOME PAGE LINKS', () => {
    beforeEach(() => {
        cy.visit('https://kompot.us/');
    })

    it('Login button redirect to login page', () => {
        cy.get('[data-qa="login"]').click();
        cy.get('h1').should('contain.text', 'Welcome back!');
        cy.get('#email').type('yeraliyeva.amina@gmail.com');
        cy.get('#password').type('123456aA');
        cy.get('[type="submit"]').click();
    })



})
