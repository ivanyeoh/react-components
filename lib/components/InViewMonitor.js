"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

class InViewMonitor extends _react.Component {
  constructor(props) {
    super(props);
    this._monitorChildNode = {};
    this.observeAll = this.observeAll.bind(this);
    this.unobserveAll = this.unobserveAll.bind(this);
    this.onIntersectionAll = this.onIntersectionAll.bind(this);
    this.onIntersectionEach = this.onIntersectionEach.bind(this);
    this.state = {
      intersecting: {}
    };
  }

  componentDidMount() {
    this.observer = new window.IntersectionObserver(this.onIntersectionAll, {
      threshold: 0.25
    });
    this.observeAll();
  }

  componentDidUpdate() {
    this.unobserveAll();
    this.observeAll();
  }

  componentWillUnmount() {
    this.unobserveAll();
  }

  observeAll() {
    Object.values(this._monitorChildNode).forEach(node => {
      this.observer.observe(node);
    });
  }

  unobserveAll() {
    Object.values(this._monitorChildNode).forEach(node => {
      this.observer.unobserve(node);
    });
  }

  onIntersectionAll(entries) {
    entries.forEach(this.onIntersectionEach);
  }

  onIntersectionEach(entry) {
    const matchedKey = getKeyByValue(this._monitorChildNode, entry.target);
    if (!matchedKey) return;
    const {
      intersecting
    } = this.state;
    const previouslyIntersected = intersecting[matchedKey];
    const currentlyIntersected = entry.isIntersecting;
    if (currentlyIntersected == previouslyIntersected) return;
    this.setState({
      intersecting: { ...intersecting,
        [matchedKey]: currentlyIntersected
      }
    });
  }

  render() {
    const {
      intersecting
    } = this.state;
    return _react.Children.map(this.props.children, (child, index) => {
      const className = intersecting && intersecting[index] ? 'in-view' : null;
      return _react.default.createElement("div", {
        className: className,
        ref: node => {
          this._monitorChildNode[index] = node;
          const {
            ref
          } = child;
          if (typeof ref === 'function') ref(node);else if (ref) ref.current = node;
        }
      }, child);
    });
  }

}

exports.default = InViewMonitor;