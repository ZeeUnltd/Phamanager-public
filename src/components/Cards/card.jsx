import React from 'react'

import classes from './card.module.scss'

import { Icon } from '@iconify/react'

const card = ({head, number, desc, icon}) => {
  return (
    <div className={classes.cards}>
        <Icon icon={icon} className={classes.memory_icon}/>
        <p className={classes.head}>{head}</p>
        <p className={classes.number}>{number}</p>
        <p className={classes.desc}>{desc}</p>
    </div>
  )
}

export default card