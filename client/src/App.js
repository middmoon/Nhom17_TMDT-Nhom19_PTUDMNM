import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./component/header/header";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
