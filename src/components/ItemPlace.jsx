import React from 'react'
import styles from './ItemPlace.module.scss'

function ItemPlace(props) {
  return (
    <div className={styles.itemplace}> 
        <img src={props.imageURL} alt="Not found" />
        <p>{props.place}</p>
    </div>
  )
}

export default ItemPlace