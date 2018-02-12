import React from 'react'

const Items = (props) => {
  return (
      <div className="container">
        Items {props.name.map(item => <div className="card"> {item} </div>)}
      </div>
    )
}

export default Items
