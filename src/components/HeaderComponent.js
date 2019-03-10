import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    top: 0;
    z-index: 2;
    h1{
        color: white;
        font-size: 8rem;
        text-shadow: 2px 2px 100px rgba(0, 0, 0, 0.33)
    }
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        h2{
            margin: 0 15px;
            font-weight: 100;
            color: white;
            span{
                font-size: 4rem;
                margin-right: 5px;
            }
        }
        div{
            display: flex;
            justify-content: flex-end;
            width: 250px;
            a{
                font-size: 1rem;
                font-weight: 100;
                margin-right: 25px;
                color: white;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
`;

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <div></div>
      <h1>Explore.</h1>
      <div>
          <h2><span>04</span>/12</h2>
          <div>
              <a href="/">Github</a>
              <a href="/">Twitter</a>
              <a href="/">Instagram</a>
          </div>
      </div>
    </HeaderContainer>
  )
}
