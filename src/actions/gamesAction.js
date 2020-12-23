import axios from 'axios'
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchedGames,
} from '../api.js'

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl())
  const upcomingData = await axios.get(upcomingGamesUrl())
  const newGamesData = await axios.get(newGamesUrl())
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  })
}

export const fetchSearch = (data) => async (dispatch) => {
  const searchedData = await axios.get(searchedGames(data))

  dispatch({
    type: 'SEARCHED_DATA',
    payload: {
      searched: searchedData.data.results,
    },
  })
}
