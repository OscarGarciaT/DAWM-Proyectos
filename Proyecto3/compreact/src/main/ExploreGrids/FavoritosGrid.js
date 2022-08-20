import { Grid, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { useEffect, useState } from "react";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

const FavoritosGrid = ({ data, classes }) => {
  const [favoritos, setFavoritos] = useState(Object.values(data));

  useEffect(() => {
    setFavoritos(Object.values(data));
  }, [data]);

  const handleLike = (id) => () => {
    const filteredFavs = favoritos.filter((x) => x.id !== id);
    setFavoritos(filteredFavs);
  };

  return (
    <Grid container direction="column">
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        spacing={2}
        style={{ margin: 0 }}
        xs={12}
        item
        className={classes?.gridLayout}
      >
        {favoritos.map((favorito) => (
          <Grid
            item
            container
            key={favorito.id}
            xs={10}
            style={{ minHeight: 60 }}
            alignItems="center"
          >
            <Grid
              item
              xs={10}
              style={{
                background: "white",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <Typography variant="body1" align="center">
                {favorito.name}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                textAlign: "center",
                background: "red",
                paddingTop: 9,
                paddingBottom: 9,
              }}
            >
              <FavoriteIcon
                style={{ color: grey[500] }}
                onClick={handleLike(favorito.id)}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default FavoritosGrid;
