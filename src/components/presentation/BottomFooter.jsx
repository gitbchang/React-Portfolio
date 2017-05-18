import React, { Component } from 'react';

class BottomFooter extends Component {
  render() {
    return (
<footer className="pv4 ph3 ph5-ns tc bt b--black-10">
  <a className="link grow dim dib h2 w2 br-100 mr3" href="http://github.com/gitbchang" target="_blank">
    <img src="/images/github.svg" alt="github icon"/>
  </a>
  <a className="link dim grow gray dib h2 w2 br-100 mr3 " href="http://stackoverflow.com/users/6905654/brian-chang" target="_blank">
    <img src="/images/stackoverflow.svg" alt="stack icon"/>
  </a>
  <a className="link dim grow gray dib br-100 h2 w2 mr3 " href="#" target="_blank">
    <img src="/images/twitter.svg" alt="twitter icon"/>
  </a>
  <a className="link dim grow gray dib br-100 h2 w2 mr3 " href="https://www.linkedin.com/in/brian-h-chang-atx/" target="_blank">
    <img src="/images/linkedin.svg" alt="linkedin icon"/>
  </a>
</footer>
    );
  }
}

export default BottomFooter;