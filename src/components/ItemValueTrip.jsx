import React from 'react';
import styles from './ItemValueTrip.module.scss'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function ItemValueTrip(props) {
    const checkStar = (num) => {
        if (num < props.numStar) {
            return (
                <li><StarIcon
                    fontSize='small'
                /></li>
            )
        } else
            return <li><StarBorderIcon
                fontSize='small'
            /></li>

    }
    return (
        <div className={styles.itemValueTrip}>
            <img src={props.imageURL} alt="Not found" />
            <div className={styles.prices}>
                {props.beforePrice ? <p className={styles.beforePrice}>${props.beforePrice} </p> : <></>}
                {props.beforePrice?<div>&nbsp;</div>:<></>}
                <p>${props.price}</p>
            </div>
            <div style={{padding:'0 10px 10px 10px'}}>
                <h2>{props.place}</h2>
                <p>{props.city}</p>
                <div className={styles.ratting_day}>
                    <div className={styles.ratting}>
                        <ul>
                            {Array.from(Array(5), (e, i) => {
                                return checkStar(i)
                            })}

                        </ul>
                        <div style={{ display: "inline" }}>{props.numStar} reivews</div>
                    </div>
                    <div className={styles.day}><AccessTimeIcon
                        fontSize='small'
                    /> {props.dayBefore} days</div>
                </div>
            </div>
            {props.isSale ? <div className={styles.sales}>Sale</div> : <div></div>}
        </div>
    )
}

export default ItemValueTrip