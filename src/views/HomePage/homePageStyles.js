import styled from 'styled-components';

export const HomeContainer = styled.div`
  img{
    position: absolute;
    top: -80px;
    width: 100%;
    height: auto;
  }
  .back-img{
    z-index: 2;
  }
  .mid-img{
    z-index: 3;
  }
  .front-img{
    z-index: 4;    
  }
`;