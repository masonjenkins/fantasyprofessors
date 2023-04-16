import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';
import Articles from './pages/articles';
import Article from './pages/article';
import MainNavigation from './components/navigation/mainNavigation';

function App() {
  return ( 
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/articles'>
            <Articles />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;
