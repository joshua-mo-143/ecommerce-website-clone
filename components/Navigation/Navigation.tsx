import React from 'react'
import styles from './Navigation.module.css'
import NavigationItem from './NavigationItem'
type Props = {}

const Navigation = (props: Props) => {
  return (
    <div className={styles.navigation}>
              <ul className={styles.navigationMenu}>
        <li>Legal</li>
            <li>Support</li>
            <li>Sign In</li>
        </ul>
      <div className={styles.navigationMain}>
      <div className={styles.navigationLogo}>
        Sneaker Shack
      </div>
        <ul className={styles.navigationProducts}>
            <NavigationItem name="New In"/>
            <NavigationItem name="Brands"/>
            <NavigationItem name="Men's"/>
            <NavigationItem name="Women's"/>
            <NavigationItem name="Kids"/>
        </ul>
      </div>
    </div>
  )
}

export default Navigation