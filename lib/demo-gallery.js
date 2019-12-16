"use strict";

var _ImageGallery = _interopRequireDefault(require("./components/ImageGallery.js"));

var _Nav = _interopRequireDefault(require("./components/Nav.js"));

var _Logo = _interopRequireDefault(require("./components/Logo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const images = [{
  url: '/img/interior-designs/1.jpg',
  title: 'Petron Office',
  description: 'design & build'
}, {
  url: '/img/interior-designs/2.jpg',
  title: 'Airasia Office',
  description: 'design & build & project management'
}, {
  url: '/img/interior-designs/3.jpg',
  title: 'Airasia Office',
  description: 'build'
}, {
  url: '/img/interior-designs/4.jpg',
  title: 'Chicken Rice Shop',
  description: 'design'
}, {
  url: '/img/interior-designs/5.jpg',
  title: 'Shah Alam Residential',
  description: 'build & project management'
}, {
  url: '/img/interior-designs/6.jpg',
  title: 'Serin Residency Cyberjaya',
  description: 'design & build'
}, {
  url: '/img/interior-designs/7.jpg',
  title: 'Salak South School',
  description: 'project management'
}, {
  url: '/img/interior-designs/8.jpg',
  title: 'National Library',
  description: 'build & project management'
}];
ReactDOM.render(React.createElement(React.Fragment, null, React.createElement(_Nav.default, {
  logo: React.createElement(_Logo.default, null),
  items: [{
    url: '/demo-gallery.html',
    label: 'Our Works'
  }, {
    url: '/demo-about.html',
    label: 'About Us'
  }, {
    url: '/demo-contact.html',
    label: 'Contact Us'
  }]
}), React.createElement(_ImageGallery.default, null, images.map((image, i) => React.createElement(_ImageGallery.default.Image, {
  key: i,
  imageUrl: image.url,
  title: image.title,
  description: image.description,
  link: '/'
})))), document.querySelector('#demo'));