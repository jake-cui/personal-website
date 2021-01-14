import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import FadeIn from 'react-fade-in';
import { AnimatedSocialIcon } from 'react-animated-social-icons'
import TypewriterText  from './TypewriterText';


export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
                  {/* <h1 className={'responsive-headline'}>👋 Hello! I'm <a href='https://www.linkedin.com/in/jakecui/'><u>Jake</u></a> </h1></FadeIn> */}
                <FadeIn delay>
                <TypewriterText/>

                

                </FadeIn>
            </div>
            {/* Social icons */}
            <div className="animated-social">
            <div className="animated-social-wrapper">

              <div className="item-wrapper">
                  <AnimatedSocialIcon 
                      brandName="linkedin"
                      width="2em" 
                      url={resumeData.linkedin}
                      defaultColor="#305973" 
                      hoverColor="#4fa2cd" 
                      animation="grow" />
              </div>
              <div className="item-wrapper">
                  <AnimatedSocialIcon 
                      brandName="github"
                      width="2em" 
                      url={resumeData.github}
                      defaultColor="#305973" 
                      hoverColor="#4fa2cd" 
                      animation="grow" />
              </div>
              <div className="item-wrapper">
                  <AnimatedSocialIcon 
                      brandName="twitter"
                      width="2em" 
                      url={resumeData.twitter}
                      defaultColor="#305973" 
                      hoverColor="#4fa2cd" 
                      animation="grow" />
              </div>
              <div className="item-wrapper">
                  <AnimatedSocialIcon 
                      brandName="instagram"
                      width="2em" 
                      url="https://www.instagram.com/fruitjake/"
                      defaultColor="#305973" 
                      hoverColor="#4fa2cd" 
                      animation="grow" />
              </div>
              </div>
    </div>


          
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>

         </p>

      </header>
      </React.Fragment>
    );
  }
}