import React from 'react';
import AuthForm from './AuthForm';
import mutation from "../mutations/Login";
import { graphql } from 'react-apollo';
import query from "../queries/CurrentUser";
import {hashHistory} from "react-router"
class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={ errors: [] }
    }
    componentWillUpdate(nextProps){
        if(!this.props.data.user&&nextProps.data.user){
            hashHistory.push("/dashboard")
        }
    }
    onSubmit({email, password}){
        event.preventDefault();
        this.props.mutate({
            variables:{email, password},
            refetchQueries: [{ query }]
        }).catch(response=>{
            const errors=response.graphQLErrors.map(error=>error.message);
            this.setState({errors})
        })
    }
    render(){
        return ( 
            <div>
                <h3>Login</h3>
                <AuthForm 
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)}
                    />
            </div>
        )
    }
};

export default graphql(query)(graphql(mutation)(LoginForm));