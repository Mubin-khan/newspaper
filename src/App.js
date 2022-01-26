import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bbcnews from "./components/bbcnews/Bbcnews";
import Bitcoin from "./components/bitcoinnews/Bitcoin";
import Homepage from "./components/homepage/Homepage";
import Navbarr from "./components/navbar/Navbar";
import Techcrunch from "./components/techcrunch/Techcrunch";
import Trumpnews from "./components/trumpnews/Trumpnews";

function App() {
  return (
    <>
      <Navbarr></Navbarr>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/trump-news" element={<Trumpnews/>} />
          <Route path="/bbc-news" element={<Bbcnews/>} />
          <Route path="/techcrunch-news" element={<Techcrunch/>} />
          <Route path="/bitcoin-news" element={<Bitcoin/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
