import styled from "styled-components";
import { Link } from "react-router-dom";
export const Page = styled.section`
   padding: 1rem;
   display: grid;
   grid-template-columns: 1fr min(120ch, 100%) 1fr;

   >*{
      grid-column: 2;
      }

   >*.full-bleed {
   width:100%;
   grid-column: 1 / 4;
   color: darkgray;
   }


`

export const Container = styled.div`
   margin: ${props => props.margin || '2.5rem 0'};

`

export const CardGrid = styled.div`
   display: grid;
   gap: 1rem;


   @media screen and (min-width: 768px){

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    
   }

`
export const CustomLink = styled(Link)`
   text-decoration: none;
   color: ${props => props.color};

`

export const H1 = styled.h1`
font-size: 1.2rem;
font-weight: 600;
margin-bottom: 1rem;
`

export const LightP = styled.p`
   color: ${({ lightMode }) => lightMode ? 'rgba(255, 255, 255, .65)' : 'rgba(0, 0, 0, .49)'};
`

export const LoadingImageContainer = styled.div`
   height: 100vh;
   width: 100%;
   display: grid;
   place-items: center;

`