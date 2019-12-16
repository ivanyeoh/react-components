import React from 'react'

export default ({ items }) => (
  <ul className="icon-grid">
    {
      items.map((item, i) => (
        <li key={i}>
          <figure>
            <img src={item.src} />
            <figcaption>
              {item.caption}
            </figcaption>
          </figure>
        </li>
      ))
    }
  </ul>
)