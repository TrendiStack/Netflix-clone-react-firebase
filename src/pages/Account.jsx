import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute top-[20%] p-4 md:p-8 ">
            <h1 className="text-3xl md:text-5xl font-bold">My Movies</h1>
          </div>
        </div>
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/1bb5c4f9-a77b-4b73-a148-efa624b06b01/CA-en-20220516-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
      </div>
      <SavedMovies />
    </>
  );
};

export default Account;
