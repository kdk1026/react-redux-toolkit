import Left1 from './components/Left1';
import './style.css';
import Right1 from './components/Right1';
import store from './store/index';
import { Provider  } from 'react-redux';

function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

export default App;
