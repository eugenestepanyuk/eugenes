import React, { useState, useEffect } from 'react'
import styles from '../styles/Menu.module.css'

export default function Menu() {
    return (
        <div className={styles['menu-wrap']}>
            <div>
                <input type="checkbox" className={styles.toggler} />
                <div className={styles.hamburger}><div></div></div>
                <div className={styles.menu}>
                    <div>
                        <div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Scills</a></li>
                                <li><a href="#">Projects</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}