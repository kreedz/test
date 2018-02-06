import React from 'react';
import {Button} from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import {IProps} from 'components/App';
import Header from 'components/Header';
const reactLogo = require('assets/img/react_logo.svg');

import styles from './styles.css';


const HelloReact = (props: IProps) => (
    <div styleName="hello-react">
        <Button onClick={props.incFilter}>112222!</Button>
        <Header />
        <img src={reactLogo} height="480"/>
    </div>
);

export default CSSModules(HelloReact, styles);
