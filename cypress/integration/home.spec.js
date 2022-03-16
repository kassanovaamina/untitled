const { faker } = require('@faker-js/faker');

describe('HOME', () =>{
    it('Logo exists', () => {
        cy.visit('https://kompot.us/');
        cy.get('#logo').should('contain.text', 'Kompot');
    })

    it('Login button exists', () => {
        cy.get('[data-qa="login"]')
            .should("be.visible")
            .should('have.attr', 'href','/user/login');
    })
})

describe('HOME PAGE LINKS', () => {
    beforeEach(() => {
        cy.visit('https://kompot.us/');
    })

    it('Login button redirect to login page', () => {
        cy.get('[data-qa="login"]').click();
        cy.get('h1').should('contain.text', 'Welcome back!');
    })

    it('Register button redirect to register page', () => {
        cy.get('[data-qa="register"]').first().click();
        cy.get('h1').should('contain.text', 'Start your free 14-day trial with Kompot');
    })

})

describe ('REGISTRAION PAGE', () => {
    it('Register a new users', () => {
        cy.visit('https://kompot.us/user/register');
        let randomEmail = faker.internet.email();
        let randomPassword = faker.internet.password()
        cy.get('#email').type(randomEmail);
        cy.get('#password').type(randomPassword);
        cy.get('[type="submit"]').click();
    })

    it('Create profile', () => {
        let randomFullName = faker.name.findName();
        let randomphoneNumber = faker.phone.phoneNumberFormat();
        // const randomCard = faker.helpers.createCard();
        cy.get('#fullName').type(randomFullName);
        cy.get('#phone_number').type(randomphoneNumber);
        cy.get('[type="submit"]').click();
    })

})


describe('LOGIN PAGE', () => {
    it('Login user', () => {
        cy.visit('https://kompot.us/user/login');
        cy.get('#email').type(randomEmail);
        cy.get('#password').type(randomPassword);
        cy.get('[type="submit"]').click();
    })
})