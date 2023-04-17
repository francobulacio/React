const products = [
    {nombre: "Jack Daniels", precio: 1800, id: "1", img: "../img/daniels.jpg", idcat: "1" },
    {nombre: "Chivas", precio: 1900, id: "2", img: "../img/chivas.jpg", idcat: "1"},
    {nombre: "Red", precio: 2000, id: "3", img: "../img/red.jpg", idcat:"1"},
    {nombre: "Yellow", precio: 2200, id: "4", img: "../img/yellow.jpg", idcat:"1"},
    {nombre: "Fernet 1882", precio: 1200, id: "5", img: "../img/1882.jpg", idcat:"4"},
    {nombre: "Absolut", precio: 4200, id: "6", img: "../img/absolut.jpg", idcat:"3"},
    {nombre: "Beefeater", precio: 5200, id: "7", img: "../img/beefeater.jpg", idcat:"3"},
    {nombre: "Fernet Branca", precio: 2200, id: "8", img: "../img/branca.jpg", idcat:"4"},
    {nombre: "Bull Dog", precio: 5300, id: "9", img: "../img/bulldog_gin.jpg", idcat:"3"},
    {nombre: "Catena Zapata", precio: 1500, id: "10", img: "../img/catena.jpg", idcat:"2"},
    {nombre: "Jameson", precio: 3600, id: "11", img: "../img/jameson.jpg", idcat:"1"},
    {nombre: "Lopez", precio: 1700, id: "12", img: "../img/lopez.jpg", idcat:"2"},
    {nombre: "Norton", precio: 3600, id: "13", img: "../img/norton.jpg", idcat:"2"},
    {nombre: "Skyy", precio: 7600, id: "14", img: "../img/skyy.jpg", idcat:"3"},
    
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve (products)
        }, 100)
    })
}

export const getUnProducto =  (id) => {
    return new Promise ( (resolve) =>{
        setTimeout (() => {
            const producto = products.find (prod => prod.id === id)
            resolve ( producto)
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout (() => {
            const productoCategoria = products.filter ( prod => prod.idcat === idCategoria)
            resolve(productoCategoria);
        },100)
    })

}