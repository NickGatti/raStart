import React from 'react'
import picUrl from '../img/potion.jpg'

const Item = ({item}) => {
    return (
        <div className="card">
        <h4>{item.name}</h4>
            <div className="card-image">
                <img src={picUrl}/>
            </div>
        
        
        </div>
    )
}

export default Item