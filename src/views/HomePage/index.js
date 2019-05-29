import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';

import background from '../../assets/background.png';
import midground from '../../assets/midground.png';
import foreground from '../../assets/foreground.png';

import { HomeContainer } from './homePageStyles.js';
import HeaderComponent from '../../components/Header';
import Navigation from '../../components/Navigation';

export class HomePageView extends Component {
  render() {
    return (
      <HomeContainer>
        <Navigation/>
        <HeaderComponent />
        <Parallax className="back-img" y={['-200px', '0px']}>
            <img src={background} alt=""/>
        </Parallax>
        <Parallax className="mid-img" y={['-200px', '0px']}>
            <img src={midground} alt=""/>
        </Parallax>
        <Parallax className="front-img" y={['-200px', '0px']}>
            <img src={foreground} alt=""/>
        </Parallax>
      </HomeContainer>
    )
  }
}

export default HomePageView
