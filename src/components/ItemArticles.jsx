import React from 'react';
import styles from './ItemArticles.module.scss';

function ItemArticles(props) {
  return (
    <div className={styles.itemArticles}>
      <img className={styles.imgage} src={props.imageURL} alt="Not found" />
      <div style={{padding:"20px"}}>
        <p className={styles.time}>{props.time}</p>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.content}</p>
        <a className={styles.more} href="/">Read More {`>`}</a>
      </div>
    </div>
  )
}

export default ItemArticles