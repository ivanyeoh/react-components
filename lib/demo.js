"use strict";

var _Slideshow = _interopRequireDefault(require("./components/Slideshow.js"));

var _Nav = _interopRequireDefault(require("./components/Nav.js"));

var _Logo = _interopRequireDefault(require("./components/Logo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(React.Fragment, null, React.createElement(_Nav.default, {
  logo: React.createElement(_Logo.default, null),
  items: [{
    url: '/demo-gallery.html',
    label: 'Our Works'
  }, {
    url: '/demo-about.html',
    label: 'About Us'
  }, {
    url: '/contact-us',
    label: 'Contact Us'
  }]
}), React.createElement(_Slideshow.default, null, React.createElement(_Slideshow.default.Slide, {
  title: "Welcome to GoodWinds",
  description: "One stop solution provider of interior designs & built services for all business entity and residence",
  cssBackgroundImage: "url('/img/interior-designs/0.jpg')"
}), React.createElement(_Slideshow.default.Slide, {
  title: "Welcome to GoodWinds2",
  description: "We are interior design & build company that provide a comprehensive services from interior design planning, architecture, implementation & construction management, and consultancy services to literally almost all sectors that you can imagine which mentioned below",
  cssBackgroundImage: "url('/img/interior-designs/1.jpg')"
}))), document.querySelector('#demo'));