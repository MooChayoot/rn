import React, { Component } from 'react';
import history from '../utils/history';
import { Router, Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import {
    Home
} from '../components';

const { Content } = Layout;
class Routes extends Component {
    constructor() {
        super();
    }
    render() {

        return (
            <Layout>
                <Router history={history}>
                    <Content>
                        <Switch>
                            <Route path='/' render={props => (<Home {...props} />)} />
                        </Switch>
                    </Content>
                </Router>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));