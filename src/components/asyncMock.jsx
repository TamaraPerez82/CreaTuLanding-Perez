


const products=[
    {
        id: '1',
        name: 'Tortilla',
        price: 250,
        category: 'platos',
        img: 'https://tipsparatuviaje.com/wp-content/uploads/2018/09/tacos-comida-mexicana-1152x768.jpg' ,
        stock: 25,
        description:'torta de harina de maiz rellena con carne o pollo'
    },
    {
        id: '2',
        name: 'Helado',
        price: 200,
        category: 'postres',
        img: 'https://th.bing.com/th?id=OIP.UnX9JLrl1vnduD2Cz6cv6wHaFZ&w=292&h=213&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        stock: 25,
        description:'3 bochas de helado con frutas a elección' 
    },
    {
        id: '3',
        name: 'Limonada',
        price: 150,
        category: 'bebidas',
        img: 'https://th.bing.com/th?id=OIP.7-jd8EKTvzosuH59ZI5XoQHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        stock: 25,
        description:'limonada con menta'
    },
    {
        id: '5',
        name: 'Nachos',
        price: 150,
        category: 'platos',
        img: 'https://th.bing.com/th/id/OIP.HRX8m-1vshLiQZUHps_JtwHaE_?w=228&h=180&c=7&r=0&o=5&pid=1.7',
        stock: 15,
        description:'nachos con guacamole y salsa picante'
    }

]
export const getProducts=()=>{
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(products)
    }, 500)
})
}

export const getProductById = (productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

