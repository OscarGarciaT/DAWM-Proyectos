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
import JuegosGrid from "./ExploreGrids/JuegosGrid";

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
});

const getJuegos = () => {
  return {
    1: {
      id: 1,
      name: "VALORANT",
      imgUrl: "https://i.ibb.co/dWdJ3HK/valorant.png",
    },
    2: {
      id: 2,
      name: "VALORANT",
      imgUrl: "https://i.ibb.co/dWdJ3HK/valorant.png",
    },
    3: {
      id: 3,
      name: "VALORANT",
      imgUrl: "https://i.ibb.co/dWdJ3HK/valorant.png",
    },
    4: {
      id: 4,
      name: "VALORANT",
      imgUrl: "https://i.ibb.co/dWdJ3HK/valorant.png",
    },
    5: {
      id: 5,
      name: "VALORANT",
      imgUrl: "https://i.ibb.co/dWdJ3HK/valorant.png",
    },
    6: {
      id: 6,
      name: "VALORANT",
      imgUrl: "https://i.ibb.co/dWdJ3HK/valorant.png",
    },
    7: {
      id: 7,
      name: "VALORANT",
      imgUrl: "https://i.ibb.co/dWdJ3HK/valorant.png",
    },
  };
};

const Explore = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const navClasses = navStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!value) {
      setData(getJuegos());
    }
  }, [value]);

  return (
    <>
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
                  color="primary"
                  label="Juegos"
                  onClick={() => console.log("click")}
                />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Chip
                  clickable
                  color="primary"
                  label="Equipos"
                  onClick={() => console.log("click")}
                />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {data ? (
        !!value ? (
          <FavoritosGrid classes={classes} data={data} />
        ) : (
          <JuegosGrid classes={classes} data={data} />
        )
      ) : (
        <CircularProgress />
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
    </>
  );
};

export default Explore;
