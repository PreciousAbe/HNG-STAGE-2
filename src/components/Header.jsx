import React from "react"
import Poster from "../components/Assest/Poster.svg"
import IMBD from "../components/Assest/IMDB.svg"
import cherry from "../components/Assest/cherry.svg"
import Trailer from "../components/Assest/Trailer.svg"
import signin from "../components/Assest/signIn.svg"
import Play from "../components/Assest/Play.svg"
import movieBox from "../components/Assest/movie.svg" // Import the movie.svg image
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div
      className="w-full relative"
      style={{
        background: `url(${Poster}) fixed center top/cover no-repeat`,
        height: "100vh", // Set the height to 100vh for full viewport height
      }}
    >
      <div
        data-testid="search-bar"
        className="absolute flex items-center w-full md:w-fit top-5 right-96 justify-center "
      >
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-b border-gray-400 text-white placeholder-white focus:outline-none "
        />
        <button
          data-testid="search-button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded ml-2"
          onClick={() => {
            // Implement your search functionality here
          }}
        >
          <FontAwesomeIcon icon={faSearch} className="text-gray-800" />
        </button>
      </div>
      {/* H1 and Movie.svg */}
      <div className="text-white text-xl font-serif font-bold absolute top-5 left-4 w-full md:w-auto lg:left-10 lg:text-2xl md:text-3xl sm:text-sm">
        <div className="inline-block">
          <img
            data-testid="movie-box"
            src={movieBox}
            alt="MovieBox"
            className="w-8 h-8 mx-auto bg-pink-500"
          />
        </div>
        <div className="inline-block ml-2">
          <h1 data-testid="movie-title">MovieBox</h1>
        </div>
      </div>
      <Link to="/your-signin-link-here">
        {" "}
        <button
          data-testid="sign-in-button"
          className="hover:bg-pink-500 text-base text-white font-semibold py-2 px-4 rounded absolute top-3 right-4 md:right-20"
        >
          <img
            data-testid="sign-in-icon"
            src={signin}
            alt="Sign-In"
            className="w-14 h-8 mx-1 font-serif"
          />
        </button>{" "}
      </Link>
      {/* Hamburger Icon */}
      <FontAwesomeIcon
        icon={faBars}
        className="text-white text-xl cursor-pointer absolute top-5 right-4 md:right-7"
        onClick={() => {
          // Implement your hamburger menu functionality here
        }}
      />
      <FontAwesomeIcon
        icon={faBars}
        className="text-white text-xl cursor-pointer absolute top-5 right-7"
        onClick={() => {
          // Implement your hamburger menu functionality here
        }}
      />{" "}
      <div className="text-white -mt-32 absolute left-0 top-14 p-4">
        <h2 className="text-white mt-80 text-3xl font-serif font-extrabold">
          John Wick 3: Parabellum
        </h2>
        <div className="flex items-center mt-5">
          <img src={IMBD} alt="IMDB" className="w-5 h-5 mx-1" />
          <span className="text-white text-sm mx-1">86.0 / 100</span>
          <img src={cherry} alt="Cherry" className="w-4 h-4 mx-1" />
          <span className="text-white font-serif font-bold text-sm mx-1">
            97%
          </span>
        </div>

        <div className="">
          <p className="text-white font-serif font-bold text-xl mt-5 mb-5 max-w-md">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <div className="mt-3 bg-pink-500 inline-flex space-x-3">
            <img src={Play} alt="Watch" className="w-10 h-10 mx-auto" />
            <img src={Trailer} alt="Watch" className="w-15 h-15 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
