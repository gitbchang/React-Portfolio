import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class TopHeader extends Component {
  render() {
    return (
      <nav className="pa3 pa4-ns bb b--black-10">
          <Link className='link' to='/'><div className="link dim black b f1 f-headline-ns tc db mb1 mb4-ns" title="Home">Brian Chang</div></Link>
        <div className="tc pb3">
          <Link className="link dim gray f6 f5-ns dib mr3" to='/'>Home</Link>
          <Link className="link dim gray f6 f5-ns dib mr3" to='/about'>About</Link>      
          <Link to="https://drive.google.com/file/d/0B8qAZHZiF7XJN012cFNKODBJSGc/view?usp=sharing" target="_blank"><div className="link dim gray f6 f5-ns dib mr3">Resume</div></Link>
          <Link to='/portfolio'><div className="link dim gray f6 f5-ns dib">Portfolio</div></Link>
        </div>        
      </nav>
    );
  }
}

export default TopHeader;