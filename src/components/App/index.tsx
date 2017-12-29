import React from 'react';
import {connect} from 'react-redux';
import {Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import {Dispatch} from 'redux';
import {Action} from 'redux-actions';

import {incFilter} from 'actions';
import HelloReact from 'components/HelloReact';
import {IFilter} from 'models';


export interface IProps extends IDispatchProps, IStateProps, RouteComponentProps<any> {}

interface IStateProps {
    filter: IFilter;
}

interface IDispatchProps {
    incFilter(): (dispatch: Dispatch<void>) => Action<void>;
}

class App extends React.Component<IProps, {}> {
    renderHelloReact = (props: IProps) => () => <HelloReact {...props} />;

    render() {
        return (
            <Switch>
                <Route exact path="/test" render={this.renderHelloReact(this.props)} />
            </Switch>
        );
    }
}

const mapStateToProps = ({filter}: IStateProps) => ({filter});
const mapDispatchToProps: IDispatchProps = {incFilter};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
