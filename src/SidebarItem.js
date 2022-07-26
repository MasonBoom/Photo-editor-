import React from 'react'
import { SidebarItem } from './styles/SidebarItem.styles'

function SidebarItems({ name, active, handleClick }) {
  return (
    <SidebarItem
      className={active ? 'active' : ''}
      onClick={handleClick}
    >
      {name}
    </SidebarItem>
  )
}

export default SidebarItems;