import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom' ;
import  UnauthorizedLayout from './../layout/UnauthorizedLayout' ;
import  AuthorizedLayout from './../layout/AuthorizedLayout' ;

import  AuthorizedRoute  from './../routes/AuthorizedRoute' ;

export default class Main extends React.Component {

    constructor(props){
        super(props); 
    }

   

    render() {
        return (
            <div>
               <Switch> 
                <Route  path="/auth"   component={UnauthorizedLayout} />
                <Route  path="/user"   component={AuthorizedLayout} />
                <Redirect to="/auth/login"/>
               </Switch> 
                
            Hello1
            </div>
           );
       
    }


}