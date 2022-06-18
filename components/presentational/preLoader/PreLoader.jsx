import React from 'react'
import styles from './preLoader.module.scss'
const PreLoader = () => {
  return (
    <div className={styles.preLoader}>

<h1 className={styles.title}>
    <span>Hi, nice</span>
    <span>to see you here</span>
    <span>👋</span>
  </h1>
  
  <h2 className={styles.title}>
    <span>We are <span style={{color: "#1e90ff"}}>TechVio</span></span>
    <span>Welcome to Our Portfolio</span>
    <span>👌</span>
    
    
  </h2>
</div>
  )
}

export default PreLoader