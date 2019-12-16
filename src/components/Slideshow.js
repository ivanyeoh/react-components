import React from 'react'
import { getUrlHash } from '../utils/url.js'

const { useState, cloneElement, Children, memo } = React

const generateChildrenIds = (id, children) => {
  const childrenIds =  []
  const total = Children.count(children)
  for (let i = 1; i <= total; i++) childrenIds.push(`${id}-slide-${i}`)
  return childrenIds
}

export const Slide = ({ id, title, description, cssBackgroundImage, activated }) => {
  return (
    <article className={`slide${activated ? ' active' : ''}`} id={id}>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="background" style={{ backgroundImage: cssBackgroundImage }}></div>
      <div className="mask"></div>
    </article>
  )
}

export const Slideshow = memo(({ id = 'main', children }) => {
  const childrenIds = generateChildrenIds(id, children)
  const [activeSlideId, setActiveSlide] = useState(getUrlHash() || childrenIds[0])
  const activateSlide = id => () => { setActiveSlide(id) }

  return (
    <section className="slides">
      {
        Children.map(children, (child, index) => cloneElement(child, {
          id: childrenIds[index],
          key: childrenIds[index],
          activated: activeSlideId === childrenIds[index]
        }))
      }
      <nav className="pagination">
        {
          childrenIds.map((id, index) => (
            <a href={`#${id}`}
              key={id}
              onClick={activateSlide(id)}
              className={activeSlideId === id ? 'active' : null}
            >{index + 1}</a>
          ))
        }
      </nav>
    </section>
  )
})

Slideshow.Slide = Slide

export default Slideshow