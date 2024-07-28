import React from "react";
// import "./Home.css"; // Import your custom CSS file
import banner from "../assets/images/Header_image1.png"; // Adjust the path as per your project structure

const Home = () => {
  return (
    <>
      <header className="App-header">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-2">
              <h1 className="text-2xl font-bold mb-4">
                Unlock Your Potential on Our Freelance Job Portal!
              </h1>
              <p className="custom-paragraph">
                Step into a vibrant community where freelancers and clients come together effortlessly. Explore exciting job opportunities, showcase your proposals, and manage your projects with ease. Join us today to elevate your freelancing journey and achieve new heights in your career.
              </p>
            </div>
            <div className="w-full md:w-2/3 p-2">
              <img src={banner} alt="Banner" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
