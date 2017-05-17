import React, { Component } from 'react';

import { TopHeader, BottomFooter } from '../presentation/';
import {Main, PortfolioGallery} from '../containers/';

class Home extends Component {
  render() {
    return (
      <div>
        <TopHeader />
          <Main />
        <BottomFooter />
      </div>
    );
  }
}

export default Home;