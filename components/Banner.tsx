import { modalState, movieState } from "@/atoms/modalAtom";
import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typing";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useRecoilState } from "recoil";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  return (
    <div
      className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end
    lg:pb-12"
    >
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold lg:text-7xl md:text-4xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="banner__button bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7" />
          Play
        </button>
        <button
          className="banner__button bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
