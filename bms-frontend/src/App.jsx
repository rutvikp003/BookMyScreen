import { Route, Routes, useMatch } from "react-router-dom";
import Header from "./components/shared/header.jsx";
import Footer from "./components/shared/Footer.jsx";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Profile from "./pages/Profile.jsx";
import SeatLayout from "./pages/SeatLayout.jsx";
import Checkout from './pages/Checkout.jsx';

function App() {
  const isSeatLayoutPage = useMatch(
    "/movies/:movieId/:movieName/:state/theater/:theaterId/show/:showId/seat-layout",
  );
    const isCheckOutPage = useMatch(
    "shows/:showId/:state/checkout",
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {!isSeatLayoutPage && !isCheckOutPage && <Header />}
        <main className="flex-grow">
          <Routes>
            {/* Define your routes hear*/}
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<h1>profile Page</h1>} />
            <Route path="/movies" element={<Movies />} />
            <Route
              path="/movies/:state/:movieName/:id/ticket"
              element={<MovieDetails />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/movies/:movieId/:movieName/:state/theater/:theaterId/show/:showId/seat-layout"
              element={<SeatLayout />}
            />
            <Route path="/shows/:showId/:state/checkout" element={<Checkout />}></Route>
            {/* add more Routes as needed */}
          </Routes>
        </main>
        {!isSeatLayoutPage && !isCheckOutPage && <Footer />}
      </div>
    </>
  );
}

export default App;
