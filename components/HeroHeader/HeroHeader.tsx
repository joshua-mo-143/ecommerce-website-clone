import React from 'react'
import styles from './Hero.module.css'
import heroImg from '../../public/aj4-military-black.webp'
import Image from 'next/image'
type Props = {}

const HeroHeader = (props: Props) => {
  return (
    <div className={styles.heroContainer}>
        
        <div className={styles.heroText}>
            <h1>Cop the latest drops here.</h1>
            <button>View New Arrivals</button>
        </div>
        <div className={styles.heroImgContainer}>
            <Image src={heroImg} height={300} alt="Hero image of shoes"/>
        </div>
    </div>
  )
}

export default HeroHeader