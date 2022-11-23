import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/Products.module.css'
type Props = {}

const index = (props: Props) => {
  return (
    <Layout>
        <h1>View Products</h1>
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
                    <span>Category:</span>
                        <select name="gender">
                            <option value="male">Men</option>
                            <option value="female">Women</option>
                        </select>
                </label>

                <button type="submit">Search</button>
            </form>
        </div>
    </Layout>
  )
}

export default index