import { SyntheticEvent } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { activateMenu } from '../store/cardOption';

import { RootState } from '../store';

export default function Overlay() {
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state: RootState) => state.cardOption, shallowEqual);

  return showMenu ? (
    <div
      id="notion-editor_overlay"
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100vw',
        height: '100vh',
        zIndex: 999,
      }}
      onClick={(event: SyntheticEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        const id = target.getAttribute('id');

        if (id === 'notion-editor_overlay') {
          dispatch(activateMenu(false));
        }
      }}
    />
  ) : null;
}
