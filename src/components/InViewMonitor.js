import React, { Children, Component } from 'react'

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

export default class InViewMonitor extends Component {
  constructor(props) {
    super(props)

    this._monitorChildNode = {}
    this.observeAll.bind(this)
    this.unobserveAll.bind(this)
    this.onIntersectionAll.bind(this)
    this.onIntersectionEach.bind(this)
    this.state = {
      intersecting: {}
    }
  }

  componentDidMount() {
    this.observer = new window.IntersectionObserver(
      this.onIntersectionAll,
      { threshold: 0.25 }
    )

    this.observeAll()
  }

  componentDidUpdate() {
    this.unobserveAll()
    this.observeAll()
  }

  componentWillUnmount() {
    this.unobserveAll()
  }

  observeAll() {
    Object.values(this._monitorChildNode).forEach(node => {
      this.observer.observe(node)
    })
  }

  unobserveAll() {
    Object.values(this._monitorChildNode).forEach(node => {
      this.observer.unobserve(node)
    })
  }

  onIntersectionAll(entries) {
    entries.forEach(this.onIntersectionEach)
  }

  onIntersectionEach(entry) {
    const matchedKey = getKeyByValue(this._monitorChildNode, entry.target)

    if (!matchedKey) return

    const { intersecting } = this.state
    const previouslyIntersected = intersecting[matchedKey]
    const currentlyIntersected = entry.isIntersecting

    if (currentlyIntersected == previouslyIntersected) return

    this.setState({
      intersecting: {
        ...intersecting,
        [matchedKey]: currentlyIntersected
      }
    })
  }

  render() {
    const { intersecting } = this.state;

    return Children.map(this.props.children, (child, index) =>  {
      const className = intersecting && intersecting[index] ? 'in-view' : null
      return (
        <div className={className} ref={node => {
          this._monitorChildNode[index] = node

          const { ref } = child
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}>{child}</div>
      )
    })
  }
}