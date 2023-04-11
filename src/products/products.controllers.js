const Products = require('../models/products.models')

/*const productsDB = [
    {
        id: 1,
        name: 'Clean Code',
        description: 'Evedn bad code',        
        price: 1700.00,
        stock: 20
    }
]*/

//let productId = 1

const findAllProducts = async() => {
    const products = await Products.findAll()
    return products
}

const findProductById = async(id) => {
    const data = await Products.findOne({
        where: {
            id: id
        }
    }) 
    //const data = productsDB.find(productItem => productItem.id === id)
    return data
}

const createProduct = async(productObj) => {

    const newProduct = await Products.create({
        name: productObj.name,
        description: productObj.description,
        price: productObj.price,
        stock: productObj.stock
    })

    /*const newProduct = {
        id: productId++,
        name: productObj.name || 'Anonymous',
        description: productObj.synopsis || 'Lorem Ipsum',
        price: productObj.price || null,
        stock: productObj.stock || null
    }
    productsDB.push(newProduct)*/
    return newProduct
}

const updateProduct = async(id, productObj) => {
    const selectedProduct = await Products.findOne({
        where: {
            id: id
        }
    })
    
    if(!selectedProduct) return null

    const modifiedProduct = await selectedProduct.update(productObj)
    return modifiedProduct    
}

const deleteProduct = async(id) => {
    const product = await Products.destroy({
        where: {
            id: id
        }
    })
    return product // 1 || 0
}

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
