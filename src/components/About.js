import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="five columns">

               <img className="profile-pic"  src="images/jakeprofile.jpg" alt="" />

            </div>

            <div className="seven columns main-col">

                <h2>I am in incoming <a href="https://www.uberapms.com/">associate product manager at Uber</a>. I graduated from Harvard with high honors, majoring in computer science and linguistics.</h2>
                <h2>Previously, I worked </h2>


            </div>
         </div>
      </section>
    );
  }
}