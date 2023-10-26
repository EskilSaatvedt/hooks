import { FC, createContext, useContext, useMemo } from "react";
import { Planet } from "../utils/types";
import { useLocalStorage } from "./useLocalStorage";
import { favoritePlanetKey } from "../utils/vars";

const PlanetContext = createContext(
  {} as ReturnType<typeof usePassedDownPlanet>
);
PlanetContext.displayName = "PlanetContext";

export const usePlanet = () => useContext(PlanetContext);

const usePassedDownPlanet = () => {
  const [selectedPlanet, setSelectedPlanet] = useLocalStorage<Planet>(
    favoritePlanetKey,
    undefined
  );

  const planetObject = useMemo(
    () => ({ planet: selectedPlanet, setPlanet: setSelectedPlanet }),
    [selectedPlanet, setSelectedPlanet]
  );
  return planetObject;
};

type Props = {
  children?: React.ReactNode;
};

export const PlanetProvider: FC<Props> = ({ children }) => {
  return (
    <PlanetContext.Provider value={usePassedDownPlanet()}>
      {children}
    </PlanetContext.Provider>
  );
};
