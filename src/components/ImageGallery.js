import React, { cloneElement, Children } from 'react'

export const Image = ({ title, description, imageUrl, link }) => {
  return (
    <a href={link}>
      <figure>
        <div className="image">
          <img src={imageUrl} />
        </div>
        <figcaption>
          <strong>{title}</strong>
          {description}
        </figcaption>
      </figure>
    </a>
  )
}

export const ImageGallery = ({ title, children }) => {
  return (
    <section className="image-gallery">
      {title ? title : null}
      <ul>
      {
        Children.map(children, (child, index) => (
          <li className="image-gallery-item" key={index}>
            {cloneElement(child, {})}
          </li>
        ))
      }
      </ul>
    </section>
  )
}

ImageGallery.Image = Image

export default ImageGallery