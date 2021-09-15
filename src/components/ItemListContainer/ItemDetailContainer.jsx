import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItem } from '../utils/mock'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})


useEffect(() => {
    getItem
    .then(resp => setDetail(resp))

}, [])

    return (
        <div>
                <ItemDetail item={detail}/>
        </div>
    )
}

export default ItemDetailContainer
