import React, { Component } from 'react';

class SingleProject extends Component {
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
          <img className="grow dim db ba b--black-10 pa1" src="/images/Spotify-preview-groundup-edit.png" alt="projectPreview"/>
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
      Using the Search Bar, it will query for the artist's listening statistics and popular tracks. You can then favorite these tracks, which is stored inside the MongoDB and later shown in the Favorites section. <br />
      It will also show you statistics based on your favorite 
    </p>
  </div>
</article>
      </div>
    );
  }
}

export default SingleProject;

