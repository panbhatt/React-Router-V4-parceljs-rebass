import React from 'react';
import {
    Toolbar,
    NavLink
} from 'rebass';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Toolbar>
            <NavLink>
                React Router V4 Sample App.
        </NavLink>
            <NavLink ml='auto'>
                Login
        </NavLink>
            <NavLink>
                Register
        </NavLink>
        </Toolbar>);
    }
}