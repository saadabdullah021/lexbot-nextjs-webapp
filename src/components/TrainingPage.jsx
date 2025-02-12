import React, { useEffect, useState } from 'react'
import chatrightside from "../assets/image 21.png";
import logo from "../assets/Lexbot.svg";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { Helmet } from 'react-helmet';
function TrainingPage() {

 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're at the training page root or if no sub-route is selected
    if (
      location.pathname === "/training" ||
      location.pathname === "/training/"
    ) {
      navigate("/training/url");
    }
  }, [location.pathname, navigate]);

  const getLinkClass = (path) => {
    // Modify the logic to handle the training prefix in the path
    const currentPath = location.pathname.split("/").pop(); // Gets the last segment of the path
    const isActive =
      currentPath === path || (currentPath === "" && path === "url");
    return isActive
      ? "text-blue-500 border-b-2 border-blue-500 font-medium"
      : "text-gray-600 hover:text-blue-500";
  };
  return (
    <div>
      <Helmet>
        <title>Lexbot/training-form</title>
        <meta
          name="description"
          content="training-form to Lexbot to access your account."
        />
      </Helmet>
      <div className=" flex flex-col md:flex-row items-start justify-center   ">
        {/* Left Section */}
        <div className="w-full lg:w-1/2  mt-12 lg:mt-0  ">
          <div className="lg:block hidden mr-auto px-10  pt-12">
            <img src={logo} alt="logo image" className="w-16" />
          </div>
          <div className=" flex flex-col items-center justify-center p-4">
            {/* Step indicators for mobile */}
            <div className="flex items-center w-full justify-between px-4 lg:hidden space-x-4 mb-8">
              <Link to="/create-chatbot-form">
                <div className="flex items-center space-x-2">
                  <span className="flex items-center cursor-pointer justify-center border border-gray-400  w-8 h-8  rounded-full ring-4 ring-white text-gray-700">
                    1
                  </span>
                </div>
              </Link>
              <div className="w-full border-t-2 border-gray-400 border-dashed"></div>

              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-8 h-8 border border-gray-800  rounded-full ring-4 ring-white text-gray-700">
                  2
                </span>
              </div>
            </div>
            <h3 className="font-medium text-black mr-auto lg:hidden block  px-4 my-4 text-lg">
              Training
            </h3>
            {/* Step indicators for desktop */}
            <div className="w-full lg:max-w-xl p-4 lg:p-0  mx-auto lg:py-20">
              <div className=" items-center hidden lg:flex mb-6">
                <div className="flex flex-col items-center mr-4">
                  <Link to="/create-chatbot-form">
                    <div className="w-8 h-8 relative  flex items-center justify-center border border-gray-400 rounded-full text-gray-500">
                      1
                      <span className="font-medium text-gray-400 absolute left-12 whitespace-nowrap w-full  text-lg">
                        Let’s create your first AI chatbot!
                      </span>
                    </div>
                  </Link>
                  <div className="w-px h-8  bg-gray-400"></div>
                  <div className="relative w-8 h-8 flex items-center justify-center border border-gray-900 rounded-full text-black font-semibold">
                    2
                    <span className="font-medium text-black absolute left-12  text-lg">
                      Training
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:pl-12">
                <div className="border-b mb-4">
                  <nav className="flex space-x-2 lg:space-x-4 text-sm lg:text-base">
                    <Link to="url" className={getLinkClass("url")}>
                      Website URL
                    </Link>
                    <Link to="raw-text" className={getLinkClass("raw-text")}>
                      Raw Text
                    </Link>
                    <Link to="documents" className={getLinkClass("documents")}>
                      Documents
                    </Link>
                    <Link to="notion" className={getLinkClass("notion")}>
                      Notion
                    </Link>
                    <Link
                      to="question-and-answer"
                      className={getLinkClass("question-and-answer")}
                    >
                      Q&A
                    </Link>
                  </nav>
                </div>
                <Outlet />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 min-h-screen  bg-custom-gradient  hidden lg:flex items-center  justify-center mt-8 md:mt-0">
          <img
            src={chatrightside}
            alt="Chatbot Preview"
            className="  w-[500px] py-12 "
          />
        </div>
      </div>
    </div>
  );
}

export default TrainingPage 