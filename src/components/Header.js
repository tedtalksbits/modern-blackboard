import React from 'react'
import styled from 'styled-components'
import { H1, LightP } from './pageElement'
import Searchbar from './Searchbar'

const MainHeader = styled.header`
   display: flex;
   justify-content: space-between;
   background: white;
   padding: 2rem;
   align-items: center;

   .header__right{

      display: flex;
      gap: .5rem;
      align-items: center;
      height: 2rem;
   }

`

const Header = () => {

   return (
      <MainHeader className="header">
         <div className="header__left">
            <LightP>T.Blake</LightP>
            <H1>Fall 2021</H1>
            <a href="#jobs">jobs</a>
         </div>
         <div className="header__right">

            <Searchbar />


         </div>
      </MainHeader>
   )
}

export default Header
