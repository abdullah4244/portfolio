import React from 'react'
import styles from "../../styles/pages/Projects.module.scss";
import Project from '@components/presentational/project/Project';
import db from "./projects.json";
const index = () => {
  return (
    <div className={styles.Projects}>
      {db?.map((project,key)=>(
        <Project key={key} thumbnail={project.thumbnail} link={project.link} description={project.description} title={project.title}/>
      ))
       }
    </div>
  )
}

export default index