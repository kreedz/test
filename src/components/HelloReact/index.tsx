import React from 'react';

import {IProps} from 'components/App';
const reactLogo = require('assets/img/react_logo.svg');


const HelloReact = (props: IProps) => (
    <div className="app">
        <h1 onClick={props.incFilter}>112222!</h1>
        <p>Foo to the barz!!!</p>
        <img src={reactLogo} height="480"/>
    </div>
);

export default HelloReact;

