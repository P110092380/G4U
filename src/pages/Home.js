import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './style.css'
import logo from './logo.PNG';
import {faStickyNote} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

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
                    <h1 className='title'> Gadgets 4 U </h1>
                    <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                      &nbsp;
                    </Grid>

                    <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px', paddingLeft:'20px', justifyContent:"center"}}>
                      <h2 className='subtitle'>Ordering system</h2>
                      <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                        <img src={logo} className="home-logo" alt="Company Logo"/>
                      </Grid>
                    </Grid>
                    <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                      &nbsp;
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
  