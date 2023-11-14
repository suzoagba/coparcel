describe('Homepage', () => {
    it('should load successfully and contain a specific element', () => {
      // Visit the home page
      cy.visit('/');
  
      // Check if the page title is correct
      cy.title().should('eq', 'Home');
  
      // Check if a specific element with class 'main-content' exists on the page
      cy.get('.main-parcel').should('exist');
  
      // You can add more assertions as needed based on your application's content and structure
    });
  });