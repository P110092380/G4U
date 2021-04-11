import React from 'react';
import './Form.css'
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        eID: '',
        newPassword: '',
        pwConfimred:'',
      };
    }
    handleFormSubmit(event) {
      event.preventDefault();
      console.log(this.state)
    }
    
    render() {
      return (
        <div className="Form">
            <h1 className="title">Login</h1>
            <br/>
            <div>
                <form action="#"/*just add the php name here*/>
                    <label className="subtitle">Employee ID &nbsp;</label>
                    <input type="loginText" id="eID" name="eID" value={this.state.eID} onChange={e => this.setState({eID:e.target.value})} />
                    <label className="subtitle">New password &nbsp;</label>
                    <input type="loginPassword" id="newPassword" name="newPassword" value={this.state.newPassword} onChange={e => this.setState({newPassword:e.target.value})} />                    
                    <label className="subtitle">Confirm password &nbsp;</label>
                    <input type="loginPassword" id="pwConfirmed" name="pwconfirmed" value={this.state.pwconfirmed} onChange={e => this.setState({pwconfirmed:e.target.value})} />
                    <div>
                      <Link to="/Home" className="btn btn-primary" role="button">Change password</Link>
                    </div>
                </form>
          </div>
        </div>
      );
    }
  }
  
  export default Login;