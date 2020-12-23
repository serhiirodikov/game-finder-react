const BASE_URL = 'https://api.rawg.io/api/'

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}
const getCurrentDay = () => {
  const day = new Date().getDay() + 1
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcomming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesUrl = () => `${BASE_URL}${popular_games}`
export const upcomingGamesUrl = () => `${BASE_URL}${upcomming_games}`
export const newGamesUrl = () => `${BASE_URL}${new_games}`
export const getGameById = (id) => `${BASE_URL}games/${id}`

export const gameScreenshotUrl = (id) => `${BASE_URL}games/${id}/screenshots`

export const searchedGames = (search) => `${BASE_URL}games?search=${search}`
