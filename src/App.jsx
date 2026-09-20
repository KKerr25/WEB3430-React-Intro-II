import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import { MyList, List2 } from "./components/MyLists";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <Nav color={color} />
      <Routes>
        <Route path="/" element={<Home color={color} setColor={setColor} />} />
        <Route path="/About" element={<About />}>
          <Route path="sports" element={<MyList />} />
          <Route path="hobbies" element={<List2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
