import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { PortfolioGallery } from '../containers/';
import { SpotifyApiProject } from '../presentation/';


// We will import all Portfolio Project Components here instead of dynamic routes since we are not pulling these from a DB
class Portfolio extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/portfolio' component={PortfolioGallery} />
        <Route path='/portfolio/spotifyApi' component={SpotifyApiProject}/>
      </Switch>
    );
  }
}

export default Portfolio;