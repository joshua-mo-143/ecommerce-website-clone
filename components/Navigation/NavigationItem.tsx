import React from 'react'
import styles from './Navigation.module.css';
import NavigationDropdownItem from './NavigationDropdownItem';

type Props = {
    name: string;
}

const NavigationItem = ({name}: Props) => {

    const [active, setActive] = React.useState<boolean>(false);
  return (
    <div className={styles.navigationItem} onMouseLeave={() => setActive(false)}>
    <li onMouseEnter={() => setActive(true)}>{name}</li>
    {active ? 
    <div className={styles.navigationDropdownItem}>
        <NavigationDropdownItem text="Low Tops"/>
        <NavigationDropdownItem text="High Tops"/>
        <NavigationDropdownItem text="Air Jordans"/>
        <NavigationDropdownItem text="Dunks"/>
        <NavigationDropdownItem text="Collaborations"/>
    </div>
:""}
    </div>
  )
}

export default NavigationItem