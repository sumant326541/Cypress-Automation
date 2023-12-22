class BlogPage {
    constructor() {
        this.url = "/index.php?route=extension/maza/blog/home"
        this.title = 'Blog'
    }
    visit() {
        cy.visit(this.url)
    }
    BusinessLink() {
        return cy.get('.list-group-item').eq(0)
    }
}

module.exports = BlogPage