import MenuItem from "./MenuItem"

const MenuList = ({list=[]}) => {
  return (
    <ul className="menu-list-container">
      {list && list.length ? 
        list.map((listItem) => {
            return <MenuItem key={listItem.label} item={listItem} />
        })
        : null}
    </ul>
  )
}

export default MenuList
