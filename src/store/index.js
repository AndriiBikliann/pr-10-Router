
export default {
  getProductsList: function() {
    let arr = localStorage.getItem('products')
    return arr ? JSON.parse(arr) : []
  },
  addProduct: function(title, price) {
    let arr = this.getProductsList()
    arr.push({
      id: new Date().getTime(),
      title,
      price,
    })
    localStorage.setItem('products', JSON.stringify(arr))
  },
  deleteProduct: function(id) {
    let arr = this.getProductsList()
    arr = arr.filter((product) => product.id !== id)
    localStorage.setItem('products', JSON.stringify(arr))
  },
  getProductById(id) {
    let arr = this.getProductsList()
    return arr.find((product) => product.id === id)
  },
  updateProduct(product) {
  
    let arr = this.getProductsList()
    
    let index = arr.findIndex((item) => item.id === product.id)
  
  
    arr[index] = product
    
    localStorage.setItem('products', JSON.stringify(arr))
  },
}
