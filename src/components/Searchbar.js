import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   padding: 9px .875rem;
   border: 1px black solid;
   border-radius: 5px;
   gap: 7px;
   margin: 0 1rem;
   align-items: center;
   transition: all .5s ease;
   color: black;

   &:hover, &:active{
      background: #212121;
      color: white;

      > input.search_input{
         color: white;
      }
   }

   & > input.search_input{
      background: transparent;
      border: none;
      outline: none;
      outline-width: 0;
      font-size: 1.2rem;
      color: black;

      ::placeholder{
         color: rgba(255,255,255, 0.3);
      }
   }


`
const Searchbar = () => {
   return (
      <Container>
         <i className="bx bx-search-alt"></i>
         <input
            type="search"
            name="search"
            className="search_input"
            placeholder="search"
         />
      </Container>
   )
}

export default Searchbar
