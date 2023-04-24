import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './context/authenticationContext';
import Home from './pages/home';
import Articles from './pages/articles';
import Article from './pages/article';
import MainNavigation from './components/navigation/mainNavigation';
import Authenticate from './pages/authenticate';
import CreateArticle from './pages/createArticle';

let logoutTimer

function App() {
  const [token, setToken] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [tokenExpiration, setTokenExpiration] = useState()


  const login = useCallback((token, adminStatus, expiration) => {
    setIsAdmin(adminStatus)
    setToken(token)
    const tokenExpiration = expiration || new Date(new Date().getTime() + 86400000)
    setTokenExpiration(tokenExpiration)
    localStorage.setItem('userData', JSON.stringify({ isAdmin: adminStatus, token: token, expiration: tokenExpiration.toISOString() }))
  }, [])

  const logout = useCallback(() => {
    setIsAdmin(false)
    setToken(null)
    setTokenExpiration(null)
    localStorage.removeItem('userData')
  }, [])

  useEffect(() => {
    const tokenRemainingTime = tokenExpiration.getTime() - new Date().getTime()
    if(token) {
      logoutTimer = setTimeout(logout, tokenRemainingTime)
    } else {
      clearTimeout(logoutTimer)
    }
  }, [token, logout, tokenExpiration])

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('userData'))
    
    if(userData && userData.token && new Date(userData.expiration) > new Date()) {
      login(userData.token, userData.isAdmin, new Date(userData.expiration))
    }
  }, [login])


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
