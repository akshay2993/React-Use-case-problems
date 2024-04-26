import { useState } from "react"
import MenuList from "./MenuList"
import { FaPlus, FaMinus } from 'react-icons/fa'

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  const handleMenuToggle = (currentLabel) => {
    setDisplayCurrentChildren((prev) => {
      return {
        [currentLabel]: !displayCurrentChildren[currentLabel]
      }
    })

    console.log(displayCurrentChildren)
  }

  return (
    <li>
      <div className="menu-item">
        <span style={{ marginRight: 'auto' }}>{item.label}</span>
        {item && item.children && item.children.length > 0 ? <span onClick={() => handleMenuToggle(item.label)} className="collapse">{
          displayCurrentChildren[item.label] ? <FaMinus size={18} /> : <FaPlus size={18} />
        }</span> : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
        <MenuList list={item.children} />
        : null}
    </li>
  )
}

export default MenuItem
