import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import Meals from "./Components/Meals";
import Calculator from "./Components/Calculator";
import ToggleBackgroundColor from "./Components/ToggleBackgroundColor";
import HiddenSearchBar from "./Components/HiddenSearchBar";
import Testimonials from "./Components/Testimonials";
import Accordion from "./Components/Accordion.jsx";
import { accordionData } from "./Utils/content.js";
import Form from "./Components/Form.jsx";

const App = () => {
  return (
    <Router>
      <div
        // style={{
        //   height: "100vh",
        //   width: "100vw",
        //   display: "flex",
        //   flexDirection: "column",
        //   overflowX: "hidden",
        //   gap: "40px",
        //   justifyContent: "space-around",
        // }}
      >
        {/* Navigation Links */}
        <ul style={{ marginBottom: "20px", display:"flex", flexDirection: "row", color: "gray", gap: "40px", justifyContent: "space-evenly", paddingTop: "15px" }}>
        <li><Link style={{textDecoration: "none", color: "black"}} to="/counter">Counter</Link></li>
        <li><Link style={{textDecoration: "none", color: "black"}} to="/todo">Todo</Link></li>
        <li><Link style={{textDecoration: "none", color: "black"}} to="/meals">Meals</Link></li>
        <li><Link style={{textDecoration: "none", color: "black"}} to="/calculator">Calculator</Link></li>
        <li><Link style={{textDecoration: "none", color: "black"}} to="/toggle-background">Toggle Background</Link></li>
        <li><Link style={{textDecoration: "none", color: "black"}} to="/hidden-search">Hidden Search Bar</Link></li>
        <li><Link style={{textDecoration: "none", color: "black"}} to="/testimonials">Testimonials</Link></li>
        <li><Link style={{textDecoration: "none", color: "black"}} to="/accordion">Accordion</Link></li>
        <li><Link style={{textDecoration: "none", color: "black"}} to="/form">Form</Link></li>
        </ul>

        {/* Routes */}
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/toggle-background" element={<ToggleBackgroundColor />} />
          <Route path="/hidden-search" element={<HiddenSearchBar />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route
            path="/accordion"
            element={
              <div className="accordion">
                {accordionData.map(({ title, content },index) => (
                  <Accordion key={index} title={title} content={content} />
                ))}
              </div>
            }
          />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;