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
        <Container maxWidth="lg">
          <main>
            <div>
                <Grid container spacing={1}>
                    <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"left"}}>
                      &nbsp;
                    </Grid>
                  
                    <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center", backgroundColor: "#ededed" }}>
                    
                        <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                            &nbsp;
                        </Grid>
                        <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                            &nbsp;
                        </Grid>
                        <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                            <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px',paddingTop:'10px', justifyContent:"center"}}>      
                                <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                    <h1 className='title'> Logged Out </h1>
                                    <h2 className='subtitle'>Do you wish to log in?</h2>
                                </Grid>
                                <form className='form'>
                                    <Link to="/" className="btn btn-primary" role="button">Login</Link>
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
  