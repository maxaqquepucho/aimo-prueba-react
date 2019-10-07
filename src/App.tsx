import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages
import User from './pages/User'
import FindUser from './pages/FindUser'

//layout
import Layout from './layout/Layout'

import './assets/scss/app.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={FindUser} ></Route>
            <Route exact path='/:username' component={User} ></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
