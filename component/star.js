import React, { useEffect } from 'react'
import styles from '../styles/Star.module.css'

const sleep = ms => new Promise(r => setTimeout(r, ms));
const randomInt = (min, max) => { return Math.floor(Math.random() * (max - min + 1) + min) }

export default function Star({ density, rate }) {
    useEffect(() => {
        const star = async () => {
            const el = document.querySelectorAll(`.${styles.star}`)
            const limit = Math.floor(Math.sqrt(window.screen.height * window.screen.width) * density)
            if (el.length < limit) {
                const target = el[el.length - 1].cloneNode(false)
                target.style.top = `${randomInt(0, 100)}vh`
                target.style.left = `${randomInt(0, 100)}vw`
                target.style.opacity = (Math.random() * (1 - 0.1) + 0.1).toFixed(1)
                document.querySelector('#starContainer').appendChild(target)
                await sleep(100 * randomInt(1, 10))
            } else if (el.length > limit && limit > 0) el[Math.floor(Math.random() * el.length)].remove()
        }
        const fallingStar = async () => {
            const el = document.querySelector(`.${styles.fallingStarContainer}`).childNodes
            const limit = Math.floor(1000 / rate)
            if (el.length < 10 && isFinite(limit)) {
                const target = document.createElement('div')
                target.style.setProperty('--top', `${randomInt(0, 100)}vh`)
                target.style.setProperty('--left', `${randomInt(0, 100)}vw`)
                document.querySelector(`.${styles.fallingStarContainer}`).appendChild(target)
                const animate = async () => {
                    const tempDelay = limit * Math.floor(randomInt(1, 10))
                    const tempDuration = Math.floor(randomInt(10, 30)) * 100
                    target.animate([
                        {
                            transform: 'rotate(-45deg) translateX(0)',
                            opacity: 1
                        },
                        {
                            transform: 'rotate(-45deg) translateX(-1000vw)',
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