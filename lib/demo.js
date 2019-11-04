import Slideshow from "./components/Slideshow.js";
import Nav from "./components/Nav.js";
import Logo from "./components/Logo.js";
ReactDOM.render(React.createElement(React.Fragment, null, React.createElement(Nav, {
  logo: React.createElement(Logo, null),
  items: [{
    url: '/demo-gallery.html',
    label: 'Our Works'
  }, {
    url: '/about-us',
    label: 'About Us'
  }, {
    url: '/contact-us',
    label: 'Contact Us'
  }]
}), React.createElement(Slideshow, null, React.createElement(Slideshow.Slide, {
  title: "Welcome to GoodWinds",
  description: "We are interior design & build company that provide a comprehensive services from interior design planning, architecture, implementation & construction management, and consultancy services to literally almost all sectors that you can imagine which mentioned below",
  cssBackgroundImage: "url('/img/interior-designs/0.jpg')"
}), React.createElement(Slideshow.Slide, {
  title: "Welcome to GoodWinds2",
  description: "We are interior design & build company that provide a comprehensive services from interior design planning, architecture, implementation & construction management, and consultancy services to literally almost all sectors that you can imagine which mentioned below",
  cssBackgroundImage: "url('/img/interior-designs/1.jpg')"
}))), document.querySelector('#demo'));