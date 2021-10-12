import React, { useState } from 'react'
import styled from 'styled-components'

const Notification = styled.div`
  display: ${({ removeElement }) => (removeElement ? 'none' : '')};
   padding: 1rem;
   margin-bottom: 1rem;
   border-radius: 5px;
   border: 1px solid ${props => props.bgColor};
   background: ${props => props.bgColor + "a6"};
   backdrop-filter: blur(25px) saturation(200%);
   position: relative;
   transition: all ease-in-out .5s;

   /* animate when true */
   animation: ${({ toggleAnimation }) => toggleAnimation ? 'slideAway .8s ease forwards' : ''};

   @keyframes slideAway {
      0% {
         opacity: 1;
      }
      25% {
         transform: translateX(10px);
         opacity: 1;
      }
      75% {
         transform: translateX(-200%);
         opacity: 0;
      }
      100% {
         opacity: 0;

      }
   }
   :hover{
      background: ${props => props.bgColor};
      transform: scale(1.01);
   }

`
const NotifText = styled.div`
   width: 90%;
   
`
const CloseButton = styled.div`
   position: absolute;
   top: .5em;
   right: 1em;
   cursor: pointer;
   transition: .3s all ease;

   :hover{
      border-radius: 50%;
      background: rgba(0,0,0,0.2);
      color: white;
   }

`
const CloseIcon = styled.i`

   font-size: 1.7rem;
`

const Notifs = ({ text, bgColor }) => {

   // state for notification removal via animation (does not remove from HTML flow)
   const [isClosed, setIsClosed] = useState(false);

   const handleClose = () => {
      setIsClosed(!isClosed)
   }

   // state & function for noticfication removal from HTML flow after time has passed
   const [elementRemoval, setElementRemoval] = useState(false)

   const handleRemoveElement = () => {
      setTimeout(() => {
         setElementRemoval(true)
      }, 600)
   }
   return (
      // when isClosed == true ? toggleAnimation == true
      <Notification toggleAnimation={isClosed} removeElement={elementRemoval} bgColor={bgColor} >
         <NotifText>
            {text}
         </NotifText>
         <CloseButton onClick={() => {
            handleClose();
            handleRemoveElement();
         }}>
            <CloseIcon className='bx bx-x' />
         </CloseButton>
      </Notification>
   )
}

export default Notifs
