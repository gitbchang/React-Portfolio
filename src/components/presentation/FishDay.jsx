import React, {Component} from 'react';

class FishDay extends Component {
  render() {
    return (
      <div className='transition-item'>
        <article className="cf ph3 ph5-ns pv5">
          <header className="fn fl-ns w-50-ns pr4-ns">
            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
              Fish of the Day
              <img className='dib ml2 mt2 mw2' src="/images/ClownFish-26.png" alt="fishIcon"/>
            </h1>
            <h2 className="f3 mid-gray lh-title">
              React application
            </h2>
            <a className="link" href="https://ns-bdaojfwflk.now.sh" target="_blank">
              <img
                className="dim db ba b--black-10 pa1"
                src="/images/catchfish1.jpg"
                alt="projectPreview"/>
            </a>
            <time className="f6 ttu tracked gray dib mt2">April 2017</time>
          </header>
          <div className="fn fl-ns w-50-ns">
            <div className="f3 fw6 mid-gray lh-title mb3">
              The Stack
            </div>
            <p className="f5 lh-copy measure mt0-ns">
              Main Stack: React + Firebase
              <br/>
              Other Technologies: React Router v4, now.sh
            </p>
            <div className="f3 fw6 mid-gray lh-title mb3">
              What Does It Do
            </div>
            <p className="f5 lh-copy measure">
              Create a Fish Restaurant and add new Fish's to an order menu or the store's
              inventory.
              <br/><br/>
              Using Firebase login, each store you create is tied to your account
            </p>
            <div className="f3 fw6 mid-gray lh-title mb3">
              Challenges
            </div>
            <p className="f5 lh-copy measure">
              Challenges description
            </p>
          </div>
        </article>
      </div>
    );
  }
}

export default FishDay;