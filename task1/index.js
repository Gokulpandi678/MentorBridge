const products = [
    {
        productId:1,
        name:"Samsung",
        description:"The most featured mobile",
        price:19999,
        stock:50,
        category:"Mobile",
        tags:["SmartPhone", "Mobile", "Phone"],
        discount:null
    },
    {
        productId:2,
        name:"Nike",
        description:"Feel comfort when running" ,
        price:999,
        stock:20,
        category:"Footwear",
        tags:["Shoe", "Footwear"],
        discount:{
            type:"fixed",
            value:200
        }
    },
    {
        productId:3,
        name:"T-Shirt",
        description:"Kick the sun rays away from you",
        price:200,
        stock:100,
        category:"Clothes",
        tags:["Dress", "t-shirt"],
        discount:{
            type:"percentage",
            value:20
        }
    },
    {
        productId:4,
        name:"Realme",
        description:"Get the best User Experience",
        price:12999,
        stock:50,
        category:"Mobile",
        tags:["SmartPhone", "Mobile", "Phone"],
        discount:null
    }
];

//Display the products
const displayProducts = (product) => {
    console.log(`
        ProductId:${product.productId},
        Name:${product.name},
        Description:${product.description},
        Price:${product.price},
        Stock:${product.stock},
        category:${product.category},
        tags:${product.tags.join(',')}
    `)
    if(product.discount !== null){
        for(const key in product.discount){
            console.log(`Discount:{${key}:${product.discount[key]}}`);
        }
    }
}
console.log("----------Product details--------------");
products.forEach(product => displayProducts(product));


//filtering products by category
const filterProductByCategory = (category) => {
    return products.filter((product) => product.category === category);
}
console.log("-------Products in Footwear category-------------");
console.log(filterProductByCategory('Footwear'));


//find products by Id
const findProductById = (id) => {
    return products.find(product => product.productId === id);
}
console.log("----------Product with the Id 1-----------");
console.log(findProductById(1));


//Applying discount to a product
const discountModule = (() => {
    const applyDiscount = (productId) => {
        const product = findProductById(productId);
        if(product.discount){
            if(product.discount.type === 'fixed'){
                product.price -= product.discount.value;
            }else{
                product.price -= product.price * (product.discount.value / 100);
            }
            displayProducts(product)
        }else{
            console.log('No discount for this product');
        }
    }
    return {applyDiscount:applyDiscount};
})()
console.log('-------Discount for the product 3--------');
discountModule.applyDiscount(3)


//Update a stock for the product
const updateStock = (productId, newQty) => {
    const product = findProductById(productId);
    if(!product){
        console.log("No product found with this Id");
        return;
    }else{
        product.stock = newQty;
        return displayProducts(product);
    }
}

console.log('------Update the stock of the product Id 3 to 500------');
updateStock(3,500);


//Total price of all stocks
const evalTotalPrice = () => {
    let totalValue = 0;
    products.forEach((product) => {
        totalValue += (product.stock * product.price);
    })
    return totalValue;
}
console.log("Total price of all stock is:", evalTotalPrice());


//Adding tag to a product
const addProductTag = (productId, tag) => {
    const product = findProductById(productId);
    if(product.tags.includes(tag)){
        console.log("Tag already exist in this product");
    }else{
        product.tags.push(tag);
    }
    return displayProducts(product);
}
console.log('------Adding clothes tag in product 3--------');
addProductTag(3, 'clothes');


//Removing a product
const removeProduct = (productId) => {
    const productIndex = products.findIndex(product => product.productId === productId);
    if(productIndex !== -1){
        products.splice(productIndex,1);
        console.log('product removed successfully');
    }else{
        console.log('No product found with this id');
    }

}
console.log('-----Removing a product with id 4------');
removeProduct(4)
products.forEach(product => displayProducts(product) );