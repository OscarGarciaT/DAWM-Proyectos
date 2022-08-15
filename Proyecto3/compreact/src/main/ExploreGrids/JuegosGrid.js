import {
  CardActionArea,
  CardContent,
  CardMedia,
  Card,
  Grid,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const JuegosGrid = (props) => {
  const { data, classes } = props;
  const navigate = useNavigate();
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
        {Object.values(data).map((juego) => (
          <Grid item xs={6} key={juego.id}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea
                onClick={() => navigate(`/explorar/juegos/${juego.id}`)}
              >
                <CardMedia component="img" height="140" image={juego.imgUrl} />
                <CardContent>
                  <Typography variant="body2">{juego.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default JuegosGrid;
