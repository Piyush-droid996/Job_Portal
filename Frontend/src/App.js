import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./UI/NavBar";
import ClientNavBar from "./UI/ClientNavBar";
import AdminNavbar from "./UI/AdminNavbar";
import Footer from "./UI/Footer";
import HomeScreen from "./pages/HomeScreen";
import ClientHome from "./pages/ClientHome";
import AdminHome from "./pages/AdminHome";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutSection from "./pages/AboutSection";
import Jobs from "./pages/Jobs";
import SignUp from "./pages/SignUp";
import LoginForm from "./pages/LoginForm";
import ManageJobs from "./pages/ManageJobs"; // Import the ManageJobs component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/ClientHome"
            element={
              <>
                <ClientNavBar />
                <Routes>
                  <Route path="/" element={<ClientHome />} />
                  <Route path="manage-jobs" element={<ManageJobs />} /> {/* Add route for ManageJobs */}
                </Routes>
                <Footer />
              </>
            }
          />
          <Route
            path="/AdminHome"
            element={
              <>
                <AdminNavbar />
                <AdminHome />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <NavBar />
                <Routes>
                  <Route path="home" element={<Home />} />
                  <Route path="about" element={<AboutSection/>}/>
                  <Route path="blog/:id" element={<Blog />} />
                  <Route path="jobs" element={<Jobs />} />
                  <Route path="signup" element={<SignUp />} />
                  <Route path="login" element={<LoginForm />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
