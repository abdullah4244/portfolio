import React from 'react'
import Header from "@components/Layout/Header/Header";
import styles from "@components/Layout/Layout.module.scss";
const Layout = ({children}) => {
  return (
    <div className={styles.Layout}>
       <Header/>
       <div className='wrapper'>
       {children}
       </div>
    </div>
  )
}

export default Layout