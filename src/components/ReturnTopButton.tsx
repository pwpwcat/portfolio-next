import { useEffect, useState } from 'react'
import styled from "styled-components";

const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 200
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = {
    opacity: 0,
    transition: '0.5s',
    pointerEvents: 'none',
    marginBottom: '-5rem'
  }
  const activeStyle = {
    opacity: 1,
    transition: '0.5s',
    marginBottom: 'inherit'
  }
  const style = isButtonActive ? activeStyle : normalStyle

  const Button = styled.button`
    position: fixed;
    right: 15px;
    bottom: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: unset;
    background: #E298AA;
    transition: .5s;
    cursor: pointer;
    padding: 12px;
    display: inline-block;
    padding: 0;

    svg{
      color: #fff;
      padding: 0;
      width: 25px;
      position: relative;
      top: 1px;
    }
  `;
  return (
    <Button style={style} onClick={returnTop} className="topButton">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </Button>
  )
}

export default ReturnTopButton
