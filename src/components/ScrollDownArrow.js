import React, { useState, useEffect } from 'react'

const scrollOver = (y, callback) => {
  return () => {
    if (document.documentElement.scrollTop > y) {
      callback(true)
    } else {
      callback(false)
    }
  }
}

export default () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollOver(10, setScrolled))

    return () => {
      window.removeEventListener('scroll', scrollOver(10, setScrolled))
    }
  })

  return (
    <div
      className={`scroll-down-arrow${scrolled ? ' scrolled' : ''}`}
      title="scroll down">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}