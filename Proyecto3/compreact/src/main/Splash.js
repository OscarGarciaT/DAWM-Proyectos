import React from "react";
import { Chip, Grid, makeStyles, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    margin: 0,
  },
  slogan: {
    fontSize: 18,
    color: "white",
  },
  appName: {
    color: "white",
    fontSize: 30,
  },
});

const Splash = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
      spacing={6}
      xs={12}
    >
      <Grid item xs={12}>
        <Typography variant="h1" align="center" className={classes.appName}>
          Competeer
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img
          src={require("../assets/imagenes/gamenight.png")}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={9}>
        <Typography align="center" variant="body1" className={classes.slogan}>
          Your favorite e-sports content at the reach of your hand
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Chip
          clickable
          color="primary"
          label="Start"
          icon={<ArrowForwardIcon />}
          onClick={() => navigate("/explorar")}
        />
      </Grid>
    </Grid>
  );
};

export default Splash;
