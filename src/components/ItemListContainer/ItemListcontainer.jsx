import React from 'react'
import { useState, useEffect } from 'react'
import { getFetch } from '../utils/mock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListcontainer = ({saludo}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    useEffect (() => {
        getFetch
        .then(respuesta => {
            setProductos(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }, [])


    console.log(idCategoria)

    return (
        <div>
            <h1 className="text-center text-white-50 p-5">{saludo}</h1>

            { loading ? <h2 className="text-center text-white-50 p-5">Cargando. . .</h2> : <ItemList  productos={productos}/>}
        </div>
    )
}

export default ItemListcontainer
