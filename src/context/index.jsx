import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);

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
      }

    } catch (error) {
      console.error(error);
      setLoading(false);
      setSearchParam("");
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        data,
        recipeDetails,
        setRecipeDetails,
        setSearchParam,
        handleSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
