import React, {Component} from 'react';
import Typist from 'react-typist';
import '../Cursor.scss'
 

// .typeString('<id="typewriter-job" style="color:#ef7e56">product manager</class>')
//                                     .pauseFor(2000)
//                                     .deleteChars(15)
//                                     .typeString('<id="typewriter-job" style="color:#ef7e56">creative technologist</class>')
//                                     .pauseFor(2000)
//                                     .deleteChars(21)
//                                     .typeString('<id="typewriter-job" style="color:#ef7e56">UI/UX researcher</class>')
//                                     .pauseFor(2000)
//                                     .deleteChars(16)
//                                     .typeString('<id="typewriter-job" style="color:#ef7e56">design engineer</class>')
//                                     .pauseFor(2000)
//                                     .deleteAll()
//                                     .start()
export default class TypewriterText extends Component {
  render() {
    return (
        <div>
        <Typist avgTypingDelay={50} cursor={{show:false}} className="typewriter-text">
            <h1 className={'responsive-headline'}>👋 Hello! I'm <a href='https://www.linkedin.com/in/jakecui/'><u>Jake</u></a> </h1>
        </Typist>
        <br></br>

      <Typist avgTypingDelay={50} startDelay={1000} cursor={{show: true, hideWhenDone: true}} className="typewriter-text" >
      <Typist.Delay ms={1000} />
          <div style={{display: 'inline-block'}}>

          I am a 
        <span style={{color:'#ef7e56'}}> product manager</span>
        <Typist.Delay ms={2500} />
        <Typist.Backspace count={15} delay={200} />

        <span style={{color:'#ef7e56'}}>creative technologist</span>
        <Typist.Delay ms={2500} />
        <Typist.Backspace count={21} delay={200} />

        <span style={{color:'#ef7e56'}}>UI/UX researcher</span>
        <Typist.Delay ms={2500} />
        <Typist.Backspace count={16} delay={200} />

        <span style={{color:'#ef7e56'}}>design engineer</span>
        <Typist.Delay ms={2500} />
        <Typist.Backspace count={15} delay={200} />

        <span style={{color:'#ef7e56'}}>product manager</span>
          </div>
        
      </Typist>
      </div>
    );
  }
}