import React from 'react'
import Item from './Item'

const Items = ({items}) => {
    let itemList = items.map( item => <Item key={item.id} item={item}/> )
    return (
        <div>{itemList}</div>
    )
}

export default Items