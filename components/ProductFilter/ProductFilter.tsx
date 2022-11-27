import React from 'react'
import styles from '../../styles/Products.module.css'

type Props = {}

const ProductFilter = (props: Props) => {
  return (
    <div className={styles.productPageFilterContainer}>
            <form className={styles.productPageFilterForm}>
                <label>
                    <span>Gender:</span>
                        <select name="gender">
                            <option value="male">Men</option>
                            <option value="female">Women</option>
                        </select>
                </label>
                <label>
                    <span>Category:</span>
                        <select name="gender">
                            <option value="male">Men</option>
                            <option value="female">Women</option>
                        </select>
                </label>
                <label>
                    <span>Brands:</span>
                        <select name="brand">
                            <option value="adidas">Adidas</option>
                            <option value="nike">Nike</option>
                        </select>
                </label>

                <button type="submit">Search</button>
            </form>
        </div>
  )
}

export default ProductFilter