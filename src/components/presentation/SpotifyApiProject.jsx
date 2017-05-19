import React, { Component } from 'react';

class SpotifyApiProject extends Component {
  render() {
    return (
      <div>
        <article className="cf ph3 ph5-ns pv5">
  <header className="fn fl-ns w-50-ns pr4-ns">
    <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
      Spotify - API React <img className='dib ml2 mt2 mw2' src="/images/spotify.svg" alt="spotifyIcon"/>
    </h1>
    <h2 className="f3 mid-gray lh-title">
      MERN Stack Application
    </h2>
      <a className="link" href="https://spotify-groundup.herokuapp.com/" target="_blank">
          <img className="dim db ba b--black-10 pa1" src="/images/Spotify-preview-groundup-edit.png" alt="projectPreview"/>
      </a>
      <time className="f6 ttu tracked gray dib mt2">April 2017</time>
  </header>
  <div className="fn fl-ns w-50-ns">
    <div className="f3 fw6 mid-gray lh-title mb3">
      The Stack
    </div>
    <p className="f5 lh-copy measure mt0-ns">
      Main Stack:  MongoDB, Express, React, and Node. <br />
      Other Technologies:  React Router v4, BriteCharts, SpotifyAPI
    </p>
    <div className="f3 fw6 mid-gray lh-title mb3">
      What Does It Do
    </div>
    <p className="f5 lh-copy measure">
      Using the Search Bar, it will query for the artist's listening statistics and popular tracks. You can then favorite these tracks, which is stored inside the MongoDB and later shown in the Favorites section. <br /><br />
      Login with your Spotify account to see average statistics based on your Top 10 Tracks. 
    </p>
      <div className="f3 fw6 mid-gray lh-title mb3">
      Challenges
    </div>
    <p className="f5 lh-copy measure">
      The first challenge was deciding on a CSS library/framework to use. I decided to use Tachyons for the styling. I discovered that I prefer to use class name inline styling rather than import individual react components,  ex. <span className="code bg-black-70 washed-green">import {`{ Button }`} from 'react-bootstrap'; </span>
      <br /><br />
      Deploying My App has not been the smoothest due to Heroku's mLab MongoDB. Will need to debug further. I had to use Robomongo to connect to mLab's server to see if my models were created properly. <br /><br />
      I am using Axios, a promise based http client, to make requests to my own DB and Spotify's DB. I had to do some debugging due to chaining multiple promise calls together. Also the target of <span className="code bg-black-70 washed-green">'this'</span> will change when inside the <span className="code bg-black-70 washed-green">'promise.then(...'</span> code block.
    </p>
  </div>
</article>
      </div>
    );
  }
}

export default SpotifyApiProject;

