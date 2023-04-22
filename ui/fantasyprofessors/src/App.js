import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';
import Articles from './pages/articles';
import Article from './pages/article';
import MainNavigation from './components/navigation/mainNavigation';
import Authenticate from './pages/authenticate';

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
          <Route path='/article/:articleId' exact>
            <Article />
          </Route>
          <Route path='/auth' exact>
            <Authenticate />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;
