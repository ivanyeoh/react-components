import React from 'react'

export default ({ content, backgroundImage }) => {
  return (
    <div className="hero" style={{
      backgroundImage
    }}>
      <div className="content">
        {content}
      </div>
      <div className="mask"></div>
    </div>
  );
}