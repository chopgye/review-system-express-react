import React, {useState, createContext} from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    //funtion to update restaurant list when a resturant is added from add restaurant 
    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant]);
    }
    return (
        <RestaurantsContext.Provider value={{ 
            restaurants, 
            setRestaurants, 
            selectedRestaurant, 
            setSelectedRestaurant, 
            addRestaurants 
            }}>
            {props.children}
        </RestaurantsContext.Provider>

    )
}