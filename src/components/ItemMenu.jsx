import React from 'react'
import styles from './ItemMenu.module.scss'
import { KeyboardArrowDown,KeyboardArrowRight } from '@mui/icons-material';
function ItemMenu(props) {
    return (
        <div className={styles.menu} style={{ display: 'inline-block',margin:'0 10px' }}>
            <div className={styles.titleMenu}>{props.title} 
            {<KeyboardArrowDown style={{transform: "translateY(7px)"}}/>}
            </div>
            <div className={styles.menuList}>
                <ul>
                    {props.listOption.ListItem.map((value) =>
                        <li key={value} className={styles.child}>{value} 
                        <span className={styles.arrowRight}>{props.listOption[value]&& props.listOption[value].length >0?<KeyboardArrowRight/>:""}</span>
                            {props.listOption[value]&& props.listOption[value].length >0 ?
                            <ul className={styles.listchild}>{
                                props.listOption[value].map((v) =>
                                        <li key={v}>{v}</li>
                                    )
                            }</ul>:<div style={{display:'none'}}></div>
                            }
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ItemMenu