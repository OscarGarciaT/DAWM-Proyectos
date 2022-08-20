import {
  CardActionArea,
  CardContent,
  CardMedia,
  Card,
  Grid,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Zoom from "@material-ui/core/Zoom";

const GameCard = (props) => {
  const { data: juego } = props;
  const navigate = useNavigate();
  const imgUrl =
    "https://www.freeiconspng.com/uploads/game-controller-icon-png-10.png";

  return (
    <Zoom in={!!juego} style={{ transitionDelay: "250ms" }}>
      <Grid item xs={6} key={juego.id_juego}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardActionArea
            onClick={() => navigate(`/explorar/juegos/${juego.id_juego}`)}
          >
            <CardMedia component="img" height="140" image={imgUrl} />
            <CardContent>
              <Typography variant="body2">{juego.nombre}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Zoom>
  );
};

export default GameCard;
