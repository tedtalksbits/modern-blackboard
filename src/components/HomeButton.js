import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { InnerBox } from './pageElement'

const A = styled(Link)`
   width: max-content;
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

         <InnerBox innerBg={innerBg} notification={false} >
            <Icon >
               {icon}
            </Icon>
         </InnerBox>
      </A>

   )
}

export default HomeButton
