import { createContext, useState } from "react";

export const FavoriteContext = createContext([]);

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    // console.log(favorites);
    

    const handalFavorite = ( item ) => {
        const id = item.product_id;
        // console.log(id);
        
        if (!favorites.some(favItem => favItem.product_id === id)) {
            setFavorites([...favorites, item]);
        } else {
            setFavorites(favorites.filter(item => item.product_id !== id));
        };
    };

    return (
        <FavoriteContext.Provider value={{ favorites, handalFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};