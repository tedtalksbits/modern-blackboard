import React, { useState } from 'react'
import styled from 'styled-components'
import NavBarLink from './NavLink'
import NavLink from './NavLink'
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
   box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 1px 0px;
   transition: all ease .4s;

   :hover{
      background: rgba(255,255,255, 0.90)
   }

  
`


const Header = () => {

   const [showJobLink, setShowJobLink] = useState(true);



   return (
      <>
         <NavBarContainer >
            <NavBar >
               {showJobLink ? <a href="#jobs">Jobs</a> : ''}
               <NavBarLink linkTo="/" linkTitle="Home" clickFunc={() => setShowJobLink(true)} />
               <NavBarLink linkTo="/admin" linkTitle="Admin" clickFunc={() => setShowJobLink(false)} />

            </NavBar>
         </NavBarContainer>

         {showJobLink ?


            <MainHeader className="header">
               <div className="header__left">
                  <H1>Fall 2021</H1>
                  <LightP>T.Blake</LightP>

               </div>
               <div className="header__right">

                  <Searchbar />


               </div>
            </MainHeader>
            :


            ''
         }
      </>

   )
}

export default Header
