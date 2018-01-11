import React from 'react';
import {Switch, Route} from 'react-router-dom' ;

import LoginForm from './../login/LoginForm' ;
import RegisterForm from './../login/RegisterForm' ;


export default class AuthorizedLayout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user : JSON.parse(localStorage.getItem("user"))
        };
        console.log(JSON.stringify(this.state)) ;
    }

    componentWilMount(){
        console.log(localStorage.getItem("user")) ;
        this.setState({
            user : localStorage.getItem("user")
        })
    }


    render()
    {
        return(
            <div>This is Authorized layout
                Username :{this.state.user.name} </div>
        );
    }
}