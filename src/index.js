import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.js'
import rootReducer from './reducers/index.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('container'))
