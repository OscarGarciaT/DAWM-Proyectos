import { Grid, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

import FavoriteIcon from "@material-ui/icons/Favorite";

const FavoritosGrid = ({ data, classes }) => {
  return (
    <Grid container direction="column">
      <Grid
        container
        // direction="column"
        justifyContent="center"
        alignContent="center"
        spacing={2}
        style={{ margin: 0 }}
        xs={12}
        item
        className={classes?.gridLayout}
      >
        {Object.values(data).map((favorito) => (
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
              style={{ background: "white", paddingTop: 10, paddingBottom: 10 }}
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
              <FavoriteIcon style={{ color: grey[500] }} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default FavoritosGrid;
