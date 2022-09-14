import React from 'react'
import Skills from './skills/Skills'

function Sections(props: {children: any}) {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Sections