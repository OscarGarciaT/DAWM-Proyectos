import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import { motion } from "framer-motion";

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
    fontWeight: 500,
  },
  tags: {
    color: "white",
    fontSize: 13,
  },
  description: {
    color: "white",
    fontSize: 13,
    fontWeight: 100,
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

const Player = () => {
  const classes = useStyles();
  const params = useParams();
  const navigate = useNavigate();

  const imgUrl =
    "https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/015/053/original/coach_6027458.png";

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const getPlayer = async () => {
      const response = await axios.get(
        `http://localhost:3000/explorar/jugadores/${params.id}`
      );
      setPlayer(response.data.pop());
      console.log(player);
    };

    getPlayer();
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
          spacing={3}
        >
          <Grid item>
            <img
              src={imgUrl}
              style={{ width: 200, height: 200, borderRadius: "50%" }}
            />
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Typography variant="h4" align="center" className={classes.title}>
              {player?.nombre}
            </Typography>
            <Grid item container spacing={1}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  align="right"
                  className={classes.tags}
                >
                  {player?.genero}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  align="left"
                  className={classes.tags}
                >
                  {player?.plataforma}
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
              {player?.descripcion}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Player;
