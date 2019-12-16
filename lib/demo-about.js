"use strict";

var _Nav = _interopRequireDefault(require("./components/Nav.js"));

var _Logo = _interopRequireDefault(require("./components/Logo.js"));

var _Hero = _interopRequireDefault(require("./components/Hero.js"));

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
    url: '/demo-contact.html',
    label: 'Contact Us'
  }]
}), React.createElement(_Hero.default, {
  content: React.createElement("p", null, React.createElement("strong", null, "GOODWINDS Interior Design Sdn Bhd"), " is a design & built company that provide a comprehensive services from interior design planning, architecture, implementation & construction management, and consultancy services to literally almost all sectors that you can imagine which mentioned below:", React.createElement("ul", {
    className: "mark-list"
  }, React.createElement("li", null, "Commercial"), React.createElement("li", null, "Corporate"), React.createElement("li", null, "Residential"), React.createElement("li", null, "Private")))
}), React.createElement("article", {
  className: "bright"
}, React.createElement("h2", null, "What We Do"), React.createElement("ul", {
  className: "icon-list"
}, React.createElement("li", null, React.createElement("figure", null, React.createElement("img", {
  src: "../img/services/001-blueprint.svg"
}), React.createElement("figcaption", null, "Design & Built"))), React.createElement("li", null, React.createElement("figure", null, React.createElement("img", {
  src: "../img/services/005-brainstorming.svg"
}), React.createElement("figcaption", null, "Design Consultancy"))), React.createElement("li", null, React.createElement("figure", null, React.createElement("img", {
  src: "../img/services/006-risks.svg"
}), React.createElement("figcaption", null, "Project Management"))), React.createElement("li", null, React.createElement("figure", null, React.createElement("img", {
  src: "../img/services/004-hotel.svg"
}), React.createElement("figcaption", null, "Upgrading Work"))), React.createElement("li", null, React.createElement("figure", null, React.createElement("img", {
  src: "../img/services/002-clean-house.svg"
}), React.createElement("figcaption", null, "Refurbishment"))), React.createElement("li", null, React.createElement("figure", null, React.createElement("img", {
  src: "../img/services/003-logistics.svg"
}), React.createElement("figcaption", null, "Relocation"))))), React.createElement("article", {
  className: "right-figure"
}, React.createElement("h2", null, "Our Background"), React.createElement("figure", null, React.createElement("img", {
  src: "../img/office.png"
}), React.createElement("figcaption", null, "Our office")), React.createElement("p", null, React.createElement("strong", null, "GOODWINDS Interior Design Sdn Bhd"), " was established on 18th June 2009 (Previously known as DID Project Solutions Sdn Bhd) as an Interior Design & Built company which began by offering Design consultancy and Interior Fit out work services mainly for corporate office."), React.createElement("p", null, "Throughout the years of experiences and challenges faced in this industry, ", React.createElement("strong", null, "GOODWINDS Interior Design Sdn Bhd"), " was formed on 30th March 2015 which founded by a passionate and dynamic team that strive for improvement to ensure a continuous delivery of the most innovative with the highest professional standards to our customers."), React.createElement("p", null, "We are One-Stop Solution Interior Design Company that offers a complete design & built, end-to-end solution from strategic planning & design consultancy, project management, and fit-out construction work.")), React.createElement("article", {
  className: "bright split"
}, React.createElement("div", {
  className: "left"
}, React.createElement("h2", null, "Our Team"), React.createElement("p", null, React.createElement("strong", null, "GOODWINDS"), " group's management and personnel consists of highly experienced and self-motivated experts across this industry. Our designers and project team posseses strong technical knowledge and project management in many years of relevant industry experience."), React.createElement("p", null, "We are a company of high energy entrepreneurs and dedicated professionals working together to provide the highest quality, innovative and market relevant products and services profitably in a competitive engineering services environment to the complete satisfaction of our customer.")), React.createElement("div", {
  className: "right"
}, React.createElement("img", {
  src: "../img/group-photo.jpg"
}))), React.createElement("footer", null, "\xA9 2019 GOODWINDS Sdn Bhd")), document.querySelector('#demo'));