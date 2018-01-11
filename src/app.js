import React, { Component } from 'react';
import Header from './common/Header';
import Main from './common/Main';
import { Provider } from 'rebass';
import {BrowserRouter} from 'react-router-dom' ;

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Provider>
                    <Header />
                    <Main/>
                </Provider>
            </BrowserRouter>
        );
    }
};