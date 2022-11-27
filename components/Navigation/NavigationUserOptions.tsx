import React from 'react'
import styles from './Navigation.module.css';
import {signOut, useSession} from 'next-auth/react'

type Props = {
    name?: string;
}

const NavigationUserOptions = ({name}: Props) => {
    const {data: session} = useSession();
    const [active, setActive] = React.useState<boolean>(false);

  return (
    <div className={styles.navigationItem} onMouseLeave={() => setActive(false)}>
    <li onMouseEnter={() => setActive(true)}>{session?.user?.email}</li>
    {active ? 
    <div className={styles.navigationUserOptionItems}>
        <p onClick={() => signOut()}>Log out</p>
    </div>
:""}
    </div>
  )
}

export default NavigationUserOptions