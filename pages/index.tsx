import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import HeroHeader from '../components/HeroHeader/HeroHeader'
import Layout from '../components/Layout'
import NewsletterSubscribe from '../components/Newsletter/NewsletterSubscribe'
import ProductsListHomepage from '../components/ProductsListHomepage/ProductsListHomepage'
import { useSession } from 'next-auth/react'
import { prisma, PrismaClient } from '@prisma/client'

interface Product {
  name: string;
  desc: string;
  price: string;
  imgsrc: string;
}

type Props = {
  productData: object[];
  userData: object;
}

export const Home: NextPage<Props> = ({productData}: Props) => {

  return (
    <Layout>
      <HeroHeader/>
      <ProductsListHomepage products={productData}/>
      <NewsletterSubscribe/>
    </Layout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const {data: session} = useSession();
  let userData;
  if (session) {
    let meme = await fetch('http://localhost:3000/api/user', {body: JSON.stringify({email: session.user.email})});
    userData = meme.json();
  }

  let productRes = await fetch('http://localhost:3000/api/products');
  let productData = await productRes.json();

  return {
    props: {
      productData
    }
  }
}
