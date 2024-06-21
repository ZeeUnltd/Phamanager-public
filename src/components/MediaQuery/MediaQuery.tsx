import React from 'react'
import classes from './media.module.scss'

interface props {
  children: JSX.Element
}

const MediaQuery: React.FC<props> = (props) => {
  return (

    <div className={classes.pageContainer}>
      {props.children}
    </div>
  )
}

export default MediaQuery
