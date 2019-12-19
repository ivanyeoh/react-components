import React, { useState, useEffect } from 'react'

import MenuIcon from './icons/MenuIcon'
import CloseIcon from './icons/CloseIcon'

const scrollOver = (y, callback) => {
  console.log('scrolling...');
  return (a) => {
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
    if (top > y) {
      callback(true)
    } else {
      callback(false)
    }
  }
}

export default ({ logo, items = [] }) => {
  const [over, setOver] = useState(false);
  const [pathname, setPathname] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setPathname(window.location.pathname);

    window.addEventListener('scroll', scrollOver(112, setOver))

    return () => {
      window.removeEventListener('scroll', scrollOver(112, setOver))
    }
  })

  let matchedItem = items.find(item => item.url === pathname)
  if (!matchedItem) matchedItem = items.find(item => pathname && pathname.match(new RegExp(`^${item.url}`)))

  const navItems = items.map((item, index) => {
    return {
      index,
      ...item,
      className: matchedItem === item ? 'active' : null
    }
  })

  return (
    <nav className={`nav${over ? ' over' : ''}${expanded ? ' expanded' : ''}`}>
      <a href="/" className="logo">
        {logo}
      </a>
      <ul className="menu">
        {
          navItems.map(item => (
            <li key={`nav-item-${item.index}`} className={item.className}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))
        }
      </ul>
      <a className="menu-toggle" role="button" onClick={() => {
        setExpanded(!expanded)
      }}>
        <MenuIcon />
      </a>
      <a className="menu-close" role="button" onClick={() => {
        setExpanded(false)
      }}>
        <CloseIcon />
      </a>
    </nav>
  )
}