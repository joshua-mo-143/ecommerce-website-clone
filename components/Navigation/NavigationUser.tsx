import React from 'react'
import styles from './Navigation.module.css';
import {signOut, useSession} from 'next-auth/react'
import NavigationDropdownItem from './NavigationDropdownItem';

type Props = {
    name?: string;
}

const NavigationUser = ({name}: Props) => {
    const {data: session} = useSession();
    const [active, setActive] = React.useState<boolean>(false);

  return (
    <div className={styles.navigationItem} onMouseLeave={() => setActive(false)}>
    <li onMouseEnter={() => setActive(true)}>{session?.user?.email}</li>
    {active ? 
    <ul className={styles.navigationUserDropdown}>
        <li>Profile</li>
        <li onClick={() => signOut()}><NavigationDropdownItem text="Logout"/></li>
    </ul>
:""}
    </div>
  )
}

export default NavigationUser