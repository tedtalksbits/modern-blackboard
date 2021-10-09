import React, { useState } from 'react'
import styled from 'styled-components';
import { InnerBox } from './pageElement';

const Notif = styled.div`

transition: .2s cubic-bezier(0.075, 0.82, 0.165, 1) all;
animation: fadeIn .3s linear forwards;

@keyframes fadeIn {
   0% {
      opacity: 0;
      bottom: 0;
      transform: scale(1);
   }
   39% {
      opacity: 1;
      bottom: -12px;
      transform: scale(1.01);
   }
   100%{
      opacity: 1;
      bottom: 0;
      transform: scale(1);
   }
} 
`

const AnimatedNotfication = () => {
   const [numOfNotifications, setnumOfNotifications] = useState([0]);

   const remove = (arr, item) => {

      // spread arr parameter(which is an array)  into variable 
      // eg. arr = [0,1,2,3] new = [0,1,2,3]
      const newArray = [...arr];

      // remove item where index === index
      newArray.splice(newArray.findIndex(index => index === item), 1);

      return newArray;
   }

   let newIndex = 0;

   const add = (arr) => {
      //add new index to arr
      newIndex++;
      return [...arr, newIndex];
   };





   return (
      <>
         {numOfNotifications.map((id, index) => (

            <Notif key={index}>
               <InnerBox>

                  {index}
                  <button onClick={() => setnumOfNotifications(remove(numOfNotifications, index))}>delete</button>
               </InnerBox>
            </Notif>
         ))}
         <button onClick={() => setnumOfNotifications(add(numOfNotifications))}>add</button>
      </>
   )
}

export default AnimatedNotfication
