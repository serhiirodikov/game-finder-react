import axios from 'axios'
import { gameScreenshotUrl, getGameById } from '../api'

export const loadDetailByGame = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  })

  const detailsData = await axios.get(getGameById(id))
  const screenDetails = await axios.get(gameScreenshotUrl(id))

  dispatch({
    type: 'FETCH_DETAIL',
    payload: {
      game: detailsData.data,
      screen: screenDetails.data,
    },
  })
}
