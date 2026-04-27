import styled from 'styled-components'

export const ModalBackround = styled.div`
position: fixed;
top: 0;
right: 0;
background-color: rgba(0, 0, 0, 0.36);
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const ModalContainer = styled.div`
width: 600px;
height: 500px;
padding: 20px;
border-radius: 7px;
border: 1px solid #ffffff1b;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column; 
position: relative;
`