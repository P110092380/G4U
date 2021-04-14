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
        pSID:'',
        pPrice:'',
        shipping:'',
        pQuantity:'',
        bID:'',
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
                    <label className="subtitle">Order date</label>
                    <input type="formDate" id="Date" name="date" value={this.state.Date} onChange={e => this.setState({date :e.target.value})} />
                    <form action="#">
                      <label className="subtitle">Product Supplier ID</label>
                      <input type="formText" id="pSID" name="pSID" value={this.state.pSID} onChange={e => this.setState({pSID:e.target.value})} />
                      <label className="subtitle">Product price</label>
                      <input type="formText" id="pPrice" name="pPrice" value={this.state.pPrice} onChange={e => this.setState({pPrice:e.target.value})} />
                      <label className="subtitle">Shipping days</label>
                      <input type="formText" id="shipping" name="shipping" value={this.state.eID} onChange={e => this.setState({shipping:e.target.value})} />
                      <label className="subtitle">Product quantity</label>
                      <input type="formText" id="pQuantity" name="pQuantity" value={this.state.pQuantity} onChange={e => this.setState({pQuantity:e.target.value})} />
                      <label className="subtitle">Brranch ID</label>
                      <input type="formText" id="bID" name="bID" value={this.state.eID} onChange={e => this.setState({bID:e.target.value})} />
                    </form>
                    <Link to="/OrderRequest" className="btn btn-primary" role="button">Submit order</Link>
                </form>
          </div>
        </div>
      );
    }
  }
  
  export default Login;