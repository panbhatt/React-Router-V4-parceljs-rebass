import React from 'react';
import { Panel, PanelHeader, PanelFooter, Box, Subhead, Container, Label, Input, Button } from 'rebass';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        console.log("COMING login");
        let user = {

            name: 'Ram',

            authorized: true
        }

        localStorage.setItem("user", JSON.stringify(user));
        this.props.history.push("/user");
    }

    render() {
        return (
            <div>
                <br /><br />
                <Container style={{ "display": 'flex', "alignItems": "center", "justifyContent": "center" }}>
                    <Panel color='blue'>
                        <PanelHeader
                            color='white'
                            bg='green'>
                            LOGIN FORM
            </PanelHeader>
                        <Box p={3}>
                            <Subhead>
                                <Label>
                                    Enter UserName
                            </Label><br />

                                <Input
                                    type="text"
                                /><br />

                                <Label>
                                    Enter Password
                            </Label><br />

                                <Input
                                    placeholder='Password' type="password"
                                />
                            </Subhead><br />
                        </Box>
                        <PanelFooter color='blue'>
                            <Button
                                children='Login' onClick={this.handleLogin}
                            />

                            <Button
                                children='Cancel'
                            />
                        </PanelFooter>
                    </Panel>
                </Container>
            </div>
        );
    }

}