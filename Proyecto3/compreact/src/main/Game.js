import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Grid,
  Chip,
} from "@material-ui/core";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  gridLayout: {
    paddingTop: "30px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  title: {
    color: "white",
  },
  tags: {
    color: "white",
    fontSize: 13,
  },
  description: {
    color: "white",
    fontSize: 13,
  },
  chip: {
    minWidth: 200,
  },
}));

const Game = () => {
  const classes = useStyles();
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);
  const imgUrl = "https://i.ibb.co/dWdJ3HK/valorant.png";

  return (
    <>
      <AppBar position="static" style={{ background: "#24050C" }}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            size="medium"
            edge="start"
            onClick={() => navigate("/explorar")}
          >
            <ArrowBackIcon style={{ fill: "#FFFFFF" }} />
          </IconButton>
          <Typography align="center" variant="h4">
            Competeer
          </Typography>
          <IconButton size="medium" edge="end">
            <FavoriteIcon style={{ fill: "#FFFFFF" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignContent="center"
        className={classes.gridLayout}
      >
        <Grid
          item
          container
          xs={10}
          alignContent="center"
          justifyContent="center"
          spacing={5}
        >
          <Grid item>
            <img
              src={imgUrl}
              style={{ width: 200, height: 200, borderRadius: "50%" }}
            />
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Typography variant="h4" align="center" className={classes.title}>
              VALORANT
            </Typography>
            <Grid item container spacing={1}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  align="right"
                  className={classes.tags}
                >
                  Tactical Shooter
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.tags}
                >
                  PC
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              align="center"
              className={classes.description}
            >
              VALORANT es un shooter táctico 5v5 basado en personajes que está
              ambientado en un escenario internacional. Sed más listos que
              vuestros oponentes, superadlos con grandes jugadas y eclipsadlos
              con habilidades tácticas, armas precisas y trabajo en equipo
              adaptable.
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Chip
              clickable
              color="primary"
              label="Equipos"
              className={classes.chip}
              icon={<ArrowForwardIcon />}
              onClick={() => console.log("click")}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Game;
