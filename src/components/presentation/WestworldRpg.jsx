import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WestworldRpg extends Component {
  render() {
    return (
      <div className="transition-item">
        <article className="cf ph3 ph5-ns pv5">
          <header className="fn fl-ns w-50-ns pr4-ns">
            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
              Westworld RPG
              <img className='dib ml2 mt2 mw2' src="/images/spotify.svg" alt="spotifyIcon"/>
            </h1>
            <h2 className="f3 mid-gray lh-title">
              HTML/CSS + jQuery application
            </h2>
            <Link
              className="link"
              to="https://westworld-rpg.herokuapp.com/"
              target="_blank">
              <img
                className="dim db ba b--black-10 pa1 w-100"
                src="/images/dolores-project-preview.jpg"
                alt="projectPreview"/>
            </Link>
            <time className="f6 ttu tracked gray dib mt2">October 2016</time>
          </header>
          <div className="fn fl-ns w-50-ns">
            <div className="f3 fw6 mid-gray lh-title mb3">
              The Stack
            </div>
            <p className="f5 lh-copy measure mt0-ns">
              Single Page HTML/CSS/Javascript application
            </p>
            <div className="f3 fw6 mid-gray lh-title mb3">
              What Does It Do
            </div>
            <p className="f5 lh-copy measure">
              Fight the different characters of Westworld. Your character gets increasingly stronger as you 
            </p>
            <div className="f3 fw6 mid-gray lh-title mb3">
              Lessons Learned
            </div>
            <p className="f5 lh-copy measure">
              This was our first introduction to the <span className="code bg-black-70 washed-green ph1">setInterval()</span> and <span className="code bg-black-70 washed-green ph1">setTimeout()</span> methods. 
              <br /><br />
              The ability to use <span className="code bg-black-70 washed-green ph1">setTimeout(fn, 0)</span> on function is very helpful. Set Timeout adds a new event to the browser event QUEUE. Very useful if I need a function to run after another function.
            </p>
          </div>
        </article>
      </div>
    );
  }
}

export default WestworldRpg;