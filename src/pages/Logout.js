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
                    <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center" }}>
                        &nbsp;
                        <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                        &nbsp;
                        </Grid>
                        <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                            &nbsp;
                        </Grid>
                        <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px', paddingLeft:'20px', justifyContent:"center"}}>
                            <h1 className='title'> Logout? </h1>
                            <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                <form className='form'>
                                    <Link to="/Home" className="btn btn-primary" role="button">Return to homepage</Link>
                                    &nbsp;
                                    &nbsp;
                                    <Link to="/LoggedOut" className="btn btn-primary" role="button">Logout</Link>
                                </form>
                            </Grid>
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
            </div>
        </main>         
    </Container>
    </React.Fragment>
    );
  }
  