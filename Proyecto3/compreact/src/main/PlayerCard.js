import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const RosterCard = (props) => {
  const { data: player, classes } = props;
  const imgUrl =
    "https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/015/053/original/coach_6027458.png";
  const navigate = useNavigate();
  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => navigate(`/explorar/jugadores/${player.id_jugador}`)}
      >
        <CardMedia component="img" height="140" image={imgUrl} />
        <CardContent>
          <Typography variant="body2">{`Jugador - ${player?.nickname}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RosterCard;
