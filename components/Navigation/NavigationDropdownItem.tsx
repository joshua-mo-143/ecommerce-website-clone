import React from 'react'
import styles from './Navigation.module.css';

type Props = {
  text: string;
}

const NavigationDropdownItem = ({text}: Props) => {
  return (
    <div className={styles.navigationDropdownItemText}>
        {text}
    </div>
  )
}

export default NavigationDropdownItem