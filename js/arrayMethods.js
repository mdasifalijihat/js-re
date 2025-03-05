const products = [
    {id: 1, name: "iphone", color: "black", price: 12000, brand: "apple"},
    {id: 2, name: "xiaomi", color: "gold", price: 6540, brand: "sam"},
    {id: 3, name: "samsung", color: "white", price: 812000, brand: "samsung"}
]


// filter 
const newProducts = products.filter(product => product.price>10000)
console.log(newProducts)

// forEach

// products.forEach(product => {
//     console.log(product)
// })
// products.forEach(product => {
//     if(product.color=== 'gold'){
//         console.log(product)
//     }
// })