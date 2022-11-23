import { Decimal } from '@prisma/client/runtime'
import type { GetStaticProps, NextPage } from 'next'
import HeroHeader from '../components/HeroHeader/HeroHeader'
import Layout from '../components/Layout'
import NewsletterSubscribe from '../components/Newsletter/NewsletterSubscribe'
import ProductsListHomepage from '../components/ProductsListHomepage/ProductsListHomepage'
import {PrismaClient} from '@prisma/client';

interface Product {
  id: string;
  name: string;
  desc: string;
  price: Decimal;
  imgsrc: string;
  dateCreated: Date;
}

type Props = {
  products: object[];
}

export const getStaticProps: GetStaticProps = async () => {
  let res = await fetch('http://localhost:3000/api/products');
  let products = await res.json();

  return {
    props: {
      products
    }
  }
}

export const Home: NextPage<Props> = ({products}: Props) => {

  console.log(products);
  return (
    <Layout>
      <HeroHeader/>
      <ProductsListHomepage products={products}/>
      <NewsletterSubscribe/>
    </Layout>
  )
}

export default Home
