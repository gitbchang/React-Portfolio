import React, {Component} from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className='ml7'>
        <article className="pa3 pa5-ns dib">
          <blockquote className="ml0 mt0 pl4 bl bw2 b--blue">
            <h1 className="f3 f2-m f1-l">About Brian.</h1>
            <p className="measure lh-copy">
              Hello there, I'm a Web Developer living in Austin, Texas. I am a recent graduate of the University of Texas Coding Bootcamp.
              I used to work for Accruent as a Implementation Engineer. 
              Now, I want to create intuitive interfaces and apps with the latest 
              technologies using Javascript. 
            </p>
            <p className="measure lh-copy">
              My main language is Javascript. I am able to use Javascript on the front and back end which makes it my language of choice. My projects use plain Javascript, jQuery, and JSX. I have learned the latest view frameworks as well as older frameworks for additional knowledge. 
            </p>
          </blockquote>
        </article>
      </div>
    );
  }
}

export default AboutMe;