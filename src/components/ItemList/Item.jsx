import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from '../ItemCount/ItemCount'

const Item = ({producto}) => {
    const onAdd = (cant)=> {
        console.log(cant)
    }

    return (
        <div>
            <div key={producto.id} >
            <ul style={{display: "flex"}}>
            <li className="p-2">
                    <Card style={{backgroundColor:"Grey", width: '18rem' }}>
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body className="text-center">
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>
                                Tipo: {producto.categoria}<hr/>
                                Volumen: {producto.volumen}cm3<hr/>
                                precio: ${producto.precio}<hr/>
                            </Card.Text>
                            <Button variant="dark" onClick=''>Más detalles</Button><hr/>
                            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
            </li>
            </ul>
            </div>
        </div>
    )
}

export default Item
