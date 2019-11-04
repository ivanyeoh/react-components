export default (({
  logo,
  items = []
}) => {
  return React.createElement("nav", {
    className: "nav"
  }, React.createElement("a", {
    href: "/",
    className: "logo"
  }, logo), React.createElement("ul", {
    className: "menu"
  }, items.map((item, index) => React.createElement("li", {
    key: `nav-item-${index}`,
    className: location.pathname === item.url ? "active" : null
  }, React.createElement("a", {
    href: item.url
  }, item.label)))));
});