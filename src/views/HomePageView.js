import React, { Component } from 'react'
import styled from 'styled-components';

import BackgroundTemp from '../assets/background-img.jpg';

import HeaderComponent from '../components/HeaderComponent.js';
import Navigation from '../components/Navigation.js';

const HomeContainer = styled.div`
  background-color: black;
  img{
    position: absolute;
    top: -80px;
    z-index: 1;
    width: 100%;
    height: auto;
  }
`;

export class HomePageView extends Component {
  render() {
    return (
      <HomeContainer>
        <Navigation/>
        <HeaderComponent />
        <img src={BackgroundTemp} draggable={false}/>
      </HomeContainer>
    )
  }
}

export default HomePageView
