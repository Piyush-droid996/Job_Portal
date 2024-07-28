import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./UI/NavBar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import AddJob from "./pages/AddJob";
import Apply from "./pages/Apply";
import Footer from "./UI/Footer"; // Import the Footer component

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { index: true, element: <Home /> },
      { path: "/apply", element: <Apply /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/add", element: <AddJob /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
