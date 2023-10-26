import React, { useLayoutEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";

import { planets, favoritePlanetKey } from "../utils/vars";
import { useSpaceFranchisesContext } from "./SpaceFranchisesProvider";
import { Planet } from "../utils/types";

const FavoritePlanets = (): JSX.Element => {
  const fromStorage = localStorage.getItem(favoritePlanetKey);
  let selectedPlanet: Planet | null = null;
  if (fromStorage) {
    selectedPlanet = JSON.parse(fromStorage) as Planet;
  }

  const { setSpaceFranchises } = useSpaceFranchisesContext();

  useLayoutEffect(() => {
    setSpaceFranchises(selectedPlanet ? selectedPlanet.source : "");
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSpaceFranchises]);

  const handleSelectPlanet = (id: number) => {
    const newSelectedPlanet = planets.find((planet) => planet.id === id)!;
    selectedPlanet = newSelectedPlanet;

    const serializedPlanet = JSON.stringify(newSelectedPlanet);
    localStorage.setItem(favoritePlanetKey, serializedPlanet);

    setSpaceFranchises(selectedPlanet.source);
  };

  return (
    <Container maxWidth={false}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Please select your destination:
      </Typography>
      <Box sx={{ display: "flex", gap: "8px" }}>
        {planets.map((planet) => (
          <Card
            sx={{ maxWidth: 345 }}
            key={`planet-${planet.id}`}
            variant={
              planet.id === selectedPlanet?.id ? "elevation" : "outlined"
            }
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {planet.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {planet.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => handleSelectPlanet(planet.id)}
                size="small"
              >
                Select
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default FavoritePlanets;
