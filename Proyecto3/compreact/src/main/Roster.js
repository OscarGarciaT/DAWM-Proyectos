import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Grid,
  Box,
  Chip,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import { motion } from "framer-motion";
import PlayerCard from "./PlayerCard";

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
    marginBottom: "15px",
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
  box: {
    display: "flex",
    background: "#24050C",
    height: "25vh",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    overflowX: "auto",
    paddingLeft: 15,
    paddingBottom: 10,
    paddingTop: 10,
  },
  card: {
    minWidth: "40vw",
    marginRight: 10,
  },
}));

const Roster = () => {
  const classes = useStyles();
  const params = useParams();
  const navigate = useNavigate();

  const imgUrl = "https://static.thenounproject.com/png/149946-200.png";

  const [roster, setRoster] = useState(null);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    const getRoster = async () => {
      const response = await axios.get(
        `http://localhost:3000/explorar/roster/${params.id}`
      );
      setRoster(response.data.pop());
      console.log(roster);
    };

    const getPlayers = async () => {
      const response = await axios.get(
        `http://localhost:3000/explorar/jugadores?id_roster=${params.id}`
      );
      setPlayers(Object.values(response.data));
    };

    getRoster();
    getPlayers();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
          spacing={4}
        >
          <Grid item>
            <img
              src={imgUrl}
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "white",
              }}
            />
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <Typography variant="h4" align="center" className={classes.title}>
              {`Roster - ${roster?.id_roster}`}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Chip
              label={`Campeonatos Jugados: ${roster?.campeonatos_jugados}`}
              style={{
                width: "60vw",
                background: "green",
                color: "white",
                fontWeight: 400,
              }}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Chip
              label={`Partidas Jugadas: ${roster?.partidas_jugadas}`}
              style={{
                width: "60vw",
                background: "green",
                color: "white",
                fontWeight: 400,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        style={{
          color: "white",
          marginTop: 40,
          marginLeft: 20,
          marginBottom: 5,
        }}
      >
        Jugadores
      </Typography>
      <Box className={classes.box}>
        {!players?.length ? (
          <Typography variant="h3" style={{ color: "white" }}>
            No Players Found
          </Typography>
        ) : (
          players.map((player) => (
            <PlayerCard data={player} classes={classes} />
          ))
        )}
      </Box>
    </motion.div>
  );
};

export default Roster;
