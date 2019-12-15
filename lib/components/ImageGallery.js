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
  return React.createElement("a", {
    href: link
  }, React.createElement("figure", null, React.createElement("div", {
    className: "image"
  }, React.createElement("img", {
    src: imageUrl
  })), React.createElement("figcaption", null, React.createElement("strong", null, title), description)));
};
export const ImageGallery = ({
  children
}) => {
  return React.createElement("section", {
    className: "image-gallery"
  }, React.createElement("ul", null, Children.map(children, (child, index) => React.createElement("li", {
    className: "image-gallery-item",
    key: index
  }, cloneElement(child, {})))));
};
ImageGallery.Image = Image;
export default ImageGallery;