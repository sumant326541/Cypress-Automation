class HomePage {
    visit() {
        cy.visit('/')
    }
    searchInput(text) {
        return cy.get('input[name="search"]').first().type(text)
    }
    getSearchButton() {
        return cy.get('[type="submit"]').first()
    }

}
module.exports = HomePage