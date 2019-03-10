import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.div`
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        color: white;
        margin-left: 15px;
        font-size: 1.7rem;
        font-weight: 800;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.33);
    }
    a{
        margin-right: 15px;
        padding: 13px 25px;
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
      <h1>Company</h1>
      <a href="https://kieranvieira.com">Newsletter</a>
    </NavContainer>
  )
}
