import { GetStaticProps } from 'next'
import React from 'react'
import { PrismaClient } from '@prisma/client'
import styles from './ProductsListHomepage.module.css'
import Image from 'next/image'
import ProductItem from './ProductItem'

type Product = {
  name: string;
  desc: string;
  price: string;

}
type Props = {
  products: any;
}

const ProductsListHomepage = ({products}: Props) => {

  return (
    <>
    <div className={styles.productsListContainer}>
        <h2>Check out our products</h2>
        <div className={styles.productsList}>
        {products.map((product: any) => (
          <ProductItem name={product.name} price={product.price} imgsrc={product.imgsrc} desc={product.desc}/>
        ))}
        </div>
    </div>
    </>
  )
}

export default ProductsListHomepage