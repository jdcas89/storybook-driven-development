import React from 'react'
import styled from "styled-components";

const NavBarWrapper = styled.div`
  padding:10px;
  border-radius:15px;
  width:90%;
  border: 1px solid black;
`;

export default () => {
  return (
    <NavBarWrapper>
      Navbar
    </NavBarWrapper>
  )
}
