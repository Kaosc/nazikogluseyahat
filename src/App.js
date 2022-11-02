import './styles/App.css';
import { BrowserRouter as Router, useRoutes, } from "react-router-dom"
import Home from './pages/Home';
import RentCar from "./pages/RentCar"
import Services from "./pages/Services"
import Companies from "./pages/Companies"
import React from "react"

function App() {
  const Pages = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "rentcar", element: <RentCar /> },
      { path: "services", element: <Services /> },
      { path: "companies", element: <Companies /> },
    ]);
    return routes;
  };

  return (
    <div className="App">
      <Router>
        <Pages/>
      </Router>
    </div>
  );
}

export default App;
