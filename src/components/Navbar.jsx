import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 text-gray-800 py-4 px-6 flex flex-wrap justify-between items-center shadow-md">
      <h2 className="text-2xl font-semibold w-full md:w-auto mb-4 md:mb-0">
        <Link to="/" className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out">Food Recipes</Link>
      </h2>
      <form className="flex items-center flex-grow w-full md:max-w-xl lg:max-w-2xl mb-4 md:mb-0">
        <input
          type="text"
          name="search"
          placeholder="Search for recipes..."
          className="flex-grow bg-white p-3 rounded-l-full outline-none shadow focus:ring-2 focus:ring-gray-300 w-full md:w-auto"
        />
        <button className="w-full md:w-auto px-6 py-3 bg-gray-800 text-white rounded-r-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 transition duration-300 ease-in-out">
          Search
        </button>
      </form>
      <ul className="flex gap-8 w-full md:w-auto justify-center md:justify-start">
        <li>
          <Link to="/" className="hover:text-gray-600 transition duration-300 ease-in-out">Home</Link>
        </li>
        <li>
          <Link to="/favourites" className="hover:text-gray-600 transition duration-300 ease-in-out">Favourites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
