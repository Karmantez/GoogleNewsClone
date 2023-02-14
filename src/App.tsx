import { useDispatch } from 'react-redux';
import CardMenu from './components/CardMenu';
import CardOption from './components/CardOption';
import Overlay from './components/Overlay';
import CardList from './containers/CardList';
import { activateOption } from './store/cardOption';

function App() {
  const dispatch = useDispatch();
  return (
    <div
      className="App"
      style={{ paddingLeft: '240px' }}
      onMouseLeave={() => {
        dispatch(activateOption(false));
      }}
    >
      <div style={{ position: 'relative' }}>
        <Overlay />
        <CardOption />
        <CardMenu />
      </div>

      <div>
        <CardList />
      </div>
    </div>
  );
}

export default App;
