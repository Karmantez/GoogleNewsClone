import { useLayoutEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

import './styles/cardMenu.css';

export default function CardMenu() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { showMenu, rectOffset } = useSelector(
    (state: RootState) => state.cardOption,
    shallowEqual,
  );

  const { top } = rectOffset;

  return (
    <div
      ref={containerRef}
      id="card-menu"
      style={{
        position: 'absolute',
        top,
        visibility: showMenu ? 'visible' : 'hidden',
      }}
    >
      <div>menu 1</div>
      <div>menu 2</div>
      <div>menu 3</div>
      <div>menu 4</div>
      <div>menu 5</div>
    </div>
    // <div
    //   ref={containerRef}
    //   style={{ position: 'fixed', left: '316px', top: `${topOffset}px`, zIndex: 1000 }}
    // >
    //   <div
    //     style={{
    //       position: 'absolute',
    //       width: '100%',
    //       height: '100%',
    //       display: 'flex',
    //       flexDirection: 'column',
    //       justifyContent: 'center',
    //       alignItems: 'flex-end',
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         position: 'relative',
    //         flexDirection: 'row',
    //         transformOrigin: 'right 50%',
    //         right: '5px',
    //         top: '0px',
    //         opacity: 1,
    //       }}
    //     >
    //       <div
    //         style={{
    //           width: '270px',
    //           height: '320px',

    //           borderRadius: '4px',
    //           background: '#fff',
    //           maxWidth: 'calc(100vw - 24px)',
    //           boxShadow:
    //             'rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px',
    //           overflow: 'hidden',
    //         }}
    //       >
    //         <div>menu 1</div>
    //         <div>menu 2</div>
    //         <div>menu 3</div>
    //         <div>menu 4</div>
    //         <div>menu 5</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
