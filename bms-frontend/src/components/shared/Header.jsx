import { FaSearch } from "react-icons/fa";
import mainLogo from "../../assets/main-icon.png";
import { useLocation } from "../../context/LocationContext.jsx";
import Map from "../../assets/pin.gif";
import { useNavigate } from "react-router-dom";
import SignInModel from "./SignInModel.jsx";
import { useAuth } from "../../context/AuthContext.jsx";


const header = () => {
  const navigate = useNavigate();
  const { toggleModal } = useAuth();
  const { location, loading, error } = useLocation();

  return (
    <div className="w-full text-sm bg-white">
      {/* top navbar */}
      <div className="px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-3">
          {/* leftpart */}
          <div className="flex item-center space-x-4">
            <img
              onClick={ () => {navigate("/")} }
              src={mainLogo}
              alt="logo"
              className="h-8 object-contain cursor-pointer"
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Search for movies, events, plays, sports and activities"
                className="border border-gray-300 rounded px-4 py-1.5 w-[400px] text-sm outline-none"
              />
              <FaSearch className="absolute right-2 top-2.5 text-gray-500" />
            </div>
          </div>

          {/* right part */}
          <div className="flex item-center space-x-6">
            <div className="text-sm font-medium cursor-pointer mt-2">
              {loading && (
                <img src={Map} alt="loading..." className="w-10 h-10" />
              )}
              {location && <p>{location} &nbsp; </p>}
            </div>
            <button
              onClick={ () => toggleModal() } 
              className="bg-[#f84494] cursor-pointer text-white px-4 py-1.5 rounded text-sm">
              Sign In
            </button>
          </div>
        </div>
      </div>
      {/* bottom navbar */}
      <div className="bg-[#f2f2f2] px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2 text-gray-700">
          <div className="flex items-center space-x-6 font-medium">
            <span onClick= {()=> navigate("/movies")} className="cursor-pointer hover:text-red-500">Movies</span>
            <span className="cursor-pointer hover:text-red-500">Streams</span>
            <span className="cursor-pointer hover:text-red-500">Events</span>
            <span className="cursor-pointer hover:text-red-500">Plays</span>
            <span className="cursor-pointer hover:text-red-500">Sports</span>
            <span className="cursor-pointer hover:text-red-500">
              Activities
            </span>
          </div>
          <div className="flex item-center space-x-6 text-sm">
            <span className="cursor-pointer hover:underline">ListYourShow</span>
            <span className="cursor-pointer hover:underline">Corporates</span>
            <span className="cursor-pointer hover:underline">Offers</span>
            <span className="cursor-pointer hover:underline">Gift Cards</span>
          </div>
        </div>
      </div>
      <SignInModel />
    </div>
  );
};

export default header;
