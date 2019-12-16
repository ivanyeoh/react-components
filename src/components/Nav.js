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

  return (
    <nav className={`nav${over ? ' over' : ''}`}>
      <a href="/" className="logo">
        {logo}
      </a>
      <ul className="menu">
        {
          items.map((item, index) => (
            <li key={`nav-item-${index}`} className={pathname === item.url ? "active" : null}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}