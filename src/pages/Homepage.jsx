import React from 'react'
import data from '../helper/data'

function Homepage() {
  return (
    <div className="homePage">
      {data.map((e, index) => {
        return (
          <div key={index}>
            <div className="img-container">
              <img src={e.src.large} alt="e.alt" />
            </div>
            <p>{e.photographer}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage