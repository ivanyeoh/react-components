export default (({
  logo
}) => {
  return React.createElement("nav", {
    className: "nav"
  }, React.createElement("a", {
    href: "/",
    className: "logo"
  }, "GOODWINDS"), React.createElement("ul", {
    className: "menu"
  }, React.createElement("li", null, React.createElement("a", {
    href: "/works"
  }, "Our Works")), React.createElement("li", null, React.createElement("a", {
    href: "/about"
  }, "About Us")), React.createElement("li", null, React.createElement("a", {
    href: "/contact"
  }, "Contact Us"))));
});