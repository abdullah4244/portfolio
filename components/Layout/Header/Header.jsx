import React from 'react'
import styles from "./Header.module.scss";
import Link from 'next/link'

const navLink = [
    {
        title : "Home",
        path : "/"

    },
    {
        title : "Projects",
        path : "/projects"
    },
    {
        title : "About",
        path : "/about"
    },
    {
        title : "Contact",
        path : "/contact"
    }
]
const Header = () => {
  return (
    <div className={styles.Header}>
        <div className={styles.Logo}>
            AIC.
        </div>
        <div className={styles.navLinks}>
           {
               navLink.map((link,key)=>(
                   <Link href={link?.path} key={key}>
                       <a className={`${styles.link}`}>{link?.title}</a>
                   </Link>
               ))
           }
        </div>
    </div>
  )
}

export default Header