type ProductProps = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

    const productsArray:ProductProps[] = [
        {
            title:"iPhone 14 Pro Max",
            description:"This is iPhone 14 Pro Max",
            type:"phone",
            capacity:"512",
            price: 1197,

},
        {
            title:"iPhone 13 Pro",
            description:"This is iPhone 13 Pro",
            type:"phone",
            capacity:"256",
            price: 889,

},
        {
            title:"iPhone 12 Max",
            description:"This is iPhone 12 Max",
            type:"phone",
            capacity:"128",
            price: 539,

},
        {
            title:"iPhone 11",
            description:"This is iPhone 11",
            type:"phone",
            capacity:"256",
            price: 350,

},
        {
            title:"iPhone 10 Pro",
            description:"This is iPhone 10 Pro",
            type:"phone",
            capacity:"512",
            price: 254,

},
        {
            title:"iPhone 8",
            description:"This is iPhone 8",
            type:"phone",
            capacity:"64",
            price: 119,

}
]

export default productsArray