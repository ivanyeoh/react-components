export default (({
  content
}) => {
  return React.createElement("div", {
    className: "hero"
  }, React.createElement("div", {
    className: "content"
  }, content), React.createElement("div", {
    className: "mask"
  }));
});