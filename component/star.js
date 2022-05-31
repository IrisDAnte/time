import React, { useEffect, useState } from 'react'
import styles from '../styles/Star.module.css'

export default function Star({ density }) {
    useEffect(() => {
        const el = document.querySelectorAll(`.${styles.star}`)
        const limit = Math.floor(Math.sqrt(window.screen.height * window.screen.width) * density)
        if (el.length < limit) {
            const target = el[el.length - 1].cloneNode(false)
            target.style.top = `${Math.floor(Math.random() * 100)}vh`
            target.style.left = `${Math.floor(Math.random() * 100)}vw`
            target.style.opacity = Math.random() * (1 - 0.1) + 0.1
            document.querySelector('#starContainer').appendChild(target)
        } else if (el.length > limit && limit > 0) el[Math.floor(Math.random() * el.length)].remove()
    })
    return (
        <>
            <div id='starContainer'>
                <div className={styles.star}></div>
            </div>
        </>
    )
}