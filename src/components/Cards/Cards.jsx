import React from 'react'
import Card from "react-bootstrap/Card"
import ItemCount from '../ItemCount/ItemCount'

const Cards = () => {

    const onAdd = (cant)=> {
        console.log(cant)
    }

    return (
        <div>
            <ul style={{display: "flex"}}>
                <li className="p-2">
                    <Card style={{backgroundColor:"Grey", width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.cellshop.com/1565211-thickbox_default/whisky-white-horse-8-anos-1l.jpg" />
                        <Card.Body className="text-center">
                            <Card.Title>*WHITE HORSE 8 AÑOS*</Card.Title>
                            <Card.Text>
                                Tipo: Blended<hr/>
                                Edad: 8 años<hr/>
                                Volumen: 1000cm3<hr/>
                            </Card.Text>
                            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </li>
                <li className="p-2">
                    <Card style={{backgroundColor:"Grey", width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.cellshop.com/1565211-thickbox_default/whisky-white-horse-8-anos-1l.jpg" />
                        <Card.Body className="text-center">
                            <Card.Title>*WHITE HORSE 8 AÑOS*</Card.Title>
                            <Card.Text>
                                Tipo: Blended<hr/>
                                Edad: 8 años<hr/>
                                Volumen: 1000cm3<hr/>
                            </Card.Text>
                            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </li>
                <li className="p-2">
                    <Card style={{backgroundColor:"Grey", width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.cellshop.com/1565211-thickbox_default/whisky-white-horse-8-anos-1l.jpg" />
                        <Card.Body className="text-center">
                            <Card.Title>*WHITE HORSE 8 AÑOS*</Card.Title>
                            <Card.Text>
                                Tipo: Blended<hr/>
                                Edad: 8 años<hr/>
                                Volumen: 1000cm3<hr/>
                            </Card.Text>
                            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </li>
                <li className="p-2">
                    <Card style={{backgroundColor:"Grey", width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.cellshop.com/1565211-thickbox_default/whisky-white-horse-8-anos-1l.jpg" />
                        <Card.Body className="text-center">
                            <Card.Title>*WHITE HORSE 8 AÑOS*</Card.Title>
                            <Card.Text>
                                Tipo: Blended<hr/>
                                Edad: 8 años<hr/>
                                Volumen: 1000cm3<hr/>
                            </Card.Text>
                            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </li>
                <li className="p-2">
                    <Card style={{backgroundColor:"Grey", width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.cellshop.com/1565211-thickbox_default/whisky-white-horse-8-anos-1l.jpg" />
                        <Card.Body className="text-center">
                            <Card.Title>*WHITE HORSE 8 AÑOS*</Card.Title>
                            <Card.Text>
                                Tipo: Blended<hr/>
                                Edad: 8 años<hr/>
                                Volumen: 1000cm3<hr/>
                            </Card.Text>
                            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </li>
            </ul>
        </div>
    )
}

export default Cards
