import React, { useState, useCallback } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './context/authenticationContext';
import Home from './pages/home';
import Articles from './pages/articles';
import Article from './pages/article';
import MainNavigation from './components/navigation/mainNavigation';
import Authenticate from './pages/authenticate';
import CreateArticle from './pages/createArticle';

function App() {
  const [token, setToken] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  const login = useCallback((token, adminStatus) => {
    setIsAdmin(adminStatus)
    setToken(token)
  }, [])

  const logout = useCallback(() => {
    setIsAdmin(false)
    setToken(null)
  }, [])


  let routes 


  if (isAdmin) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/articles' exact>
          <Articles />
        </Route>
        <Route path='/article/:articleId' exact>
          <Article />
        </Route>
        <Route path='/create' exact>
          <CreateArticle />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else if(token) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/articles' exact>
          <Articles />
        </Route>
        <Route path='/article/:articleId' exact>
          <Article />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/articles' exact>
          <Articles />
        </Route>
        <Route path='/auth' exact>
          <Authenticate />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }


  return ( 
    <AuthContext.Provider value={{isLoggedIn: !!token, token: token, isAdmin: isAdmin, login: login, logout: logout}}>
      <BrowserRouter>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
