const productos = [
    { id: "1", nombre: "Whisky JW", img:'https://cdn.shopify.com/s/files/1/0408/4144/5537/products/42672_1200_1_400x.jpg?v=1625152736', volumen: '1000', categoria: "Whisky" , precio: 2000 },
    { id: "2", nombre: "Licor Amarula", img:'https://cdn.shopify.com/s/files/1/0408/4144/5537/products/ShopGallery-Licor-Amarula-Cream-750-598610_400x.jpg?v=1592880871',volumen: '750', categoria: "Licor" , precio: 1500 },
    { id: "3", nombre: "Vino Catena Zapata", img:'https://cdn.shopify.com/s/files/1/0408/4144/5537/products/287772_1200_1_400x.jpg?v=1625065430',volumen: '750', categoria: "Vino" , precio: 1000 },
    { id: "4", nombre: "Cerveza Patagonia", img:'https://cdn.shopify.com/s/files/1/0408/4144/5537/products/ShopGallery-Patagonia-Bohemian-Cerv-740ml-496002_400x.jpg?v=1597767676',volumen: '740', categoria: "Cerveza" , precio: 250 },
    ];
    
    export const getFetch = new Promise((res, rej) =>{
        let respuesta = '200'
        if(respuesta === '200'){
            setTimeout(()=>{
                res(productos)
            }, 2000)
        }else{
            rej('error 404')
        }
    })


const producto = { id: "1", nombre: "Whisky JW", img:'https://cdn.shopify.com/s/files/1/0408/4144/5537/products/42672_1200_1_400x.jpg?v=1625152736', volumen: '1000', categoria: "Whisky" , precio: 2000 }

    export const getItem = new Promise((resolve)=> {

        setTimeout(()=>{
        resolve(producto)
        }, 2000)
    })
