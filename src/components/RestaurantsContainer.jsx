import Restaurant from "./Restaurant";
import { useRestaurants } from "../context/RestaurantContext";
// imported useRestaurants from RestaurantContext
function RestaurantsContainer() {
  // destructured restaurants
  const { restaurants } = useRestaurants();
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
