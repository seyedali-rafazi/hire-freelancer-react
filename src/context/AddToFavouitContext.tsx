import { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import type { ChildrenProps, Project } from "../types";

interface AddToFavouritContextValue {
  myFavourits: Project[];
  handelMyFavourits: (proj: Project) => void;
  handelDeleteFavourit: (id: string) => void;
}

const AddToFavouitContext = createContext<AddToFavouritContextValue | undefined>(
  undefined
);

export function AddToFavouitProvider({ children }: ChildrenProps) {
  const [myFavourits, setMyFavourit] = useLocalStorageState<Project[]>(
    "FAVOURITS",
    []
  );

  const handelMyFavourits = (proj: Project) => {
    setMyFavourit((preFav) => [...preFav, proj]);
  };

  const handelDeleteFavourit = (id: string) => {
    setMyFavourit((preFav) => preFav.filter((proj) => proj._id !== id));
  };

  return (
    <AddToFavouitContext.Provider
      value={{ myFavourits, handelMyFavourits, handelDeleteFavourit }}
    >
      {children}
    </AddToFavouitContext.Provider>
  );
}

export function useAddToFavourit() {
  const context = useContext(AddToFavouitContext);
  if (context === undefined)
    throw new Error("useAddToFavourit was used outside of AddToFavouitProvider");
  return context;
}
