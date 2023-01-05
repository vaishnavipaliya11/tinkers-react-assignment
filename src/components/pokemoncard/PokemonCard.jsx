import "../pokemoncard/card.css";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export const PokemonCard = ({ data }) => {

  const { images, attacks, artist, hp } = data;
  return (
    <Card className="margin-med card-container">
      <CardMedia
        component="img"
        className="card-img"
        image={images.small}
        alt={images?.small}
      />
      <CardContent >
        <div className="card-content">
        <div className="common-flex space-bet fs-sm">
          <p>{artist}</p>
          <p>Hp: {hp}</p>
        </div>

        <h5>Attacks</h5>
        {attacks.map((data) => {
          return <p className="margin-sm attack-name">{data.name}</p>;
        })}
        
        </div>
        
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};
