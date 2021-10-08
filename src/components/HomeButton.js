import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const A = styled(Link)`
   width: max-content;
`
const InnerBox = styled.div`
   width: 4rem;
   height: 4rem;
   background: ${props => props.innerBg + "a6"};
   border-radius: 1rem;
   display: grid;
   place-items: center;
   border: 1px solid ${props => props.innerBg};
   transition: all ease-in-out .2s;
   :hover{
      background: ${props => props.innerBg};
      width: 4.5rem;
      height: 4.5rem;
   }

`
const Icon = styled.div`
   i {

     
      color: white;
      font-size: 2.5rem;
   }
`
const HomeButton = ({ icon, innerBg }) => {
   return (

      <A to="/">

         <InnerBox innerBg={innerBg} >
            <Icon >
               {icon}
            </Icon>
         </InnerBox>
      </A>

   )
}

export default HomeButton
