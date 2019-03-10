import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        color: white;
        margin-left: 15px;
        font-size: 1.7rem;
        font-weight: 800;
    }
    a{
        
        margin-right: 15px;
        padding: 10px 25px;
        border-radius: 35px;
        font-size: 1rem;
        font-weight: 100;
        text-decoration: none;
        background-color: black;
        color: white;
    }
`;

export default function Navigation() {
  return (
    <NavContainer>
      <h1>Explorer</h1>
      <a href="https://kieranvieira.com">Newsletter</a>
    </NavContainer>
  )
}
