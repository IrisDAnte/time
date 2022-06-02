import React, { useEffect } from 'react'
import styles from '../styles/Star.module.css'

const sleep = ms => new Promise(r => setTimeout(r, ms));

export default function Star({ density, rate }) {
    useEffect(() => {
        const star = async () => {
            const el = document.querySelectorAll(`.${styles.star}`)
            const limit = Math.floor(Math.sqrt(window.screen.height * window.screen.width) * density)
            if (el.length < limit) {
                const target = el[el.length - 1].cloneNode(false)
                target.style.top = `${Math.floor(Math.random() * 100)}vh`
                target.style.left = `${Math.floor(Math.random() * 100)}vw`
                target.style.opacity = Math.random() * (1 - 0.1) + 0.1
                document.querySelector('#starContainer').appendChild(target)
                await sleep(100 * Math.floor(Math.random() * 10))
            } else if (el.length > limit && limit > 0) el[Math.floor(Math.random() * el.length)].remove()
        }
        const fallingStar = async () => {
            const el = document.querySelector(`.${styles.fallingStarContainer}`).childNodes
            const limit = Math.floor(1000 / rate)
            if (el.length < 10 && isFinite(limit)) {
                const target = document.createElement('div')
                target.style.setProperty('--origin', `${Math.floor(Math.random() * 100)}vmax`)
                document.querySelector(`.${styles.fallingStarContainer}`).appendChild(target)
                const animate = async () => {
                    const tempDelay = limit * Math.floor(Math.random() * (10 - 1) + 1)
                    const tempDuration = Math.floor(Math.random() * (30 - 10) + 10) * 100
                    target.animate([
                        {
                            transform: 'rotate(-45deg) translateX(0)',
                            opacity: 1
                        },
                        {
                            transform: 'rotate(-45deg) translateX(-1000vmax)',
                            opacity: 0
                        }
                    ], {
                        duration: tempDuration,
                        delay: tempDelay
                    })
                    await sleep(tempDelay + tempDuration)
                }
                await animate()
                target.remove()
            }
        }
        star()
        fallingStar()
    })
    return (
        <>
            <div id='starContainer'>
                <div className={styles.star}></div>
            </div>
            <div className={styles.fallingStarContainer}></div>
        </>
    )
}