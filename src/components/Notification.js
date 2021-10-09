import React, { useState } from 'react'
import { InnerBox } from './pageElement'
import styled from 'styled-components'

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

   return (
      <>

         {
            isRemoved ?

               ''
               :
               <InnerBox innerBg={innerBg} notification={true} id={id} open={isRemoved} >
                  <h1>{title}</h1>
                  <Close onClick={(e) => { setIsRemoved(!isRemoved); }}  >
                     <CloseIcon className='bx bx-x' />
                  </Close>

               </InnerBox>
         }
      </>

   )
}

export default Notification
