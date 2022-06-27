import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './CounterApp';
// import { PokemonApp } from './PokemonApp';
import './styles.css';

import { store } from './store';
import { Provider } from 'react-redux';
import { TodoApp } from './store/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
