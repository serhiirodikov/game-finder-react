import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from './actions/gamesAction'
import GlobalStyles from './components/GlobalStyles'

import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  )
}

export default App
