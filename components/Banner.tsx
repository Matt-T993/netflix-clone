import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typing";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props{
  netflixOriginals: Movie[]
}

const Banner = ({netflixOriginals}:Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() =>{
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  },[netflixOriginals])

  console.log(movie);
  return (
    <div>
      <div className="absolute top-0 left-0 h-[95vh] w-screen">
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
        alt=""
        layout="fill"
        />
      </div>
    </div>
  )
};

export default Banner;
