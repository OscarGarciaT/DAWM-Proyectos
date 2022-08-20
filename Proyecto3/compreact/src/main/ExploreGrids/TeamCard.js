import {
  CardActionArea,
  CardContent,
  CardMedia,
  Card,
  Grid,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const TeamCard = (props) => {
  const { data: equipo } = props;
  const navigate = useNavigate();
  const imgUrl =
    "https://www.iconbunny.com/icons/media/catalog/product/2/8/2859.11-team-icon-iconbunny.jpg";

  return (
    <Grid item xs={6} key={equipo.id_equipo}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardActionArea
          onClick={() => navigate(`/explorar/equipos/${equipo.id_equipo}`)}
        >
          <CardMedia component="img" height="140" image={imgUrl} />
          <CardContent>
            <Typography variant="body2">{equipo.nombre}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default TeamCard;
