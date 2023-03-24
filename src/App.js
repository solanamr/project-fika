import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import AddMovie from "./components/AddMovie/AddMovie";

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/detail/:id" element={<Details />} />
       <Route path="/add" element={<AddMovie />} />
       
    </Routes>
   </BrowserRouter>
  );
}

export default App;
