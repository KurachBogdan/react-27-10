

type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

    const productsArray:Product[] = [
        {
            id:1,
            title:"iPhone 14 Pro Max",
            description:"This is iPhone 14 Pro Max",
            type:"phone",
            capacity:"512",
            price: 1197,
            image:"/images/iphone-black.webp",

},
        {
            id:2,
            title:"iPhone 13 Pro",
            description:"This is iPhone 13 Pro",
            type:"phone",
            capacity:"256",
            price: 889,
            image:"/images/iphone-blue.webp",

},
        {
            id:3,
            title:"iPhone 12 Max",
            description:"This is iPhone 12 Max",
            type:"phone",
            capacity:"128",
            price: 539,
            image:"/images/iphone-green.webp",

},
        {
            id:4,
            title:"iPhone 11",
            description:"This is iPhone 11",
            type:"phone",
            capacity:"256",
            price: 350,
            image:"/images/iphone-purple.webp",

},
        {
            id:5,
            title:"iPhone 10 Pro",
            description:"This is iPhone 10 Pro",
            type:"phone",
            capacity:"512",
            price: 254,
            image:"/images/iphone-red.webp",

},
        {
            id:6,
            title:"iPhone 8",
            description:"This is iPhone 8",
            type:"phone",
            capacity:"64",
            price: 119,
            image:"/images/iphone-white.webp",

}
]

export default productsArray