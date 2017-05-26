import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {RouteTransition} from 'react-router-transition';
import spring from 'react-motion/lib/spring';
import {PortfolioGallery} from '../containers/';
import {SpotifyApiProject, HappyMediumProject, WestworldRpg, FishDay} from '../presentation/';

// We will import all Portfolio Project Components here instead of dynamic
// routes since we are not pulling these from a DB
class Portfolio extends Component {
  render() {
    const fadeConfig = {
      stiffness: 200,
      damping: 22
    };
    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{
        opacity: 0
      }}
        atLeave={{
        opacity: spring(0, fadeConfig)
      }}
        atActive={{
        opacity: spring(1, fadeConfig)
      }}>
        <Switch key={this.props.location.key} location={this.props.location}>
          <Route exact path='/portfolio' name='Portfolio' component={PortfolioGallery}/>
          <Route
            path='/portfolio/spotifyApi'
            name="Spotify API Project"
            component={SpotifyApiProject}/>
          <Route
            path='/portfolio/happyMedium'
            name="happyMedium"
            component={HappyMediumProject}/>
          <Route 
            path='/portfolio/westworld' 
            name="westworld" 
            component={WestworldRpg}/>
          <Route 
            path='/portfolio/fishDay' 
            name="fishDay" 
            component={FishDay}/>
        </Switch>
      </RouteTransition>
    )

  }
}

export default Portfolio;