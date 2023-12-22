const credentials = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    // Add more data sets as needed
  ];
  
  describe('Login Tests', () => {
    it('should login with different credentials', () => {
      credentials.forEach((creds) => {
       // cy.visit('/login');
       // cy.get('#username').type(creds.username);
       cy.log(creds.username);
       cy.log(creds.password)
     //   cy.get('#password').type(creds.password);
      //  cy.get('#loginButton').click();
  
        // Your assertions or additional actions
      });
    });
  });