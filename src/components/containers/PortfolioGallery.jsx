import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioGallery extends Component {
  render() {
    return (
      <main className="cf pa4">
          <div className="fl w-100 w-50-ns ph2">
            <Link to='/portfolio/single' className="pv2 grow db no-underline black"><img className="db w-100" src="/images/spotify-MainPortfolio.jpg" /></Link>
            <a href="" className="no-underline pv2 grow db"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters.jpg" /></a>
            <a href="#" className="no-underline pv2 grow db"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/pink-and-noseworthy-22.12.10-cargo_960.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg"/></a>
          </div>
          <div className="fl w-50 w-25-ns ph2">
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-031209_960-2.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw-080411-cargo_960.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw18-240112-cc_960.jpg"/> </a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw-residency-cargo_960.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/orchid-2-mnkr_960.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/O270711_960-2.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-020510_960.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-130610_960.jpg"/></a>
          </div>
          <div className="fl w-50 w-25-ns ph2">
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zach-hurd-101218_960.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zh170311.4.cargo_960.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hwspringtour-cargo_960-1.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/cc-shanee_960.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/ZachHurd-190111s_960.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw170211pie-cargo_960.jpg"/></a>
            <a href="" className="pv2 grow db no-underline black"><img className="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-191110_960.jpg"/></a>
          </div>

          
      </main>
    );
  }
}

export default PortfolioGallery;