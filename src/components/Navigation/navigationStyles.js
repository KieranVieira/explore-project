import styled from 'styled-components';

export const NavContainer = styled.div`
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        color: white;
        margin-left: 25px;
        font-size: 1.7rem;
        font-weight: 500;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.33);
    }
    a{
        margin-right: 25px;
        padding: 13px 25px;
        border-radius: 35px;
        font-size: 1rem;
        font-weight: 400;
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.73);
        color: white;
        transition: .2s;
        &:hover{
          background-color: rgba(0, 0, 0, 1)
        }
    }
`;
