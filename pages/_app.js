import {useState , useEffect} from 'react';
import '../styles/globals.css'
import 'antd/dist/antd.css';
import Layout from '@components/Layout/Layout';
import PreLoader from '@components/presentational/preLoader/PreLoader';
function MyApp({ Component, pageProps }) {
  const [preLoading,setPreLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => setPreLoading(false), 7000);
  },[])
  return (
    <>
    {!preLoading ?
  <Layout>
  <Component {...pageProps} />
  </Layout>
  : <PreLoader/>
   }
  </>)
}

export default MyApp
