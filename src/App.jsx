import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import GlobalState from "./context";
export default function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 ">
        <GlobalState>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/favourites" element={<Favourites />}></Route>

            <Route
              path="/recipe-details/:id"
              element={<RecipeDetails />}
            ></Route>
          </Routes>
        </GlobalState>
      </div>
    </div>
  );
}
