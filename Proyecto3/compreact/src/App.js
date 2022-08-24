import { Route, Routes, useLocation } from "react-router-dom";
import Splash from "./main/Splash";
import Explore from "./main/Explore";
import Game from "./main/Game";
import Team from "./main/Team";
import Roster from "./main/Roster";

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
        <Route exact path="/explorar/roster/:id" element={<Roster />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
