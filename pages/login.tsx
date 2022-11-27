import React from 'react'
import {signIn, getCsrfToken, getProviders, getSession} from 'next-auth/react'
import {GetServerSideProps} from 'next'
import Layout from '../components/Layout';

type Providers = {
    providers: Object[];
    name: string;
    id: Number;
}

const login = ({providers}: Providers) => {
  return (
    <Layout>
        <p>Sign In</p>
        {Object.values(providers).map((provider: any) => {
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, {callbackUrl: "http://localhost:3000/api/auth/callback/google"})} className="bg-stone-300 py-2 px-5 rounded-xl font-bold">
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </Layout>
  )
}

export default login

export const getServerSideProps: GetServerSideProps = async (context) => {

    const { req } = context;
    const session = await getSession({req});

    if (session) {
        return {
          redirect: { destination: "/", permanent: true },
        };
      }
    
    return {
      props: {
        // @ts-ignore
        providers: await getProviders(context),
        csrfToken: await getCsrfToken(context),
      },
    };
  }