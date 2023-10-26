import { FC, createContext, useContext, useMemo, useState } from "react";

const SpaceFranchisesContext = createContext(
  {} as ReturnType<typeof usePassedDownSpaceFranchises>
);
SpaceFranchisesContext.displayName = "SpaceFranchisesContext";

export const useSpaceFranchisesContext = () => {
  const context = useContext(SpaceFranchisesContext);
  if (context === undefined) {
    throw new Error(
      "useSpaceFranchises must be used within a SpaceFranchisesProvider"
    );
  }
  return context;
};

type SpaceFranchisesProviderProps = {
  children: JSX.Element;
};

const usePassedDownSpaceFranchises = () => {
  const [spaceFranchises, setSpaceFranchises] = useState<string>("");

  const valueObject = useMemo(() => {
    return { spaceFranchises, setSpaceFranchises };
  }, [spaceFranchises, setSpaceFranchises]);

  return valueObject;
};

export const SpaceFranchisesProvider: FC<SpaceFranchisesProviderProps> = ({
  children,
}) => {
  return (
    <SpaceFranchisesContext.Provider value={usePassedDownSpaceFranchises()}>
      {children}
    </SpaceFranchisesContext.Provider>
  );
};
