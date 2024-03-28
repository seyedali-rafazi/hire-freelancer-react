import React, { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const AddToFavouitContext = createContext();

export function AddToFavouitProvider({ children }) {
  const [myFavourits, setMyFavourit] = useLocalStorageState(`FAVOURITS`);

  if(myFavourits === undefined){
    setMyFavourit([])
  }

  const handelMyFavourits = (proj) => {
    setMyFavourit((preFav) => [...preFav, proj]);
  };

  const handelDeleteFavourit = (id) => {
    setMyFavourit((preFav) => preFav.filter((proj) => proj._id !== id));
  };

  return (
    <AddToFavouitContext.Provider
      value={{ myFavourits, handelMyFavourits, handelDeleteFavourit }}>
      {children}
    </AddToFavouitContext.Provider>
  );
}

export function useAddToFavourit() {
  const context = useContext(AddToFavouitContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvier");
  return context;
}
