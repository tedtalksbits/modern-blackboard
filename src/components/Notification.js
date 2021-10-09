import React, { useState } from 'react'
import styled from 'styled-components'

export const NotifCard = styled.div`
   display: ${props => props.remDiv ? 'none' : ''};
   padding: 1rem;
   margin-bottom: 1.1rem;
   background: ${props => props.innerBg + "a6"};
   border-radius: 1rem;
   /* display: block; */
   border: 1px solid ${props => props.innerBg};
   transition: all ease-in-out .2s;
   animation: ${({ remove }) => remove ? '' : 'slideAway .8s ease  forwards'} ;
   position: relative;


   

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
   background: ${props => props.innerBg};
   transform: scale(1.01);
   
}

`

const Close = styled.div`
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



const Notification = ({ innerBg, id, title }) => {
   const [isRemoved, setIsRemoved] = useState(false)
   const [removeDiv, setRemoveDiv] = useState(false)

   const handleRemoveNotif = () => {
      setIsRemoved(!isRemoved)

      console.log(isRemoved);

      setTimeout(() => {
         setRemoveDiv(true)

      }, 600)
   }

   return (

      <>
         {isRemoved ?
            //remove it


            <NotifCard innerBg={innerBg} id={id} remDiv={removeDiv}>
               <h1>{title}</h1>
               <Close onClick={handleRemoveNotif}  >
                  <CloseIcon className='bx bx-x' />
               </Close>

            </NotifCard>


            :
            <NotifCard innerBg={innerBg} id={id} remove={handleRemoveNotif} >
               <h1>{title}</h1>
               <Close onClick={handleRemoveNotif}  >
                  <CloseIcon className='bx bx-x' />
               </Close>

            </NotifCard>
            //show it
         }
      </>

   )
}

export default Notification
