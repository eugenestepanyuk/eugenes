import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Main() {
    const [activeFirst, setActiveFirst] = useState(null)
    const [activeSecond, setActiveSecond] = useState(null)

    useEffect(() => {
        setActiveFirst(activeFirst = styles.active)
        setTimeout(() => {
            setActiveFirst(activeFirst = null)
            setActiveSecond(activeSecond = styles.active)
        }, 2000)
    })

    return (
        <div className={styles.main}>
            <div className={`${styles.gradient} ${styles.first} ${activeFirst}`}>EUGENE STEPANYUK</div>
            <div className={`${styles.gradient} ${styles.second} ${activeSecond}`}>WEB DEVELOPER</div>
        </div>
    )
}