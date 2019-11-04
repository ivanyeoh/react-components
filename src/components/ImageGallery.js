const { useState, cloneElement, Children, memo } = React

export const Image = ({ title, description, imageUrl, link }) => {
  return (
    <article className="image-gallery-item">
      <a href={link}>
        <img src={imageUrl} className="image" />
        <div className="caption">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </article>
  )
}

export const ImageGallery = ({ children }) => {
  return (
    <section className="image-gallery">
      {
        Children.map(children, (child, index) => cloneElement(child, {
        }))
      }
    </section>
  )
}

ImageGallery.Image = Image

export default ImageGallery