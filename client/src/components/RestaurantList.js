import React, {useContext, useEffect} from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";

const RestaurantList  = () => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext);
//    const [count, setCount] = useState(0);

    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants)
            } catch (err) {
                console.log(err);
            }     
        }
        fetchData();
          
    }, []); //the empty dependecy array makes sure that it only runs when mounted and not when re-rendered 
    
    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await RestaurantFinder.delete(`/${id}`);
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id;
            }));
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        history.push(`/restaurants/${id}/update`)
    }

    const handleRestaurantSelect = (id) => {
        history.push(`/restaurants/${id}`);
    }
    const renderRating = (restaurant) => {
        if (!restaurant.count) {
          return <span className="text-warning">0 reviews</span>;
        }
        return (
          <>
            <StarRating rating={restaurant.id} />
            <span className="text-warning ml-1">({restaurant.count})</span>
          </>
        );
      };
    return (
      <div className="list-group">  
           <table className="table table-striped table-hover .thead-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Restaurant</th>
                <th scope="col">Location</th>
                <th scope="col">Price Range</th>
                <th scope="col">Ratings</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {restaurants && restaurants.map((restaurant) => { 
                    return (
                            
                        <tr onClick={() => handleRestaurantSelect(restaurant.id)} key= {restaurant.id}>
                            <th scope="row">{restaurant.id}</th>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>{renderRating(restaurant)}</td>
                            <td><button onClick={(e) => handleUpdate(e, restaurant.id)} className="button btn btn-warning">Update</button></td>
                            <td><button onClick={(e) => handleDelete(e, restaurant.id)} className="button btn btn-danger">Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>




      </div>
    );
  };
  
  export default RestaurantList;