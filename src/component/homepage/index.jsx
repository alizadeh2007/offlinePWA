import React from 'react'
import { Icon } from '@iconify/react';
import iconss from "./../../New folder/circles.svg"
import iconss2 from "./../../New folder/three-dots.svg"

function Home() {
  return (
    <div>Home
    <Icon icon="material-symbols:1k-plus-sharp" />
    <Icon icon="material-symbols:18mp-outline-sharp" />
    <Icon icon="grommet-icons:apple" />
    <img src={iconss}/>
    <img src={iconss2}/>
    </div>
  )
}

export default Home