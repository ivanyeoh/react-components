const {
  useState,
  cloneElement,
  Children,
  memo
} = React;
export const Image = ({
  title,
  description,
  imageUrl,
  link
}) => {
  return React.createElement("article", {
    className: "image-gallery-item"
  }, React.createElement("a", {
    href: link
  }, React.createElement("img", {
    src: imageUrl,
    className: "image"
  }), React.createElement("div", {
    className: "caption"
  }, React.createElement("h2", null, title), React.createElement("p", null, description))));
};
export const ImageGallery = ({
  children
}) => {
  return React.createElement("section", {
    className: "image-gallery"
  }, Children.map(children, (child, index) => cloneElement(child, {})));
};
ImageGallery.Image = Image;
export default ImageGallery;