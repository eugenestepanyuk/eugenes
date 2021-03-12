import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Loader() {
    const [activeFirst, setActiveFirst] = useState(null)
    const [activeSecond, setActiveSecond] = useState(null)
    const stylesFirst = [styles.gradient, styles.first, activeFirst]
    const stylesSecond = [styles.gradient, styles.second, activeSecond]
    
    useEffect(() => {
        setActiveFirst(styles.active)
        setTimeout(() => {
            setActiveFirst(null)
            setActiveSecond(styles.active)
        }, 2000)
    }, [])
    
    return (
        <div className={styles.loader}>
            <div className={stylesFirst.join(' ')}>EUGENE STEPANYUK</div>
            <div className={stylesSecond.join(' ')}>WEB DEVELOPER</div>
        </div>
    )
}