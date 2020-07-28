import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import rootReducers from './reducers'
import App from './component/App';


const store = createStore(rootReducers, compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>

, document.getElementById('root'));