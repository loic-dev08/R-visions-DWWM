// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressProvider } from "./context/ProgressContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Backend from "./pages/Backend";
import Frontend from "./pages/Frontend";
import JavaScript from "./pages/JavaScript";
import BaseDeDonnees from "./pages/BaseDeDonnees";
import Quiz from "./pages/Quiz";
import Lexique from "./pages/Lexique";
import CSS from "./pages/CSS";
import HTML from "./pages/HTML";
import AnglaisPro from "./pages/AnglaisPro";

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/backend" element={<Backend />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/javascript" element={<JavaScript />} />
            <Route path="/bdd" element={<BaseDeDonnees />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/lexique" element={<Lexique />} />
            <Route path="/css" element={<CSS />} />
            <Route path="html" element={<HTML />} />
            <Route path="anglais" element={<AnglaisPro />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;