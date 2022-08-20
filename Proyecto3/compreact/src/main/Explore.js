import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Chip,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
  CircularProgress,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import StarIcon from "@material-ui/icons/Star";
import { useEffect, useState } from "react";

import FavoritosGrid from "./ExploreGrids/FavoritosGrid";
import MainGrid from "./ExploreGrids/MainGrid";
import axios from "axios";
import MockFavoritos from "./ExploreGrids/MockFavoritos";

import { motion } from "framer-motion";

const useStyles = makeStyles({
  stickToBottom: {
    background: "#24050C",
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  gridLayout: {
    paddingTop: "10px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  appBarGrid: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
});

const navStyles = makeStyles({
  root: {
    color: "white",
    "&$selected": {
      color: "#134074",
    },
  },
  selected: {},
});

const Explore = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const navClasses = navStyles();
  const [model, setModel] = useState({ current: "juegos", data: null });

  useEffect(() => {
    const getJuegos = async () => {
      const juegosResponse = await axios.get(
        "http://localhost:3000/explorar/juegos"
      );
      setModel({ current: "juegos", data: juegosResponse.data });
    };

    const getEquipos = async () => {
      const equiposResponse = await axios.get(
        "http://localhost:3000/explorar/equipos"
      );
      setModel({ current: "equipos", data: equiposResponse.data });
    };

    const getFavoritos = async () => {};

    if (model?.current == "juegos") {
      getJuegos();
    } else if (model?.current == "equipos") {
      getEquipos();
    }
  }, [model.current]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AppBar position="static" style={{ background: "#24050C" }}>
        <Toolbar>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignContent="center"
            spacing={2}
            className={classes.appBarGrid}
          >
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                {!!value ? "Favoritos" : "Explorar"}
              </Typography>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={2}>
                <Chip
                  clickable
                  color={model.current === "juegos" ? "secondary" : "primary"}
                  label="Juegos"
                  onClick={() => setModel({ ...model, current: "juegos" })}
                />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Chip
                  clickable
                  color={model.current === "equipos" ? "secondary" : "primary"}
                  label="Equipos"
                  onClick={() => setModel({ ...model, current: "equipos" })}
                />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {!model?.data ? (
        <CircularProgress />
      ) : !value ? (
        <MainGrid classes={classes} data={model.data} show={model.current} />
      ) : (
        <FavoritosGrid classes={classes} data={MockFavoritos(model.current)} />
      )}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.stickToBottom}
        classes={navClasses}
      >
        <BottomNavigationAction
          classes={navClasses}
          label="Explorar"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          classes={navClasses}
          label="Favorites"
          icon={<StarIcon />}
        />
      </BottomNavigation>
    </motion.div>
  );
};

export default Explore;
