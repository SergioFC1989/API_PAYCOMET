const endpoint = require('./endpoint')
const nano = require('nanoid')

const imageBase = 'iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAIAAABQEmkSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC3SURBVEhLY/hPRzBqGVXAqGVUAaOWoYBXS/5f0Pl/kg+EgAwglzhAumUv50KtgaPTYlApQoBEyz7s/n9GFt2y+wVQWUKARMvOqSLs+PsdKkg0INEyuE1E+wYZkGsZWWBIWEZ0ckcGJFoGTOUQy4AMYB4gEZBo2dM+hOeACJijcVkJzCRAWdQsT6JlQIBmH0GElOVJtwwIgDnsXia6obgQUiYhyzIIIMZK1OxIgWWkg1HLqAD+/wcA8ZOHBCvVp+oAAAAASUVORK5CYII='
const merchantCustomerId = nano.nanoid()

// endpoint.addDocument(merchantCustomerId,'ES9121000418450200051332',12,imageBase)
endpoint.checkCustomer(merchantCustomerId,'ES9121000418450200051332',1)
// endpoint.checkDocument('e4XV_71x0kQdG0IZ1jumU','ES9121000418450200051332',12) 