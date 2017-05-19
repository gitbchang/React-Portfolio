import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { PortfolioGallery } from '../containers/';
import { SingleProject } from '../presentation/';

class Portfolio extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/portfolio' component={PortfolioGallery} />
        <Route path='/portfolio/single' component={SingleProject}/>
      </Switch>
    );
  }
}

export default Portfolio;