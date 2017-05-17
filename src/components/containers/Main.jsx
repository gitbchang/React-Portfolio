import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';

class Main extends Component {
  render() {
    return (
      <article className="vh-50 dt w-100 bg-white">
        <div className="dtc v-mid tc ph3 ph4-l">
          <TypeWriter typing={1} minDelay={49}  maxDelay={50}>
            <h1 className="f6 f2-m f-subheadline-l fw6 tc">Welcome to My <a className='link' href='/portfolio'><span className='dark-pink'>Portfolio.</span></a></h1>
          </TypeWriter>
        </div>
      </article>
    );
  }
}

export default Main;