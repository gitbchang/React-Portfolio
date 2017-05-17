import React, { Component } from 'react';

class TopHeader extends Component {
  render() {
    return (
      <nav className="pa3 pa4-ns bb b--black-10">
        <a className="link dim black b f1 f-headline-ns tc db mb1 mb4-ns" href="#" title="Home">Brian Chang</a>
        <div className="tc pb3">
          <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
          <a className="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
          <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Resume</a>
          <a className="link dim gray f6 f5-ns dib" href="#" title="Contact">Portfolio</a>
        </div>        
      </nav>
    );
  }
}

export default TopHeader;