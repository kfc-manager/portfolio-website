import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import About from "./components/About/About";
import ReadMorePage from "./components/ReadMorePage/ReadMorePage";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div style={{ width: "100%", position: "absolute", zIndex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/readmore" element={<ReadMorePage />} />
        </Routes>
      </div>
      <Background />
    </BrowserRouter>
  );
};

export default App;
