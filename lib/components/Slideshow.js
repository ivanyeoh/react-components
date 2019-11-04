import { getUrlHash } from '../utils/url.js';
const {
  useState,
  cloneElement,
  Children,
  memo
} = React;

const generateChildrenIds = (id, children) => {
  const childrenIds = [];
  const total = Children.count(children);

  for (let i = 1; i <= total; i++) childrenIds.push(`${id}-slide-${i}`);

  return childrenIds;
};

export const Slide = ({
  id,
  title,
  description,
  cssBackgroundImage,
  activated
}) => {
  return React.createElement("article", {
    className: `slide${activated ? ' active' : ''}`,
    id: id
  }, React.createElement("div", {
    className: "content"
  }, React.createElement("h1", null, title), React.createElement("p", null, description)), React.createElement("div", {
    className: "background",
    style: {
      backgroundImage: cssBackgroundImage
    }
  }), React.createElement("div", {
    className: "mask"
  }));
};
export const Slideshow = memo(({
  id = 'main',
  children
}) => {
  const childrenIds = generateChildrenIds(id, children);
  const [activeSlideId, setActiveSlide] = useState(getUrlHash() || childrenIds[0]);

  const activateSlide = id => () => {
    setActiveSlide(id);
  };

  return React.createElement("section", {
    className: "slides"
  }, Children.map(children, (child, index) => cloneElement(child, {
    id: childrenIds[index],
    key: childrenIds[index],
    activated: activeSlideId === childrenIds[index]
  })), React.createElement("nav", {
    className: "pagination"
  }, childrenIds.map((id, index) => React.createElement("a", {
    href: `#${id}`,
    key: id,
    onClick: activateSlide(id),
    className: activeSlideId === id ? 'active' : null
  }, index + 1))));
});
Slideshow.Slide = Slide;
export default Slideshow;