import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { H1, LightP } from './pageElement'
import Searchbar from './Searchbar'

const height = '3rem';

const MainHeader = styled.header`
   display: flex;
   justify-content: space-between;
   background: white;
   padding: 2rem;
   align-items: center;
   /* margin-top: 4rem; */

   .header__right{

      display: flex;
      gap: .5rem;
      align-items: center;
      height: 2rem;
   }

`
const NavBarContainer = styled.nav`
   position: relative;
   margin-bottom: ${height};
`
const NavBar = styled.div`
   top: 0;
   right: 0;
   padding: 0 2rem;
   background: rgba(255,255,255, 0.72);
   backdrop-filter: blur(25px) saturate(4.2);
   position: fixed;
   width: 100%;
   height: ${height};
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 4rem;
   z-index: 2001;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
   transition: all ease .4s;

   :hover{
      background: rgba(255,255,255, 0.90)
   }

   &>a{
      text-decoration: none;
      color: black;
      transition: all ease .4s;

      :hover{
         &::before{
            content:'';
            position: absolute;
            /* width: 30px; */
            height: 2px;
            background: red;
            bottom: 5px;
            animation: linkAnimate .4s linear forwards;

            @keyframes linkAnimate {
               0% {
                  opacity: 0;
                  transform: translateY(100%);
                  width: 0px;
               }
               80%{
                  width: 50px;
               }
               100% {
                  opacity: 1;
                  transform: translateY(-100%);
                  width: 50px;
               }
            }
         }
      }
   }
`

const Header = () => {

   return (
      <>
         <NavBarContainer >
            <NavBar >
               <a href="#jobs">jobs</a>
               <Link to='/'>Home Page</Link>
               <Link to='/admin'>Admin Page</Link>
            </NavBar>
         </NavBarContainer>
         <MainHeader className="header">
            <div className="header__left">
               <H1>Fall 2021</H1>
               <LightP>T.Blake</LightP>

            </div>
            <div className="header__right">

               <Searchbar />


            </div>
         </MainHeader>
      </>

   )
}

export default Header
