import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import FLTree from "./pages/FLTree/FLTree";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="px-4 site-body my-5">
        <div className="m-auto">
          <Routes>
            <Route path="/" element={<FLTree />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/fl-tree" element={<FLTree />}></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
