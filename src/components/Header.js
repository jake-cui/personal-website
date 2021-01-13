import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import FadeIn from 'react-fade-in';

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
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
                <h1 className={'responsive-headline'}>👋 Hello! I'm <a href='mailto:jake_cui@college.harvard.edu'>Jake</a> </h1>
                {/*<h1 className="responsive-headline">I am {resumeData.name}.</h1>*/}

                                {/*<Typewriter*/}
                    {/*options={{*/}
                        {/*cursorClassName: 'cursor',*/}
                        {/*cursor: '',*/}
                        {/*wrapperClassName: 'typewriter-intro',*/}
                        {/*strings: ['<h1>hello</h1>', '<h1>hello world</h1>'],*/}
                        {/*autoStart: true,*/}
                        {/*loop: true,*/}
                    {/*}}*/}
                {/*/>*/}
                <Typewriter options={{loop: true, wrapperClassName: 'typewriter-text', cursor:'', deleteSpeed: 0.2}}
                            onInit={(typewriter) => {

                                // typewriter.pasteString("<h1>I am a <className='role'>product manager</className> </h1>");

                                typewriter.typeString('I am a ')
                                    .typeString('<id="typewriter-job" style="color:#ef7e56">product manager</class>')
                                    .pauseFor(2000)
                                    .deleteChars(15)
                                    .typeString('<id="typewriter-job" style="color:#ef7e56">creative technologist</class>')
                                    .pauseFor(2000)
                                    .deleteChars(21)
                                    .typeString('<id="typewriter-job" style="color:#ef7e56">UI/UX researcher</class>')
                                    .pauseFor(2000)
                                    .deleteChars(16)
                                    .typeString('<id="typewriter-job" style="color:#ef7e56">design engineer</class>')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start()
                                ;
                }}
                />
               {/*<h1 className="responsive-headline">I am {resumeData.name}.</h1>*/}

            </div>
             <ul className="social">
                 {
                     resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                             return(
                                 <li key={item.name}>
                                     <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                 </li>
                             )
                         }
                     )
                 }
             </ul>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>

         </p>

      </header>
      </React.Fragment>
    );
  }
}