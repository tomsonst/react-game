import React from 'react';

import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
          <div className="github">
            <img src={window.location.origin + '/github.png'} className="github-img"/>
            <a href="https://github.com/tomsonst" className="github-account">tomsonst</a>
          </div>
          <span className="year">2021</span>
          <div className="rss">
            <a href="https://rs.school/">
              <img src={window.location.origin + '/rss.svg'} className="rss-img"/>
            </a>
          </div>
      </div>
    );
  }
}