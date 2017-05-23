import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioGallery extends Component {
  render() {
    return (      
        <div className="cf pa4">
            <div className="fl w-100 w-50-ns ph2">
              <Link to='/portfolio/spotifyApi' className="pv2 grow db no-underline black"><img className="db w-100" src="/images/spotify-MainPortfolio.jpg" /></Link>
              <a href="" className="no-underline pv2 grow db"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters.jpg" /></a>
            </div>
            <div className="fl w-50 w-25-ns ph2">
              <Link to='/portfolio/fishDay' className="pv2 grow db no-underline black"><img className="db w-100" src="images/fish-gallery.jpg"/></Link>
              <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw-080411-cargo_960.jpg"/></a>
            </div>
            <div className="fl w-50 w-25-ns ph2">
              <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zach-hurd-101218_960.jpg"/></a>
              <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zh170311.4.cargo_960.jpg"/></a>
              <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hwspringtour-cargo_960-1.jpg"/></a>
            </div>      
        </div>      
    );
  }
}

export default PortfolioGallery;