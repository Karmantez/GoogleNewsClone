import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown, faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function ArticleFilter() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'flex-end' }}
      onClick={e => {
        console.log(e.target.value);
      }}
    >
      <div style={{ marginRight: 5 }}>
        <button>
          <FontAwesomeIcon icon={faSortUp} size="lg" />
        </button>
        <button>
          <FontAwesomeIcon icon={faSortDown} size="lg" />
        </button>
      </div>
      <div style={{ marginRight: 5 }}>
        <button>
          <FontAwesomeIcon icon={faNewspaper} size="lg" />
          10
        </button>
      </div>
      <div style={{ marginRight: 5 }}>
        <button>
          <FontAwesomeIcon icon={faNewspaper} size="lg" />
          20
        </button>
      </div>
    </div>
  );
}
