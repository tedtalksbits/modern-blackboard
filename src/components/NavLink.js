import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`

`
const NaviLink = styled(NavLink)`
   text-decoration: none;
   color: black;
   
`
// set on container
const NavBarLink = ({ linkTitle, linkTo, clickFunc }) => {

   return (
      <Container >

         <NaviLink to={linkTo} activeClassName="active" onClick={clickFunc} exact>
            {linkTitle}
         </NaviLink>
      </Container>

   )
}

export default NavBarLink
