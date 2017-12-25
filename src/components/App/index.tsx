import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Action} from 'redux-actions';

import {incFilter} from 'actions';
import HelloReact from 'components/HelloReact';
import {IFilter} from 'models';


export interface IProps extends IDispatchProps, IStateProps {}

interface IStateProps {
    filter: IFilter;
}

interface IDispatchProps {
    incFilter(): (dispatch: Dispatch<void>) => Action<void>;
}

class App extends React.Component<IProps, {}> {
    render() {
        return (
            <HelloReact {...this.props} />
        );
    }
}

const mapStateToProps = ({filter}: IStateProps) => ({filter});
const mapDispatchToProps: IDispatchProps = {incFilter};

export default connect(mapStateToProps, mapDispatchToProps)(App);
