import React from 'react'
import styled from 'styled-components'

const EMail = styled.span`
   display: ${({ showIcon }) => (showIcon ? 'none' : 'inline-block')};
`

const EMailTag = styled.a`
   text-decoration: none;
   color: white;
   font-size: 1.5rem;
   margin-left: .5rem;
  
`
const EmailButton = ({ prof_email, showIcon }) => {
   return (

      <EMail showIcon={showIcon}>
         <EMailTag href={`mailto:${prof_email}`} rel="nopreferrer">
            <i className='bx bx-mail-send'></i>
         </EMailTag>
      </EMail>

   )
}

export default EmailButton
