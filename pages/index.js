import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

const sky = {
    1: {
        from: '272C38',
        to: '1D2036',
        pos: '140vh'
    },
    2: {
        from: '463D3A',
        to: '21273F',
        pos: '130vh'
    },
    3: {
        from: '6F5033',
        to: '292D3C',
        pos: '125vh'
    },
    4: {
        from: '8F6337',
        to: '373452',
        pos: '110vh'
    },
    5: {
        from: 'B48248',
        to: '603E5A',
        pos: '100vh'
    },
    6: {
        from: 'CCA24F',
        to: '4C525A',
        pos: '90vh'
    },
    7: {
        from: 'B39B79',
        to: '295171',
        pos: '85vh'
    },
    8: {
        from: 'B3ACAE',
        to: '2F5485',
        pos: '80vh'
    },
    9: {
        from: 'BAC2CC',
        to: '315F97',
        pos: '75vh'
    },
    10: {
        from: 'BCCFE3',
        to: '277CB4',
        pos: '70vh'
    },
    11: {
        from: 'CDE1F1',
        to: '459BD0',
        pos: '65vh'
    },
    12: {
        from: 'D7E8F6',
        to: '4CA5D9',
        pos: '50vh'
    },
    13: {
        from: 'D8EAF7',
        to: '52A8D9',
        pos: '50vh'
    },
    14: {
        from: 'CEE0F1',
        to: '4B9BCE',
        pos: '55vh'
    },
    15: {
        from: 'BDD0E4',
        to: '2F7EB5',
        pos: '60vh'
    },
    16: {
        from: 'C2CAD3',
        to: '356498',
        pos: '65vh'
    },
    17: {
        from: 'C4BEBD',
        to: '335987',
        pos: '70vh'
    },
    18: {
        from: 'B8A07E',
        to: '2A5272',
        pos: '75vh'
    },
    19: {
        from: 'CBA151',
        to: '52555A',
        pos: '90vh'
    },
    20: {
        from: 'C29A62',
        to: '63415D',
        pos: '100vh'
    },
    21: {
        from: '976B3C',
        to: '3A3453',
        pos: '110vh'
    },
    22: {
        from: '715232',
        to: '2A2E40',
        pos: '120vh'
    },
    23: {
        from: '483F38',
        to: '21273F',
        pos: '130vh'
    },
    0: {
        from: '292E39',
        to: '1D2036',
        pos: '140vh'
    },
}

export default function Home() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const id = setInterval(() => setTime(new Date()), 1000)
        document.querySelector(`.${styles.sky}`).style.backgroundImage = `linear-gradient(180deg, #${sky[time.getHours()].to}, #${sky[time.getHours()].from})`
        document.querySelector(`.${styles.axis}`).style.top = sky[time.getHours()].pos
        return () => {
            clearInterval(id)
        }
    })
    return (
        <>
            <Head>
                <title>Time | IrisDAnte</title>
                <link rel='icon' type='image/x-icon' href='/favicon.ico' />
                <meta charSet='UTF-8' />
                <meta name='description' content='A simple website that shows time in dynamic way' />
                <meta name='keywords' content='Time, time, code' />
                <meta name='author' content='Iris Dante' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta property="og:url" content="https://time-ruddy.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Time | IrisDAnte" />
                <meta property="og:description" content="A simple website to display time in a dynamic way" />
                <meta property="og:image" content="https://time-ruddy.vercel.app/image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="time-ruddy.vercel.app" />
                <meta property="twitter:url" content="https://time-ruddy.vercel.app/" />
                <meta name="twitter:title" content="Time | IrisDAnte" />
                <meta name="twitter:description" content="A simple website to display time in a dynamic way" />
                <meta name="twitter:image" content="https://time-ruddy.vercel.app/image.png" />
            </Head>
            <body>
                <div className={styles.timeContainer}>
                    <p className={styles.clock}>{(typeof time == 'object') ? time.toLocaleTimeString('en-US') : time}</p>
                    <p className={styles.date}>{(typeof time == 'object') ? time.toDateString() : time}</p>
                </div>
                <div className={styles.sky}>
                    <div className={styles.axis}></div>
                </div>
            </body>
        </>
    )
}