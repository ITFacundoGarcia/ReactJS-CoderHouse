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
            <Button variant="dark" onClick={restar}>-</Button>
            <Button variant="dark" className = "m-1">{`${count} ud.`}</Button>
            <Button variant="dark" onClick={sumar}>+</Button><br/>
            <Button variant="dark" onClick={agregarCarrito}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount

