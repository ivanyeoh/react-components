import React, { Fragment } from 'react'

const RightFigureArticle = ({ title, children, figure, figcaption }) => (
  <Fragment>
    <h2>{title}</h2>
    <figure>
      {children}
      <figcaption>{figcaption}</figcaption>
    </figure>

    {children}
  </Fragment>
)

const SplitArticle = ({ title, children, figure }) => (
  <Fragment>
    <div className="left">
      <h2>{title}</h2>
      {children}
    </div>
    <div className="right">
      {figure}
    </div>
  </Fragment>
)

const PlainArticle = ({ title, children }) => (
  <Fragment>
    <h2>{title}</h2>
    <div className="content">
      {children}
    </div>
    <div className="mask"></div>
  </Fragment>
)

const renderArticle = (type, props) => {
  switch (type) {
    case 'right-figure':
      return <RightFigureArticle {...props} />
    case 'split':
      return <SplitArticle {...props} />
    default:
      return <PlainArticle {...props} />
  }
}

export default (props) => {
  const { theme = 'dark', type } = props

  return (
    <article className={`${theme} ${type}`}>
      {renderArticle(type, props)}
    </article>
  );
}