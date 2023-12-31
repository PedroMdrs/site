import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { ThemeStorage } from "./Context/Context";

const App = () => {
  return (
    <ThemeStorage>
      <HashRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="skills" element={<Skills />}></Route>
          </Routes>
        </main>
      </HashRouter>
    </ThemeStorage>
  );
};

export default App;
