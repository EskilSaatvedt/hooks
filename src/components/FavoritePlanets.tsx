import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";

import { planets } from "../utils/vars";

const FavoritePlanets = (): JSX.Element => {
  const [selectedPlanet, setSelectedPlanet] = React.useState<number | null>(null);

  const handleSelectPlanet = (id: number) => {
    setSelectedPlanet(id);
  }

  return (
    <Container maxWidth={false}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Please select your favourite planet
      </Typography>
      <Box sx={{ display: "flex", gap: "8px" }}>
        {planets.map((planet) => (
          <Card sx={{ maxWidth: 345 }} key={`planet-${planet.id}`} variant={planet.id === selectedPlanet ? 'elevation' : 'outlined'}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {planet.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {planet.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={()=> handleSelectPlanet(planet.id)} size="small">Select</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default FavoritePlanets;
