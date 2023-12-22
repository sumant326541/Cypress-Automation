import HomePage from "../../pages/HomePage"

const home = new HomePage()

describe("Print all element", () => {
    it("print all element name", () => {
        home.visit()
        //cy.get('.figure-caption:not(:hidden)').each(($el,index,$list)=>{
        cy.get('.figure-caption:visible').each(($el, index, $list) => {
            const text = $el.text();
            cy.log(text)

        })
    })

    it("print if Laptops", () => {
        home.visit()
        cy.get('.figure-caption:visible').each(($el, index, $list) => {
           // cy.log($el.find('h4').text())
            if ($el.find('h4').text().includes('Laptops')) {
                cy.log($el.find('h4').text())
                $el.click()
            }

        })
    })
})