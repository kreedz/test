import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import App from 'components/App';
import configureStore from 'store';


const rootEl = document.getElementById('root');
const store = configureStore();
const renderApp = () =>
    render(
        <Provider store={store}>
            <AppContainer>
                <HashRouter>
                    <App/>
                </HashRouter>
            </AppContainer>
        </Provider>,
        rootEl
    );

renderApp();

if (module.hot) {
    module.hot.accept('components/App', () => {
        renderApp();
    });
}
