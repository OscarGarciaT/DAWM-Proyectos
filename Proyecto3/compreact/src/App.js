import { Route, Routes } from "react-router-dom";
import Splash from "./main/Splash";
import Explore from "./main/Explore";
import Game from "./main/Game";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Splash />} />
      <Route exact path="/explorar" element={<Explore />} />
      <Route exact path="/explorar/juegos/:id" element={<Game />} />
    </Routes>
  );
}

export default App;
