import React from 'react';
import './Form.css'
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        eID: '',
        eEmail: '',
        date:'',
        items:'',
      };
    }
    handleFormSubmit(event) {
      event.preventDefault();
      console.log(this.state)
    }
    
    render() {
      return (
        <div className="OrderForm">
            <h1 className="title">Order form</h1>
            <div>
                <form action="#"/*just add the php name here*/>
                    <label className="subtitle">Employee ID</label>
                    <input type="formText" id="eID" name="eID" value={this.state.eID} onChange={e => this.setState({eID:e.target.value})} />
                    <label className="subtitle">Email</label>
                    <input type="formEmail" id="eEmail" name="eEmail" value={this.state.eEmail} onChange={e => this.setState({eEmail:e.target.value})} />
                    <label className="subtitle">Date</label>
                    <input type="formDate" id="Ddte" name="date" value={this.state.Date} onChange={e => this.setState({date :e.target.value})} />
                    <label className="subtitle">Items</label>
                    <textarea type="formItems" id="items" name="items" value={this.state.items} onChange={e => this.setState({items:e.target.value})} />
                    <Link to="/OrderRequest" className="btn btn-primary" role="button">Submit order</Link>
                </form>
          </div>
        </div>
      );
    }
  }
  
  export default Login;