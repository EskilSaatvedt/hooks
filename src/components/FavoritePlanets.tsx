import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
} from "@mui/material";

import { planets } from "../utils/vars";
import { usePlanet } from "../hooks/PlanetContext";

const FavoritePlanets = (): JSX.Element => {
  const { planet, setPlanet } = usePlanet();

  return (
    <Container maxWidth={false}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Please select your destination:
      </Typography>
      <Box sx={{ display: "flex", gap: "8px" }}>
        {planets.map((currentPlanet) => (
          <Card
            onClick={() => setPlanet(currentPlanet)}
            sx={{
              maxWidth: 345,
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              ":hover": {
                backgroundColor:
                  currentPlanet.id === planet?.id ? "slategrey" : "#222",
              },
              backgroundColor:
                currentPlanet.id === planet?.id ? "slategrey" : "default",
            }}
            key={`planet-${currentPlanet.id}`}
          >
            <CardHeader title={currentPlanet.name} />
            <CardMedia
              component="img"
              height="150"
              image={currentPlanet.image}
              alt={currentPlanet.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {currentPlanet.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default FavoritePlanets;
