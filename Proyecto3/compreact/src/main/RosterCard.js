import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const RosterCard = (props) => {
  const { data: roster, classes } = props;
  const imgUrl = "https://static.thenounproject.com/png/149946-200.png";
  const navigate = useNavigate();
  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => navigate(`/explorar/roster/${roster.id_roster}`)}
      >
        <CardMedia component="img" height="140" image={imgUrl} />
        <CardContent>
          <Typography variant="body2">{`Roster - ${roster?.id_roster}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RosterCard;
