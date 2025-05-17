'use client'
import React, {useEffect, useState} from 'react';
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import useGetPopularMovies from "@/app/hooks/queries/useGetPopularMovies";
import getPosterPathURL from "@/app/utils/getPosterPathURL";
import {TbCalendarWeek, TbClock, TbClockFilled, TbPlayerPlay, TbPlayerPlayFilled, TbStar} from "react-icons/tb";
import useGenreStore from "@/app/store/genres";
import Link from "next/link";

function HomeSection() {
  const data = useGetPopularMovies()
  console.log('Data', data)

  const { genres } = useGenreStore()

  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[90vh]"
    >
      {!data.isLoading && data && data.data.results.map((movie) => (
        <SwiperSlide>
          <img className='w-full h-full object-cover object-center absolute -z-10 brightness-50 ' src={getPosterPathURL(movie.poster_path, 'original')} alt={movie.name} />
          <div className='w-full h-full flex flex-col justify-center items-start gap-[55px]'>
            <div className='flex items-center justify-center gap-10 w-full'>
              <Link href={`/movie/${movie.id}`}>
                <button
                  className='p-5 bg-primary text-secondary flex items-center justify-center gap-[10px] rounded-[5px] cursor-pointer'
                >
                  Watch Now <TbPlayerPlayFilled
                  className='w-[31px] h-[31px] bg-secondary text-primary rounded-full p-2'/>
                </button>
              </Link>
              <button
                className='p-5 bg-transparent text-secondary flex items-center justify-center gap-[10px] rounded-[5px] outline-primary outline-3'
              >
                Watch Later <TbClockFilled className='w-[31px] h-[31px]'/>
              </button>
            </div>
            <div className='text-secondary px-[160px] flex flex-col justify-center items-start gap-[24px]'>
              <div className='flex flex-col gap-[8px]'>
                <h1 className='text-[32px] font-bold'>{movie.name}</h1>
                <div className='flex items-center justify-start gap-[8px]'>
                  {movie.genre_ids.map(genre_id => (
                    <h1 className='bg-white p-[10px] w-fit text-tertiary rounded-[20px]'
                        key={genre_id}>{genres.get(genre_id)}</h1>
                  ))}
                  <div className='flex items-center gap-[3.5px]'>
                    <TbCalendarWeek/> {new Date(movie.first_air_date).getFullYear()}
                  </div>
                  <div className='flex items-center gap-[3.5px]'>
                    <TbStar/> {movie.vote_average.toPrecision(2)}
                  </div>
                </div>
              </div>
              <p className='line-clamp-4 max-w-[626px]'>{movie.overview}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeSection;