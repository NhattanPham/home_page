import React from 'react'

export default function Title(props) {
  return (
    <div style={{textAlign:"center"}}>
        <h1>{props.title}</h1>
        <h4>{props.description}</h4>
    </div>
  )
}
