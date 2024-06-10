import { Link } from "react-router-dom";


const Recipes = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white shadow-xl rounded-lg transform transition-all hover:scale-105">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-lg mb-4">
        <img src={item.image_url} alt={item.title} className="block w-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
      <p className="text-gray-600">{item.publisher}</p>
      <Link to={`/recipe-details/${item.id}` } className="text-sm p-3 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md  text-white  bg-slate-800 mt-5 text-center">Recipe details</Link>
    </div>
  );
};

export default Recipes;
