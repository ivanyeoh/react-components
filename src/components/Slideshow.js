import React, { useState, useEffect, cloneElement, Children, memo } from 'react'
import { getUrlHash } from '../utils/url.js'

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

const Pagination = ({ childrenIds, activeSlideId, activateSlide }) => (
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
)

export const Slideshow = memo(({ id = 'main', children }) => {
  const childrenIds = generateChildrenIds(id, children)
  const [activeSlideId, setActiveSlide] = useState(childrenIds[0])
  const activateSlide = id => () => { setActiveSlide(id) }

  useEffect(() => {
    setActiveSlide(getUrlHash() || childrenIds[0])
  })

  return (
    <section className="slides">
      {
        Children.map(children, (child, index) => cloneElement(child, {
          id: childrenIds[index],
          key: childrenIds[index],
          activated: activeSlideId === childrenIds[index]
        }))
      }
      {
        childrenIds.length ? <Pagination
          childrenIds={childrenIds}
          activeSlideId={activeSlideId}
          activateSlide={activateSlide}
        /> : null
      }
    </section>
  )
})

Slideshow.Slide = Slide

export default Slideshow