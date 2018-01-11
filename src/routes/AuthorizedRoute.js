import React from 'react';
import { AuthorizedLayout} from './../layout/AuthorizedLayout';
import { UnAuthorizedLayout} from './../layout/UnAuthorizedLayout';

export default class AuthorizedRoute extends React.Component {

    constructor(props){
        super(props); 
        this.checkForUser = this.checkForUser.bind(this);
    }

    componentWillMount() {
        checkForUser(); 
    }

    checkForUser() {
        let user = localStorage.getItem("user") ;
        if(!user) {
            this.setState({ authorized : false  }) ;
        } else {
            this.setState({ authorized : true  }) ;
        }
    }

    render() {
        let authorized = this.state.authorized ; 
        return (

            authorized ? 
                <AuthorizedLayout {...this.props}/>
            :  <UnAuthorizedLayout {...this.props}/>
        );
    }


}