/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Jokes', () => {
  it('Visits login', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Login').click();
    cy.findByText('Welcome back. Sign in below!').should('exist');
  });
  it('Sign in as user', () => {
    cy.findByLabelText('Username').type('user');
    cy.findByLabelText('Password').type('test1');
    cy.get('#loginBtn').click();
    cy.wait(3000);
    cy.get('h1').contains('Home');
  });
  it('Navigate to jokes', () => {
    cy.findByText('Jokes').click();
    cy.url().should('include', '/jokes');
  });
  it('Log out', () => {
    cy.findByText('Logout').click();
    cy.findByText('Sign out').click();
    cy.findByText('Sign out').should('not.exist');
  });
});
