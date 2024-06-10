import { useContext } from "react";
import { GlobalContext } from "../context";
import Recipes from "../components/Recipes.jsx";

const Home = () => {
  const { loading, data } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="py-8 flex justify-center">
        <h1>loading results please wait ...</h1>
      </div>
    );
  }
  return (
    <div className=" py-8 container flex flex-wrap justify-center gap-10">
      {data && data.length > 0 ? (
        data.map((item) => <Recipes key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-center text-black font-semibold">Nothing to show... search something else</p>
        </div>
      )}
    </div>
  );
};

export default Home;
