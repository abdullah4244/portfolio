import React from 'react'
import styles from "./Header.module.scss";
import Link from 'next/link'
import { useRouter } from 'next/router';
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

const HeaderLinks = ({navLink , currentPath}) => (
    <>
    {
          navLink.map((link,key)=>(
            <Link href={link?.path} key={key}>
                <a className={`${styles.link} ${currentPath === link?.path ? styles.active : ""}`}>{link?.title}</a>
            </Link>
        ))
    }
    </>
)
const Header = () => {
    const {asPath} = useRouter();
  return (
    <div className={styles.Header}>
        <div className={styles.Logo}>
            AIC.
        </div>
        <div className={styles.navLinks}>
           <HeaderLinks navLink={navLink} currentPath ={asPath}/>
        </div>
    </div>
  )
}

export default Header