import React, { Fragment } from 'react'

const RightFigureArticle = ({ title, content, figure, figcaption }) => (
  <Fragment>
    <h2>{title}</h2>
    <figure>
      {figure}
      <figcaption>{figcaption}</figcaption>
    </figure>

    {content}
  </Fragment>
)

const SplitArticle = ({ title, content, figure }) => (
  <Fragment>
    <div className="left">
      <h2>{title}</h2>
      {content}
    </div>
    <div className="right">
      {figure}
    </div>
  </Fragment>
)

const PlainArticle = ({ title, content }) => (
  <Fragment>
    <h2>{title}</h2>
    <div className="content">
      {content}
    </div>
    <div className="mask"></div>
  </Fragment>
)

const renderArticle = (type, props) => {
  switch (type) {
    case 'right-figure':
      <RightFigureArticle {...props} />
      break;
    case 'split':
      <SplitArticle {...props} />
      break;
    default:
      <PlainArticle {...props} />
      break;
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