import type { NextPage } from 'next'
import Layout from '../components/Layout'
import NewsletterSubscribe from '../components/Newsletter/NewsletterSubscribe'


const Home: NextPage = () => {
  return (
    <Layout>
      <NewsletterSubscribe/>
    </Layout>
  )
}

export default Home
