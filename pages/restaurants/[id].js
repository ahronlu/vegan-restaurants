import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Map from "../../components/Map";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "auto",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function RestaurantPage({ restaurant }) {
  const { name, address, description, img, location : { coordinates } } = restaurant;

  const classes = useStyles();

  return (
    <Container style={{ display: "flex" }} maxWidth="lg">
      <Grid container style={{ marginTop: "20px" }}>
        <Grid item xs={12} md={4} lg={4}>
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
          <Typography
            variant="body2"
            component="p"
            style={{ marginBottom: "1em" }}
          >
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
          <img
            alt={name}
            style={{ display: "block", margin: "0 auto 1em" }}
            width="180px"
            height="180px"
            src={`https://vegan-friendly.co.il/${img}`}
            title={name}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Map lat={coordinates[0]} lng={coordinates[1]} />
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/restaurants/${id}`
  );
  const { data } = await res.json();

  return {
    props: {
      restaurant: data,
    },
  };
}
