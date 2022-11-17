import React from 'react';

function Nav({ Page, handleSetPage }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handleSetPage('aboutMe')}

          className={Page === 'aboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#mywork"
          onClick={() => handleSetPage('myWork')}

          className={Page === 'myWork' ? 'nav-link active' : 'nav-link'}
        >
          My Work
        </a>
      </li>
    </ul>
  );
}

export default Nav;
