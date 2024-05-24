describe('Reporting tests', () => {

    beforeEach(() => {
        cy.visit('https://imgur.com')
    })

    it('Navigation to upload page', () => {
        cy.get('[href="/upload"]').should('have.text', 'New post');
        cy.get('[href="/upload"]').click();
        cy.url('https://imgur.com/upload').should('contain', '/upload');
        cy.get('.UploadDialog').should('be.visible')
    })

    it('Navigation from upload page back to home page', () => {
        cy.get('[href="/upload"]').click();
        cy.get('.PopUpClose').click();
        cy.get('svg').click();
        cy.url('https://imgur.com');
    })

    it('Upload new image', () => {
        cy.get('[href="/upload"]').click();
        cy.get('#file-input').attachFile('../fixtures/image.jpg');
        cy.wait(6000);
        cy.get(".ToastContainer").contains("Complete");
    })

})