import RestaurantCard from "../components/RestaurantCard";
import { Container, Grid } from "@material-ui/core";

export default function Home({ restaurants }) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {restaurants.map((restaurant) => (
          <Grid key={restaurant._id} item xs={12} md={3} lg={3}>
            <RestaurantCard restaurant={restaurant} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/restaurants");
  const { data } = await res.json();

  return {
    props: {
      restaurants: data,
    },
  };
}
