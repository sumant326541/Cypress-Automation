import BlogPage from '../../Pages/Blogpage'
const blog = new BlogPage()
describe('Blog page test', () => {
    it('Verify blog', () => {
        blog.visit()
        blog.BusinessLink().click()

    })

})