import HomePage from "../../pages/HomePage"
 
 const home = new HomePage()
  
 describe("testing home page", () => {
   it("should visit home page", () => {
     home.visit()
     home.searchInput("iphone")
     home.getSearchButton().click()

   })
  
   it("should search for a product", () => {
    home.visit()
    home.searchInput("iphone")
   // home.getSearchButton().click()
   })
 })