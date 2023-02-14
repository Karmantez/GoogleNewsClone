import { MouseEvent, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { cloneDeep } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { activateOption, updateRectOffset } from '../store/cardOption';

import Card from '../components/Card';

export default function CardList() {
  const dispatch = useDispatch();

  const [state, setState] = useState<Array<{ id: string; content: string }>>([
    { id: uuidv4(), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: uuidv4(), content: 'Donec iaculis metus sit amet vestibulum porta.' },
    {
      id: uuidv4(),
      content: 'Cras ornare nunc et ipsum faucibus, at consectetur lorem tincidunt.',
    },
    { id: uuidv4(), content: 'Etiam in lectus rutrum, auctor dolor sit amet, bibendum tellus.' },
    { id: uuidv4(), content: 'Vestibulum aliquet ipsum a ligula mollis iaculis.' },
    { id: uuidv4(), content: 'Nulla sit amet nisi nec odio sollicitudin rutrum in nec orci.' },
    { id: uuidv4(), content: 'Sed placerat nibh quis elementum mattis.' },
    { id: uuidv4(), content: 'Fusce mollis nisl eget sem placerat tincidunt.' },
    { id: uuidv4(), content: 'Etiam pulvinar orci vitae fermentum auctor.' },
    { id: uuidv4(), content: 'Aliquam ut nibh feugiat, commodo magna sed, ultricies ipsum.' },
    { id: uuidv4(), content: 'In maximus justo congue massa consectetur efficitur.' },
  ]);

  const detectNewElement = (newId: string) => {
    const newElement: HTMLElement | null = document.getElementById(newId);

    if (newElement) {
      newElement.focus();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();

    const { code, shiftKey } = event;

    if (code === 'Enter') {
      if (shiftKey) {
        return;
      }
      event.preventDefault();

      const targetElement = event.target as HTMLElement;
      const { id: targetId } = targetElement.dataset;

      const newId = uuidv4();
      const newStateObj = { id: newId, content: '' };

      if (targetId) {
        const calledIndex = state.findIndex((cardObj) => cardObj.id === targetId);

        if (calledIndex >= 0) {
          const nextState = cloneDeep(state);
          nextState.splice(calledIndex + 1, 0, newStateObj);
          setState(() => nextState);
        }
      } else {
        setState((prevState) => [...prevState, newStateObj]);
      }
      detectNewElement(newId);
    } else if (code === 'ArrowUp' || code === 'ArrowDown') {
      const targetElement = event.target as HTMLElement;
      const content = targetElement.innerText;
      const anchorOffset = window.getSelection()?.anchorOffset || 0;

      console.log(content.length, window.getSelection(), anchorOffset);

      const focusedElement = (
        code === 'ArrowUp' ? targetElement.previousSibling : targetElement.nextSibling
      ) as HTMLElement;

      if (anchorOffset === 0 || content.length === anchorOffset) {
        console.log('?');
        if (focusedElement) focusedElement.focus();
        const newContent = focusedElement.innerText;
        window
          .getSelection()
          ?.getRangeAt(newContent.length <= anchorOffset ? newContent.length : anchorOffset);
      }
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 50 }}>
      <div
        style={{
          position: 'relative',
          lineHeight: 1.5,
          zIndex: 50,
        }}
        onKeyDown={handleKeyDown}
        role="textbox"
        tabIndex={0}
        onMouseOver={(event: MouseEvent<HTMLDivElement>) => {
          dispatch(activateOption(true));
          const targetEl: HTMLElement = event.target as HTMLElement;
          dispatch(updateRectOffset({ top: targetEl.offsetTop, left: targetEl.offsetLeft }));
        }}
      >
        {state.map((obj: { id: string; content: string }) => (
          <Card id={obj.id} content={obj.content} key={`section_${obj.id}`} />
        ))}
      </div>
    </div>
  );
}
