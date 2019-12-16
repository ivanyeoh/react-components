import React from 'react'

export default ({ items }) => (
  <ul className="tags">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)