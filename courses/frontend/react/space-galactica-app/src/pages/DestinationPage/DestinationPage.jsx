import { useState } from "react";
import styles from "./DestinationPage.module.css";
import PlanetCard from "./PlanetCard";
import { AddWishlistItem } from "./AddWishlistItem";
import { planets } from "../../../data/constant";
import { uuid } from "react-uuid";

// 🧑🏽‍🚀 Task - Week 2
// Move this to its own file in this folder.


export const Destinations = () => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const isPlanetInWishlist = (planetName) => {
    // 🧑🏽‍🚀 Task - Week 2
    // This should be a simple function to check if a given planet is selected.
    // You will need to work with the array of planets wishlist.
    return planetsWishlist.some((planet) => planet.name === planetName);
  };

  const togglePlanetSelection = (name, thumbnail) => {
    // 🧑🏽‍🚀 Task - Week 2
    // When a planet is selected or deselected (toggled), the state of the wishlist planets should be updated accordingly by 
    // calling the addPlanetToWishlist or removePlanetFromWishlist function. You will need a condition here.
    isPlanetInWishlist(name) ? removePlanetFromWishlist(name) : addPlanetToWishlist(name, thumbnail);
  };

  const addPlanetToWishlist = (name, thumbnail) => {
    // 🧑🏽‍🚀 Task - Week 2
    // Add the planet to the planets wishlist state.
    setPlanetsWishlist((prev) => [
      ...prev,
      { name, thumbnail }
    ]);
  };
  
  const removePlanetFromWishlist = (name) => {
    // 🧑🏽‍🚀 Task - Week 2
    // Remove the planet from the planets wishlist state.
    setPlanetsWishlist((prev) =>
      prev.filter((planet) => planet.name !== name)
    );
  };

  const planetsInWishlistMsg = planetsWishlist.length > 0 ? `You have ${planetsWishlist.length} planets in your wishlist` : "No planets in your wishlist :(";

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Display the number of wishlist planets, if there are any planets in the wishlist. */}
          {/* Display the "no planets" message if the wishlist is empty. */}
          {/* 🧑🏽‍🚀 Use a variable to display the number of wishlist planets:  */}
          <p>{ planetsInWishlistMsg }</p>

          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* Use the AddWishlistItem component here. */}
          <AddWishlistItem onAddWishlistItem={addPlanetToWishlist}/>

          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {planetsWishlist.length > 0 && <>
            <h3>Your current wishlist</h3>
            <div className={styles.wishlistList}>
              {planetsWishlist.map((planet) => (
                <div key={planet.name} className={styles.wishlistItem}>
                  <p>{planet.name}</p>
                  <img className={styles.wishlistItemThumbnail} src={planet.thumbnail} alt={planet.name} />
                </div>
              ))}
            </div>
          </>}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Add all 4 planets: Europa, Moon, Mars, Titan.  */}
          {/* Use the README.md file for descriptions. */}
          {/* Create a <PlanetCard /> component, which accepts the following props: name, description, thumbnail, isSelected, togglePlanetSelection */}
          {planets.map((planet) => (
            <PlanetCard
              key={uuid}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={isPlanetInWishlist(planet.name)}
              togglePlanetSelection={togglePlanetSelection}
            />
          ))}

        </section>
      </main>
    </div>
  );
};

export default Destinations;


// 🧑🏽‍🚀 Task - Week 4 - part 2
// Hate to break it to you, but you will have to make some changes to the code you already wrote.
// Now that you have context, grab and use the context data in this.
// You will need to replace some of the variables and functions with the ones from the context.
