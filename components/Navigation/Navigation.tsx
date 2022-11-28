import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import styles from './Navigation.module.css'
import NavigationItem from './NavigationItem'
import NavigationUser from './NavigationUser'
import type { GetStaticProps} from 'next'
import { userAgent } from 'next/server'

type Props = {

}

const Navigation = (props: Props) => {
  const {data: session, status} = useSession();

  return (
    <div className={styles.navigation}>
              <ul className={styles.navigationMenu}>
        <li>Legal</li>
            <li>Support</li>
            {session ? <NavigationUser/> : <li><Link href="/login">Sign In</Link></li>}
        </ul>
      <div className={styles.navigationMain}>
      <div className={styles.navigationLogo}>
        <Link href="/">Sneaker Shack</Link>
      </div>
        <ul className={styles.navigationProducts}>
            <NavigationItem name="New In"/>
            <NavigationItem name="Brands"/>
            <NavigationItem name="Men's"/>
            <NavigationItem name="Women's"/>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
