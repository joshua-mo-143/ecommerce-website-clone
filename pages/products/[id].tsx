import React from 'react'
import type { GetStaticProps, NextPage } from 'next'

type Props = {}

const Product = (props: Props) => {
  return (
    <div>Product</div>
  )
}

export default Product

export const getStaticProps: GetStaticProps = async () => {
  let res = await fetch('http://localhost:3000/api/products');
  let products = await res.json();

  return {
    props: {
      products
    }
  }
}