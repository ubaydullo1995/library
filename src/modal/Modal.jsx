import React from 'react'
import { ModalBackround, ModalContainer } from '../style/style.Components'


const Modal = (props) => {
  return (
    <ModalBackround>
      <ModalContainer>
          {props.children}
      </ModalContainer>
    </ModalBackround>
   
  )
}

export default Modal
