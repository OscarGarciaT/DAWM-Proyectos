import { Grid } from "@material-ui/core";

import GameCard from "./GameCard";
import TeamCard from "./TeamCard";

const MainGrid = (props) => {
  const { data, show, classes } = props;

  return (
    <Grid container>
      <Grid
        container
        spacing={2}
        className={classes?.gridLayout}
        style={{ margin: 0 }}
        xs={12}
        item
      >
        {Object.values(data).map((item) =>
          show === "juegos" ? (
            <GameCard data={item} />
          ) : (
            <TeamCard data={item} />
          )
        )}
      </Grid>
    </Grid>
  );
};

export default MainGrid;
