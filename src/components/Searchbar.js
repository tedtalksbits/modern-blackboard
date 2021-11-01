import React, { useState } from 'react'
import styled from 'styled-components'
import { Wrapper } from './pageElement'

const Container = styled.form`
   display: flex;
   padding: 9px .875rem;
   border: 1px black solid;
   border-radius: 5px;
   gap: 7px;
   align-items: center;
   transition: all .5s ease;
   color: black;
   position: relative;
   width: 100%;

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
      width: 100%;

      ::placeholder{
         color: rgba(255,255,255, 0.3);
      }
   }


`
const Searchbar = () => {
   const change = (e) => {
      console.log(e.target.value);
   }

   const [showText, setShowText] = useState(false);
   const focus = (e) => {
      console.log("focused")
      setShowText(!showText);
      setTimeout(() => {
         setShowText(false)
      }, 3000)
   }

   const [inputVal, setInputVal] = useState("");


   return (
      <Wrapper>
         <Container onSubmit={(e) => {
            e.preventDefault();
            console.table(inputVal, "<- value submitted");
            setInputVal('')
         }}>

            <i className="bx bx-search-alt"></i>
            <input
               type="search"
               name="search"
               className="search_input"
               placeholder="search"
               onChange={(e) => setInputVal(e.target.value)}
               onFocus={focus}
               value={inputVal}



            />
            {showText ? <p style={{ position: 'absolute', bottom: '-20px', left: 0 }}>press enter to submit</p> : null}
         </Container>
      </Wrapper>


   )
}

export default Searchbar
