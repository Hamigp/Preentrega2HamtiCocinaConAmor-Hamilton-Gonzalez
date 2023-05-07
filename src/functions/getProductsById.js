import products from "../data/products.json"

 const getProductsById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products.find(prod=> prod.id === productId))
        }, 500)
    })
}

export default getProductsById