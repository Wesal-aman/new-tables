import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';
import img from './assets/loader.gif';


const loading = () => <div className="animated fadeIn pt-3 text-center"><img src={img} className="small-pic"/></div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

class App extends Component {

  render() {
    return (
      <BrowserRouter >
          <Switch>
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
