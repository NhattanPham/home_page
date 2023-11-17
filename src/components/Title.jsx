import React from 'react'

export default function Title(props) {
  return (
    <div style={{textAlign:"center"}}>
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
    </div>
  )
}
