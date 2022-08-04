import { lazy, Suspense } from "react";
import "./App.css";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/navbar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Avengers = lazy(() => import("./Components/Avengers"));
const Footer = lazy(() => import("./Components/footer"));
const Hackathon = lazy(() => import("./Components/hackathon"));
const Partners = lazy(() => import("./Components/Partners"));
const Products = lazy(() => import("./Components/Products"));
const Learning = lazy(() => import("./Components/Learning"));
const HallOFFame = lazy(() => import("./Components/HallOfFame"));
const Achievers = lazy(() => import("./Components/Achievers/achievers"));
const PurehardWork = lazy(() =>
  import("./Components/PurehardWork/purehardWork")
);

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Suspense fallback={<CircularIndeterminate />}>
        <PurehardWork />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <Achievers />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <HallOFFame />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <Learning />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <Hackathon />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <Products />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <Avengers />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <Partners />
      </Suspense>
      <Suspense fallback={<CircularIndeterminate />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
