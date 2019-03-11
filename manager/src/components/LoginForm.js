import React, { Component } from 'react';
import {Card, CardSection, Input, Button} from './common'
import {emailChanged} from "../actions"
import {connect} from 'react-redux';
class LoginForm extends Component {
     onEmailChange(text ){

    }
    render(){
        return (
            <Card>
                <CardSection>
                    <Input label="Email" 
                            placeholder="email@gmail.com" />
                </CardSection>
                    <Input secureTextEntry 
                    label="Password"
                    placeholder="password" 
                    onChangeText={this.onEmailChange.bind(this)}/>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        )
    }
}
export default connect(null, emailChanged ) (LoginForm);