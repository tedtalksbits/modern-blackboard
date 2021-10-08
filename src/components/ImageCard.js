import React from 'react'
import styled from 'styled-components'
import EmailButton from './EmailButton'
import { LightP } from './pageElement'

const MainImageCard = styled.div`
   border-radius: 2rem;
   background: ${props => `linear-gradient(145deg, ${props.gLight} 0%, ${props.gDark} 100%)`};
   width: 100%;
   height: 100%;
   box-shadow: ${props => `0px 25px 50px -12px ${props.alpha}`};


`
const NameEmail = styled.div`
   display: flex;
   align-items: center;
`
const ImageCardContent = styled.div`

   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 2rem;
   gap: 2rem;
   color: white;

   @media screen and (min-width : 400px){
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      
   }

`
const HeaderText = styled.h1`
   /* font-size: clamp(1rem, 10vw, 4rem); */
   font-size: ${({ isImage }) => (isImage ? 'clamp(1rem, 10vw, 4rem)' : '1.4rem')};
   font-weight: 400;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   width: 100%;

   @media screen and (min-width : 400px){
      width: 100%;
      white-space: normal;

   }
   
`
const LeftContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   width: 100%;

   @media screen and (min-width: 400px){
      max-width: 70%;
   }
`
const RightContent = styled.div`
   height: ${({ isImage }) => (isImage ? '18rem' : '100%')};

`
const Content = styled.div`
   display: ${({ isImage }) => (isImage ? 'none' : 'grid')};
   min-width: 8rem;
   padding: 2rem;
   background: linear-gradient(
307deg,#030100,#48433d);
   border-radius: 2rem;
   min-height: 8rem;
   place-items: center;
   outline: 1px #ffffff solid;

   h1 {
      a{
         text-decoration: none;
         color: white;
         font-size: clamp(.5rem, 8vw, 1rem);
         font-weight: 300;
      }
   }
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;
   display: ${({ isImage }) => (isImage ? 'inline-block' : 'none')};
`

const ImageCard = ({ img, cardheader, cardsubheader, isImage, alpha, gDark, gLight, cLink, rating, prof_email }) => {

   let output = "";
   const stars = (count) => {
      for (let i = 0; i < count; i++) {

         output += "⭐️";

      }
      return output;
   }
   return (
      <MainImageCard className="image-card" gDark={gDark} gLight={gLight} alpha={alpha}>
         <ImageCardContent className="image-card__content">
            <LeftContent className="image-card__left_text">
               <HeaderText isImage={isImage}>{cardheader}</HeaderText>

               <div className="rating">
                  <NameEmail className="prof_name_email">

                     <LightP lightMode={true} >
                        {cardsubheader}
                     </LightP>
                     <EmailButton prof_email={prof_email} showIcon={isImage} />
                  </NameEmail>
                  <p>{stars(rating)}</p>
               </div>


            </LeftContent>
            <RightContent className="image-card__right_img" isImage={isImage}>

               <Image src={img} alt="" srcset="" isImage={isImage} />
               <Content
                  className="content"
                  isImage={isImage}
               >
                  <h1><a href={cLink} target="_blank">blackboard</a></h1>
               </Content>


            </RightContent>
         </ImageCardContent>

      </MainImageCard>
   )
}

export default ImageCard
