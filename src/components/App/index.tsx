import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Action} from 'redux-actions';

import {incFilter} from 'actions';
import {IFilter} from 'reducers';
const reactLogo = require('assets/img/react_logo.svg');


interface IProps extends IDispatchProps, IStateProps {}

interface IStateProps {
    filter: IFilter;
}

interface IDispatchProps {
    incFilter(): (dispatch: Dispatch<void>) => Action<void>;
}

class App extends React.Component<IProps, {}> {
    onClick = () => {
        this.props.incFilter();
    }

    render() {
        return (
            <div className="app">
                <h1 onClick={this.onClick}>12222!</h1>
                <p>Foo to the barz!!!</p>
                <img src={reactLogo} height="480"/>
            </div>
        );
    }
}

const mapStateToProps = ({filter}: IStateProps) => ({filter});
const mapDispatchToProps: IDispatchProps = {incFilter};

export default connect(mapStateToProps, mapDispatchToProps)(App);
