const scrollOver = (y, callback) => {
  return a => {
    if (document.documentElement.scrollTop > y) {
      callback(true);
    } else {
      callback(false);
    }
  };
};

export default (({
  logo,
  items = []
}) => {
  const [over, setOver] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', scrollOver(112, setOver));
    return () => {
      window.removeEventListener('scroll', scrollOver(112, setOver));
    };
  });
  return React.createElement("nav", {
    className: `nav${over ? ' over' : ''}`
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