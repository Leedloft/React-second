import React from 'react'
import styles from './style.module.css'
const Content = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.first_p}>
                {props.id}
            </p>
            <p className={styles.second_p}>
                {props.titleName}
            </p>
            <p className={styles.third_p}>
                {props.body}
            </p>
        </div>
    )
}

export default Content
