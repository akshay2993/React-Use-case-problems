import React from 'react'

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || 'modal'} className='modal'>
      <div className='modal-content'>
        <div className='header'>
          {header ? header : <p>Header</p>}
          <span className='toggleBtn' onClick={onClose}>X</span>
        </div>
        <div className=''>{body ? body : <p>Default Custom Body</p>}</div>
        <div className=''>{footer ? footer : <p>Footer</p>}</div>
      </div>
    </div>
  )
}

export default Modal
