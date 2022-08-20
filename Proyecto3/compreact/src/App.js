import { Route, Routes, useLocation } from "react-router-dom";
import Splash from "./main/Splash";
import Explore from "./main/Explore";
import Game from "./main/Game";
import Team from "./main/Team";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/explorar" element={<Explore />} />
        <Route exact path="/explorar/juegos/:id" element={<Game />} />
        <Route exact path="/explorar/equipos/:id" element={<Team />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
