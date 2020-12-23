import React from 'react'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { loadDetailByGame } from '../actions/gameDetailAction'
import { Link } from 'react-router-dom'
import { smallImage } from '../util'

const Game = ({ name, id, released, image }) => {
  const stringId = id.toString()
  //Load Detail Handler

  const dispatch = useDispatch()

  const detailHandler = () => {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetailByGame(id))
  }
  return (
    <StyledGames layoutId={stringId} onClick={detailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGames>
  )
}

const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`
export default Game
