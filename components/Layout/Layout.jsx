import React from 'react'
import Header from "@components/Layout/Header/Header";
const Layout = ({children}) => {
  return (
    <div>
       <Header/>
       {children}
    </div>
  )
}

export default Layout