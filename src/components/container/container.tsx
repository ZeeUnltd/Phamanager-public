import React from 'react'
import classes from './container.module.scss'

type props = {
    type? : 'blue-border' | 'light-border'
    children: JSX.Element
}

const Container: React.FC<props> = (props) => {
  return (
    <div className={props.type === 'blue-border'?
        classes.bordered: classes.unbordered}>
      {props.children}
    </div>
  )
}

export default Container