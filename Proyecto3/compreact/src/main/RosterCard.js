import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

const RosterCard = (props) => {
  const { data: roster, classes } = props;
  const imgUrl = "https://static.thenounproject.com/png/149946-200.png";
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => console.log("click")}>
        <CardMedia component="img" height="140" image={imgUrl} />
        <CardContent>
          <Typography variant="body2">{`Roster - ${roster?.id_roster}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RosterCard;
