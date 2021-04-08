import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './style.css'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  export default function OrderForm() {
    const classes = useStyles();
  
    return (
    <React.Fragment>
        <Container maxWidth="lg" style={{backgroundColor:" #D8D8D8"}}>
          <main>
            <div>
                <Grid container spacing={1}>
                    <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"left"}}>
                      &nbsp;
                    </Grid>
                  
                    <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center", backgroundColor: "#ededed" }}>
                    
                        <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                            &nbsp;
                        </Grid>
                        <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                            <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px',paddingTop:'10px', justifyContent:"center"}}>      
                                <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                    <h1 className='title'> Login failed </h1>
                                    
                                    <h2 className='subtitle'>Please re-enter your details</h2>
                                </Grid>
                                <form action="verifypw.php">
                                    <div className='form-inputs'>
                                        <label className='subtitle'>Employee ID &nbsp;</label>
                                        <input type='text' id="eID" name="employeeID"/>
                                    </div>
                                    <div className ='form-inputs'>
                                        <label className='subtitle'>Password &nbsp;</label>
                                        <input type='text' id="ePassword" name="ePassword"/>
                                    </div>
                                    <Link to="/Home" className="btn btn-primary" role="button">Login</Link>
                                </form>
                            </Grid>
                            <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                &nbsp;
                            </Grid>
                            <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                &nbsp;
                            </Grid>
                            <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                &nbsp;
                            </Grid>
                        </Grid>  
                        <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                         &nbsp;
                        </Grid>
                    </Grid>
                </Grid>  
            </div>
        </main>         
    </Container>
    </React.Fragment>
    );
  }
  