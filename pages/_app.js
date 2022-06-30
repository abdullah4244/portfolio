import {useState , useEffect} from 'react';
import '../styles/globals.css'
import Layout from '@components/Layout/Layout';
import Head from 'next/head';
import PreLoader from '@components/presentational/preLoader/PreLoader';
function MyApp({ Component, pageProps }) {
  const [preLoading,setPreLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => setPreLoading(false), 7000);
  },[])
  return (
    <>
    <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap" rel="stylesheet"/>
      </Head>
    {!preLoading ?
  <Layout>
  <Component {...pageProps} />
  </Layout>
  : <PreLoader/>
   }
  </>)
}

export default MyApp
