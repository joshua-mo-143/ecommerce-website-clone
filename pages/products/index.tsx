import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/Products.module.css'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react'
import { userAgent } from 'next/server'

type Props = {
    products: object[]
}

const index: NextPage<Props> = ({products}: Props) => {
  console.log(products);
  return (
    <Layout>
        <h1>View Products</h1>
        
        
        <div className={styles.productsList}>
            {products.map((product: any) => (
                <div className={styles.productContainer}>
                <Image src={`/${product.imgsrc}`} width={250} height={150} alt={`Product image for ${product.name}`} />
                <div className={styles.productText}>
                <p>{product.name}</p>
                <div className={styles.productData}>
                <p>£{product.price}</p>
                <div className={styles.productOptions}>
                <button><FontAwesomeIcon icon={faHeart}/> </button>
                <button><FontAwesomeIcon icon={faCartPlus}/> </button>
                </div>
                </div>
            </div>
                </div>
            ))}
        </div>
    </Layout>
  )
}

export default index

export const getStaticProps: GetStaticProps = async () => {
    let productRes = await fetch('http://localhost:3000/api/products');
    let products = await productRes.json();
    return {
      props: {
        products
      }
    }
  }