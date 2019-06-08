import React, { Component } from 'react';
import './Header.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Header extends Component {
  render() {
    const leftarrow = <FontAwesomeIcon icon={faArrowLeft} />

    return (
      <a href='#'>
        <header>
           <div className="header">
              <div className="header-text">کارناوالِ جدید رو دیدی؟</div>
              <div className="header-icon"> ببینم {leftarrow} </div>
           </div>
        </header>
      </a>
    );
  }
}

export default Header;