const categories = []
describe('categories', () => {
  beforeEach(() => {
    cy.viewport(1440, 1080)
    cy.visit('http://xiaomi.com')
  })
  it('happy path', () => {
    cy.get('#J_categoryList .category-item').each((item) => {
      const currentCate = {}
      //   cy.get(item).click()
      cy.get(item).trigger('click')
      cy.get(item)
        .find('a.title')
        .invoke('text')
        .then((name) => {
          currentCate.name = name.trim()
          console.log(currentCate.name)
        })
        .then(() => {
          currentCate.data = []
          cy.get(item)
            .find('.children-list span.text')
            .each((res) => {
              cy.get(res)
                .invoke('text')
                .then((text) => {
                  currentCate.data.push(text)
                })
            })
            .then(() => {
              console.log(currentCate)
              categories.push(currentCate)
            })
        })
    })
  })
  afterEach(() => {
    console.log('end', categories)
    cy.writeFile('categories.json', JSON.stringify(categories), 'utf-8')
  })
})
