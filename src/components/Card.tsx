import { memo } from 'react';

import './styles/card.css';

function Card({ id, content }: { id: string; content?: string }) {
  return (
    <div
      data-id={id}
      style={{
        maxWidth: '100%',
        width: '100%',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        caretColor: 'rgb(55, 53, 47)',
        padding: '3px 2px',

        outline: 0,
      }}
      placeholder="내용을 입력하세요."
      spellCheck
      contentEditable
      suppressContentEditableWarning
    >
      {content || ''}
    </div>
  );
}

export default memo(Card);
