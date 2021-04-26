import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

// import css
import './css/Header.css';

export default function Header() {
  return (
    <>
      <header>
        <div className="header-item-container">
          <div className="header-item">
            <div className="header-title">
              <div className="icon-container">
                <button>
                  <FontAwesomeIcon icon={faBars} size="2x" />
                </button>
              </div>
              <div>
                <font style={{ fontSize: '22px', fontWeight: 700 }}>Google 뉴스</font>
              </div>
            </div>
          </div>
          <div className="header-item">
            <form className="search-container">
              <div className="icon-container">
                <button>
                  <FontAwesomeIcon
                    icon={faSearch}
                    size="lg"
                    style={{ background: 'transparent', opacity: 0.5 }}
                  />
                </button>
              </div>
              <div className="input-container">
                <input id="search-input" />
              </div>
            </form>
          </div>
          <div className="header-item">기타</div>
        </div>
      </header>
    </>
  );
}
