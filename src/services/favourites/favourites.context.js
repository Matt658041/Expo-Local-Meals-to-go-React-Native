import React, { createContext } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) => {
    return (
        <FavouritesContext.Provider>
            {children}
        </FavouritesContext.Provider>

    )
}