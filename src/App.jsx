import './App.css';
import Modal  from './modal/Modal';
import { Button } from 'antd';
import { useState } from 'react';
import Cart from './pages/carts/Carts';
import { IoCloseSharp } from "react-icons/io5";


function App() {

  const [showModal, setShowmodal] = useState(true);
  const [select, setSelect] = useState(null);

  const closeModal = () => {
    setShowmodal(false)
  }

  const openModal = (item) => {
    setSelect(item)
    setShowmodal(true)
  }

  return (
  <div className='App'>
    <Cart openModal={openModal}/>
   
    {showModal && select && (
      <Modal >
        <Button className='btn1' onClick={closeModal}><IoCloseSharp/></Button>
        <div>
          <img src={select.image} alt="" width="200" />
          <h2>{select.title}</h2>
          <p>{select.text}</p>
        </div>
    </Modal> )}
  </div>
  );
}

export default App;
