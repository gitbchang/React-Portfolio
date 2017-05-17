import React, { Component } from 'react';

import { TopHeader, BottomFooter } from '../presentation/';
import Main from '../containers/Main';

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