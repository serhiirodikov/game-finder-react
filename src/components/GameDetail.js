import React from 'react'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { smallImage } from '../util'

import games from '../img/games.svg'
import pc_game from '../img/pc-search.svg'
import ps5 from '../img/playstation5.svg'
import ps4 from '../img/ps4.svg'
import xbox from '../img/xbox-logo.svg'
import xbox_one from '../img/xbox-one.svg'

const GameDetail = ({ pathId }) => {
  const { screen, game, isLoading } = useSelector((state) => state.detail)

  const history = useHistory()
  //etix detail
  const exitDetailHandler = (e) => {
    const elem = e.target
    if (elem.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      history.push('/')
    }
  }

  const getPlatform = (platform) => {
    switch (platform) {
      case 'Xbox Series S/X':
        return xbox
      case 'PlayStation 5':
        return ps5
      case 'PlayStation 4':
        return ps4
      case 'Xbox One':
        return xbox_one
      case 'PC':
        return pc_game
      default:
        return games
    }
  }

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      src={getPlatform(data.platform.name)}
                      key={data.platform.id}
                      alt={data.platform.name}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Desctiption>
              <p>{game.description_raw}</p>
            </Desctiption>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`
const Detail = styled(motion.div)`
  width: 70%;
  border-radius: 1rem;
  background: white;
  position: absolute;
  padding: 2rem 5rem;
  left: 15%;
  color: black;
  z-index: 10;

  img {
    width: 100%;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled(motion.div)`
  text-align: center;
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    max-width: 50px;
  }
`
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`

const Desctiption = styled(motion.div)`
  margin: 5rem, 0rem;
`
export default GameDetail
