import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginForm from './../login/LoginForm';
import RegisterForm from './../login/RegisterForm';


export default class UnauthorizedLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props.match);
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route path={`${this.props.match.path}/login`}  component={LoginForm} />
                    <Route path={`${this.props.match.path}/register`} component={RegisterForm} />
                </Switch>
            </div>
        );
    }
}