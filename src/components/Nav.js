import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { fetchSearch } from '../actions/gamesAction'

const Nav = () => {
  const dispatch = useDispatch()

  const [inputText, setInputText] = useState('')
  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const searchHandle = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(inputText))
    setInputText('')
  }

  const searchClearHandle = () => {
    dispatch({ type: 'CLEAR_SEARCH' })
  }

  return (
    <NavStyled>
      <Logo onClick={searchClearHandle}>Game Finder</Logo>
      <form onSubmit={searchHandle}>
        <input type="text" value={inputText} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </NavStyled>
  )
}

const Logo = styled(motion.h1)`
  text-align: center;
  cursor: pointer;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ff7676;
  &:hover {
    color: #ffb8b8;
  }
`

const NavStyled = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    margin-top: 1rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border: none;
    cursor: pointer;
    background: #ff7676;
    color: white;
    &:hover {
      background: #ff5e5e;
    }
  }
`
export default Nav
