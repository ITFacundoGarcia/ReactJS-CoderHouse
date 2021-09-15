import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    const onAdd = (cant)=> {
        console.log(cant)
    }

    return (
        <div>
            <div className="" key={producto.id} >
            <li className="p-2">
                    <Card style={{backgroundColor:"Grey", width: '18em' }}>
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body className="text-center">
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>
                                Tipo: {producto.categoria}<hr/>
                                Volumen: {producto.volumen}cm3<hr/>
                                precio: ${producto.precio}<hr/>
                            </Card.Text>
                            <Link to={`/detalle/${producto.id}`}>
                            <   Button variant="dark" onClick=''>Más detalles</Button><hr/>
                            </Link>
                            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
            </li>
            </div>
        </div>
    )
}

export default Item
