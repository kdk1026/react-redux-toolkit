import Left1 from './components/Left1';
import './style.css';
import Right1 from './components/Right1';
import store from './store/index';
import { Provider  } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

export let persistor = persistStore(store);

function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Left1 />
            <Right1 />
          </PersistGate>
        </Provider>
      </div>
    </div>
  );
}

export default App;
