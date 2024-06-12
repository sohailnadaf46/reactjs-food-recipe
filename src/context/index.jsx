import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favouriteList, setFavouriteList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const responseData = await response.json();

      if (responseData?.data?.recipes) {
        setData(responseData.data.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/")
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavourites(currentItems) {
    let copyFavouritesList = [...favouriteList];
    const index = copyFavouritesList.findIndex(
      (item) => item.id === currentItems.id
    );
    if (index === -1) {
      copyFavouritesList.push(currentItems);
    } else copyFavouritesList.splice(index);

    setFavouriteList(copyFavouritesList)
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        data,
        recipeDetails,
        setRecipeDetails,
        favouriteList,
        setSearchParam,
        handleSubmit,
        handleAddToFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
