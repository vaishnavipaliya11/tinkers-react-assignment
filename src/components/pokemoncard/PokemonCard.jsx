import "../pokemoncard/card.css";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";
export const PokemonCard = ({ data }) => {
  console.log(data, "PokemonCard");
  const { images, attacks, artist, hp } = data;
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="194"
        image={images.small}
        alt="Paella dish"
      />
      <CardContent>
        <div className="common-flex align-center">
          <h4>{artist}</h4>
          <h4>Hp: {hp}</h4>
        </div>

        <h3>Attacks</h3>
        {attacks.map((data) => {
          return <p>{data.name}</p>;
        })}
        <p>{attacks[0].name}</p>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};
