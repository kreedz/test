import React, {SFC} from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import {App} from 'components/App';
import store from 'store';

/*import 'bootstrap/dist/css/bootstrap.css';
import 'styles/styles.css';*/

const render = (Component: React.ComponentClass) => {
    ReactDOM.render(
            <AppContainer>
                <Component />
            </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('components/App', () => {
        alert('accept'); render(App);
    });
}
