import React from 'react'
import Button from "react-bootstrap/Button"
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    function sumar(){
        if (count < stock)
        setCount(count + 1);
    }

    function restar(){
        if (count>1){
        setCount(count - 1);
        }
    }


    const agregarCarrito= ()=> {
        onAdd(count)
        alert(`usted decidio agregar ${count} productos a su carrito`)
    }

    return (
        <div>
            <Button variant="dark">{`${count} unidades`}</Button><br/><br/>
            <Button variant="dark" onClick={restar}>-</Button>
            <Button variant="dark" onClick={agregarCarrito} className = "m-1">Agregar al carrito</Button>
            <Button variant="dark" onClick={sumar}>+</Button>
        </div>
    )
}

export default ItemCount

