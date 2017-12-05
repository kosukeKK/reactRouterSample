import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import {createStore} from 'redux';
import reducers from './reducers';
import { Route, BrowserRouter } from 'react-router-dom';


const store = createStore(reducers);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);


