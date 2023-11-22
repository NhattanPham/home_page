import React from 'react'
import styles from './SelectCustom.module.scss'
function SelectCustom(props) {
  return (
    <div className={styles.selectCustom} >
    <select 
        // defaultValue={""}
    name="" id="">
        {props.list.map((value)=>
            <option key={value.value} value={value.value}>{value.label}</option>
        )}
    </select>
    <div className={styles.icon}
    >{props.icon}</div>
    </div>
  )
}

export default SelectCustom