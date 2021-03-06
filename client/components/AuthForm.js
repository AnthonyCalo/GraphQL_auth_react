import React from 'react';
import mutation from "../mutations/Login";
import { graphql } from 'react-apollo';
class AuthForm extends React.Component{
    constructor(props){
        super(props);
        this.state={email: "", password: ""}
    }
    onSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render(){
        return ( 
            <div className="row">
                <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <label>Email</label>
                        <br/>
                        <input 
                            value={this.state.email} 
                            onChange={(e)=>this.setState({email: e.target.value})}
                        />
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <br/>
                        <input 
                            value={this.state.password} 
                            onChange={(e)=>this.setState({password: e.target.value})}
                        />
                    </div>
                    <div style={{color: "red"}} className="errors">
                        {this.props.errors.map((error, index)=><div key={index}>{error}</div>)}
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm;