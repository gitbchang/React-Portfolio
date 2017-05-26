import React, { Component } from 'react';

class HappyMedium extends Component {
  render() {
    return (
      <div className='transition-item'>
        <article className="cf ph3 ph5-ns pv5">
          <header className="fn fl-ns w-50-ns pr4-ns">
            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
              Happy Medium
            </h1>
            <Link className="link" to="https://happy-medium-33616.herokuapp.com/" target="_blank">
              <h2 className="f3 lh-title blue dim">
                Full Stack Application with Firebase
              </h2>
            </Link>
            <time className="f6 ttu tracked gray dib mt2">January 2017</time>
          </header>
          <div className="fn fl-ns w-50-ns">
            <div className="f3 fw6 mid-gray lh-title mb3">
              The Stack
            </div>
            <p className="f5 lh-copy measure mt0-ns">
              Main Stack: HTML/CSS, jQuery, Firebase
              <br/>
              Other Technologies: Google Maps API
            </p>
            <div className="f3 fw6 mid-gray lh-title mb3">
              What Does It Do
            </div>
            <p className="f5 lh-copy measure">
              Find a convenient meeting spot for people in your party. The app will show places to meet between the people in your room.
              <br/><br/>
              Using Firebase login, each store you create is tied to your account
            </p>
            <div className="f3 fw6 mid-gray lh-title mb3">
              Lessons Learned
            </div>
            <p className="f5 lh-copy measure">
              Learning how to structure our data inside our Firebase database was important. We used timestamps and unique IDs to store chatrooms and user messages.
            </p>
          </div>
        </article>
      </div>
    );
  }
}

export default HappyMedium;