import MenuList from "./MenuList"
import './style.css'

const TreeView = ({menu=[]}) => {
return <div className="tree-menu-container">
    <MenuList list={menu} />
</div>
}

export default TreeView