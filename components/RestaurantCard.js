import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    maxWidth: 345,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function RestaurantCard({ restaurant }) {
  const { name, address, description, img, _id } = restaurant;

  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ height: "400px" }}>
      <Link href={`/restaurants/${_id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="180"
            width="180"
            image={`https://vegan-friendly.co.il/${img}`}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography
              className={classes.pos}
              color="textSecondary"
              component="p"
            >
              {address}
            </Typography>
            <Typography variant="body2" component="p" className="text">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
