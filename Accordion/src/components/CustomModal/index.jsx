import { useState } from 'react'
import Modal from './Modal'
import './style.css'

const ModalParent = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModalToggle = () => {
        setShowModal(!showModal)
    }

  return (
    <div>
      <button onClick={handleModalToggle}>Toggle Modal</button>
      {showModal && <Modal onClose={handleModalToggle} body={<p>This is prop-rendered body</p>}/>}
    </div>
  )
}

export default ModalParent
