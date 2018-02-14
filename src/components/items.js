import React from 'react'
import Item from './Item'

const Items = ({items}) => {
    let itemList = items.map( item => <div key={item.id} className="col s3"><Item item={item}/></div> )
    return (
        <div className="container">
            <div className="row">
                {itemList}
            </div>
        </div>
    )
}

export default Items