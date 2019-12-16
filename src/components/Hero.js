import React from 'react'

export default ({ content }) => {
  return (
    <div className="hero">
      <div className="content">
        {content}
      </div>
      <div className="mask"></div>
    </div>
  );
}