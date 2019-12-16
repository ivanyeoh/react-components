import React, { useState, useEffect } from 'react'

const scrollOver = (y, callback) => {
  return (a) => {
    if (document.documentElement.scrollTop > y) {
      callback(true)
    } else {
      callback(false)
    }
  }
}

export default ({ logo, items = [] }) => {
  const [over, setOver] = useState(false);
  const [pathname, setPathname] = useState(null);

  useEffect(() => {
    setPathname(window.location.pathname);

    window.addEventListener('scroll', scrollOver(112, setOver))

    return () => {
      window.removeEventListener('scroll', scrollOver(112, setOver))
    }
  })

  let matchedItem = items.find(item => item.url === pathname)
  if (!matchedItem) matchedItem = items.find(item => pathname.match(new RegExp(`^${item.url}`)))

  const navItems = items.map((item, index) => {
    return {
      index,
      ...item,
      className: matchedItem === item ? 'active' : null
    }
  })

  return (
    <nav className={`nav${over ? ' over' : ''}`}>
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
    </nav>
  )
}