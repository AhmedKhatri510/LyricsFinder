import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/layout/Index";
import { Provider } from "./context";
import Lyrics from "./components/tracks/Lyrics";

function App() {
  return (
    <>
      <Provider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/lyrics/track/:id" element={<Lyrics />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
