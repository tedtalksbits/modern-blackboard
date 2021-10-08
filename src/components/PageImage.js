import React from 'react'
import styled from 'styled-components'
const Container = styled.section`
   width: 100%;
   height: 500px;
`
const Image = styled.img`

   width: 100%;
   height: 100%;
   object-fit: contain;

`


const PageImage = ({ pageImage }) => {
   return (
      <Container>
         <Image src={pageImage} />

      </Container>
   )
}

export default PageImage
