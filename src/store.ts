import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from 'reducers';


const configureStore = () => {
    const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('reducers', () => {
                const nextRootReducer = require('reducers').default;
                store.replaceReducer(nextRootReducer);
            });
        }
    }

    return store;
};

export default configureStore;
