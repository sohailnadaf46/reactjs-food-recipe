import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context";

const RecipeDetails = () => {
  const { id } = useParams();
  const {
    recipeDetails,
    setRecipeDetails,
    favouriteList,
    handleAddToFavourites,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function LoadingDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );

        const responseData = await response.json();
        console.log("API Response:", responseData);
        if (responseData?.data?.recipe) {
          setRecipeDetails(responseData.data.recipe);
          console.log("Recipe Details Set:", responseData.data.recipe);
        } else {
          console.log("Recipe not found in response data");
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }
    LoadingDetails();
  }, []);

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-8 flex justify-center">
      <div className="max-w-4xl w-full mx-4 bg-white shadow-lg rounded-lg overflow-hidden ">
        <div className="flex  mt-8">
          <img
            src={recipeDetails.image_url}
            alt={recipeDetails.title}
            className=" w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
          <div className="p-6 w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Recipe Details
            </h2>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              Title: {recipeDetails.title}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Publisher: {recipeDetails.publisher}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Source URL:{" "}
              <a
                href={recipeDetails.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {recipeDetails.source_url}
              </a>
            </p>
          </div>
          <div>
            <span className="text-2xl font-semibold text-black">
              Ingredients:
            </span>
            <ul className="flex flex-col gap-3">
              {recipeDetails.ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  <span className="text-2xl font-semibold text-black">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col place-content-center ml-4">
        <button
          onClick={() => handleAddToFavourites(recipeDetails)}
          className="p-4 rounded-sm text-white bg-blue-500 hover:bg-blue-600"
        >
          {favouriteList.findIndex(
            (item) => (item.id === recipeDetails.id) !== -1
          )
            ? "Add to favourites"
            : "Remove from favourites"}
        </button>
      </div>
    </div>
  );
};
export default RecipeDetails;
