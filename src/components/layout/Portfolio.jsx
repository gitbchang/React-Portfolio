import React, { Component } from 'react';
import { Switch, Route, Link, Match, Miss } from 'react-router-dom';
import { PortfolioGallery } from '../containers/';
import { SpotifyApiProject, HappyMediumProject, WestworldRpg, FishDay } from '../presentation/';


// We will import all Portfolio Project Components here instead of dynamic routes since we are not pulling these from a DB
class Portfolio extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/portfolio' name='Portfolio' component={PortfolioGallery} />
        <Route path='/portfolio/spotifyApi' name="Spotify API Project" component={SpotifyApiProject}/>
        <Route path='/portfolio/happyMedium' name="happyMedium" component={HappyMediumProject}/>
        <Route path='/portfolio/westworld' name="westworld" component={WestworldRpg}/>
        <Route path='/portfolio/fishDay' name="fishDay" component={FishDay} />        
      </Switch>
    );
  }
}

export default Portfolio;