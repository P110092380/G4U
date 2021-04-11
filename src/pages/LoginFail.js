import React from 'react';
import './Form.css'
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        eID: '',
        ePassword: '',
      };
    }
    handleFormSubmit(event) {
      event.preventDefault();
      console.log(this.state)
    }
    
    render() {
      return (
        <div className="Form">
            <h1 className="title">Login failed</h1>
            <br/>
            <div>
                <form action="#"/*just add the php name here*/>
                    <h3 className="subtitle">Login failed, please try again</h3>
                    <label className="subtitle">Employee ID &nbsp;</label>
                    <input type="loginText" id="eID" name="eID" value={this.state.eID} onChange={e => this.setState({eID:e.target.value})} />
                    <label className="subtitle">Password &nbsp;</label>
                    <input type="loginPassword" id="ePassword" name="ePassword" value={this.state.ePassword} onChange={e => this.setState({ePassword:e.target.value})} />
                    <div>
                        <Link to="/Password" className="btn btn-primary" role="button">Forgot Password</Link>
                        &nbsp;
                        <Link to="/Home" className="btn btn-primary" role="button">Login</Link>
                    </div>
                </form>
            </div>
        </div>
      );
    }
  }
  
  export default Login;