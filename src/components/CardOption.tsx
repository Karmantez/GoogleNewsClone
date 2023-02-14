import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { ReactComponent as AddPng } from '../assets/add.svg';
import { ReactComponent as MenuPng } from '../assets/menu.svg';

import { activateMenu } from '../store/cardOption';
import { RootState } from '../store';

import './styles/cardOption.css';

export default function CardOption() {
  const dispatch = useDispatch();

  const { showOption, rectOffset } = useSelector(
    (state: RootState) => state.cardOption,
    shallowEqual,
  );
  const { top } = rectOffset;

  const handleClick = (isOption: boolean) => {
    if (isOption) {
      dispatch(activateMenu(true));
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        top,
        width: '50px',
        height: '30px',

        transform: 'translate(-52px, 0px)',
        transition: 'all 0.25s',
        opacity: showOption ? 1 : 0,
      }}
    >
      <div
        style={{
          width: '24px',
        }}
      >
        <div className="card-option">
          <AddPng width={12} height="100%" />
        </div>
      </div>

      <div
        style={{
          width: '24px',
        }}
      >
        <div className="card-option" onClick={() => handleClick(true)}>
          <MenuPng width={15} height="100%" />
        </div>
      </div>
    </div>
  );
}
