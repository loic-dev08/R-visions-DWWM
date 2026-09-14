
// App.jsx

import { ProgressProvider } from "./context/ProgressContext";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Backend from "./pages/Backend";
import Frontend from "./pages/Frontend";
import JavaScript from "./pages/JavaScript";
import BaseDeDonnes from "./pages/BaseDeDonnees";
import Quiz from "./pages/Quiz";
import  Lexique from "./pages/Lexique";

<ProgressProvider>
  <App />
</ProgressProvider>

function App () {

  <BrowserRouter>
  <Navbar>
    <main>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/bdd" element={<BaseDeDonnes />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/lexique" element={<Lexique />} />

      </Routes>
    </main>
  </Navbar>
  </BrowserRouter>
}