import { useContext } from "react";
import { GlobalContext } from "../context";
import Recipes from "../components/Recipes";

const Home = () => {
  const {  favouriteList } = useContext(GlobalContext);


  return (
    <div className=" py-8 container flex flex-wrap justify-center gap-10">
      {favouriteList && favouriteList.length > 0 ? (
        favouriteList.map((item) => <Recipes key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-center text-black font-semibold">Nothing is added ...</p>
        </div>
      )}
    </div>
  );
};

export default Home;
