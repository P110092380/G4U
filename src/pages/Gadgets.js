import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './style.css'
import {faStickyNote} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import USBPowerBank1 from './USBPowerBank1.jpg'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  export default function Home() {
    const classes = useStyles();
  
    return (
    <React.Fragment>
        <Container maxWidth="lg" style={{backgroundColor:" #D8D8D8"}}>
          <main>
            <div>
                <Grid container spacing={1}>
                  <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"left"}}>
                    <Link to="/Notifications" className="item"><FontAwesomeIcon icon={faStickyNote}/> &nbsp; Notifications </Link>
                  </Grid>
                  
                  <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center", backgroundColor: "#ededed" }}>
                    <h1 className='title'> Gadgets </h1>
                    <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                        </Grid>
                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                    <div>
                        <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='product-title'>USB Power Bank 10000mAH</h5>
                            <p className='product-info'>Code: PWR41</p>
                        </div>
                        <select className='supplier-info'>
                            <option selected value="supplier">Choose Supplier</option>
                            <option value="PWR41_BI">BI, £9.95, 5 days</option>
                            <option value="PWR41_BS">BS, £9.95, 5 days</option>
                        </select>
                        <div className="btn product-button" role="button">Add to order</div>
                    </Grid>

                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', paddingLeft:'20px', justifyContent:"center"}}>
                        <div>
                            <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='product-title'>USB Power Bank 20000mAH</h5>
                            <p className='product-info'>Code: PWR43</p>
                        </div>
                        <select className='supplier-info'>
                            <option selected value="supplier">Choose Supplier</option>
                            <option value="PWR43_BI">BI, £18.99, 5 days</option>
                            <option value="PWR43_BS">BS, £18.64, 5 days</option>
                        </select>
                        <div className="btn product-button" role="button">Add to order</div> 
                    </Grid>
                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                    <div>
                        <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='product-title'>USB Power Bank 25800mAH</h5>
                            <p className='product-info'>Code:PWR44</p>
                        </div> <select className='supplier-info'>
                            <option selected value="supplier">Choose Supplier</option>
                            <option value="PWR44_BI">BI, £19.99, 5 days</option>
                            <option value="PWR44_BS">BS, £19.00, 5 days</option>
                        </select>
                        <div className="btn product-button" role="button">Add to order</div>
                        
                    </Grid>
                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                    <div>
                        <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='product-title'>Spider Catcher</h5>
                            <p className='product-info'>Code:SC01</p>
                        </div>    <select className='supplier-info'>
                            <option selected value="supplier">Choose Supplier</option>
                            <option value="SC01_SH">SH, £1.58, 20 days</option>
                            <option value="SC01_BS">BS, £1.99, 3 days</option>
                        </select>
                        <div className="btn product-button" role="button">Add to order</div>
                    </Grid>
                    
                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', paddingLeft:'20px', justifyContent:"center"}}>
                        <div>
                            <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='product-title'>Portable Personal Fan</h5>
                            <p className='product-info'>Code: PPF03</p>
                        </div>    
                        <select className='supplier-info'>
                            <option selected value="supplier">Choose Supplier</option>
                            <option value="PPF_BI">BI, £5.65, 5 days</option>
                            <option value="PPF_SH">SH, £4.80, 15 days</option>
                        </select>
                        <div className="btn product-button" role="button">Add to order</div>
                    </Grid>
                    
                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', paddingLeft:'20px', justifyContent:"center"}}>
                        <div>
                            <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='product-title'>Star Wars USB Cup Warmer: BB8</h5>
                            <p className='product-info'>Code: SW08</p>
                        </div>    
                        <select className='supplier-info'>
                            <option selected value="supplier">Choose Supplier</option>
                            <option value="SW_BS">BS, £10.99, 5 days</option>
                            <option value="SW_BI">BI, £9.99, 4 days</option>
                            <option value="SW_SH">SH, £9.85, 25 days</option>
                        </select>
                        <div className="btn product-button" role="button">Add to order</div>  
                    </Grid>
                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', paddingLeft:'20px', justifyContent:"center"}}>
                        <div>
                            <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='product-title'>Polariod Play 3D Pen</h5>
                            <p className='product-info'>Code: POL03</p>
                        </div>    
                        <select className='supplier-info'>
                            <option selected value="supplier">Choose Supplier</option>
                            <option value="SW">BI, £9.95, 5 days</option>
                            <option value="PWR_BS">BS, £9.95, 5 days</option>
                        </select>
                        <div className="btn product-button" role="button">Add to order</div>  
                    </Grid>
                    <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                      &nbsp;
                    </Grid>  
                  </Grid>
                  
                  <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                    <Link to="/*" className="item"><FontAwesomeIcon icon={faBriefcase}/>&nbsp; Orders </Link>
                    <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} ></Grid>
                    <Link to="/OrderForm" className="btn button" role="button">Order Form</Link>
                    </Grid>
                  </Grid>
                </div>
            </main>         
        </Container>
        <div> </div>
    </React.Fragment>
    );
  }
  