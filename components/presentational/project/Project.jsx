import React from 'react'
import styles from "@components/presentational/project/project.module.scss";
import {FiArrowUpRight} from "react-icons/fi"
import Image from 'next/image';
const Project = ({title , description,stack , link,thumbnail}) => {
  return (
    <div className={styles.project}>
        <div className={styles.leftSection}>
            <div style={{display:"flex" , flexDirection:"column"}}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.techStack}>
                <p>TechStack</p>
            </div>
        </div>
        <div>
            <a className={styles.anchor} href={link} target="_blank" rel="noreferrer noopener">live Demo  <FiArrowUpRight/></a>
        </div>
        </div>
        <div className={styles.rightSection}>
            <Image src={thumbnail} layout='fill' alt="profile-photo" objectFit='cover'/>
        </div>
    </div>
  )
}

export default Project