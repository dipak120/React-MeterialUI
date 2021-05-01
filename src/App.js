import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyle from './styles/mainStyle';
import './styles/index.css';
import Icon from "@material-ui/core/Icon";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

function App() {
  const classes = useStyle();

  return (
    <React.Fragment>
    <Grid container className={classes.myContainer} spacing={2}>
      <Grid item xs={12}>
        <Box className={classes.IconPre}>
            <i class="fal fa-arrow-circle-left"></i>
        </Box>
        <Typography component="div" className={classes.headerText}>
          <Typography component="h1" className={classes.headerH1}>
              What We Do
          </Typography>
          <Typography component="p" className={classes.AfterHeaderText}>
            We develop successfull apps our  clients who range from<br/> 
             startup enterpreneurs to Fortune 500s.
          </Typography>
        </Typography>
        <Grid container justify="center">

            <Grid item className={classes.MobileSize}  style={{textAlign:'center'}}>
              <CardMedia
                className={classes.media}
                image="/images/img3.jpg"
              />
              <Paper className={classes.mybox1}>
              <Typography component="h2" className={classes.H2Text}>
                Moobile apps
              </Typography>
              <Typography component="p" className={classes.pText}>
                lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
              </Typography>
              {/* <Button variant="contained" color="" className={classes.ButtonFooter}>
                View All project
              </Button> */}
              </Paper>
            </Grid>

            <Grid item className={classes.transform} style={{textAlign:'center'}}>
              <CardMedia
                className={classes.media}
                image="/images/img1.jpg"
              />
              <Paper className={classes.mybox1}>
              <Typography component="h2" className={classes.H2Text}>
                Cutting EDGE
              </Typography>
              <Typography component="p" className={classes.pText}>
                lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              </Typography>
               <Button variant="contained" color="" className={classes.ButtonFooter}>
                Read more&nbsp;&nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>
              </Button>
              </Paper>
            </Grid>

            <Grid item className={classes.MobileSize} style={{textAlign:'center'}}>
              <CardMedia
                className={classes.media}
                image="/images/img2.jpg"
              />
              <Paper className={classes.mybox1}>
              <Typography component="h2" className={classes.H2Text}>
                Web<br/> development
              </Typography>
              <Typography component="p" className={classes.pText}>
                lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              </Typography>
              {/* <Button variant="contained" color="" className={classes.ButtonFooter}>
                View All project
              </Button> */}
              </Paper>
            </Grid>
        </Grid>
        <Box  className={classes.IconNext}>
            <i class="fal fa-arrow-circle-right"></i>
        </Box>
      </Grid>
      <Button variant="contained" color="" className={classes.ButtonFooter}>
        View All project
      </Button>
    </Grid>
  </React.Fragment>
  );
}

export default App;
