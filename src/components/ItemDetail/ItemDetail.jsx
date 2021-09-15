import React from 'react'
import Card from "react-bootstrap/Card"

const ItemDetail = ({item}) => {
    return (
        <div>
            <Card.Img className="w-25 h-25" variant="top" src={item.img} />
            <h1>{item.nombre}</h1>
            <h1>{item.precio}</h1>
        </div>
    )
}

export default ItemDetail
