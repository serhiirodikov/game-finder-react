import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { loadGames } from './actions/gamesAction'

import GlobalStyles from './components/GlobalStyles'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  )
}

export default App
