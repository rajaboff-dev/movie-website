'use client'
import React from 'react';
import useGetRecentlyMovies from "@/app/hooks/queries/useGetRecentlyMovies";
import getPosterPathURL from "@/app/utils/getPosterPathURL";
import {TbArrowRight, TbClock, TbStar, TbStarFilled} from "react-icons/tb";
import useGenreStore from "@/app/store/genres";
import Link from "next/link";

function Recommended() {
  const {data} = useGetRecentlyMovies()
  return (
    <div className='px-[160px] pt-[72px] text-white flex flex-col items-start justify-center gap-5 max-xl:px-[20px]'>
      <div className='flex items-center justify-between w-full max-md:items-start'>
        <div className='flex items-center gap-[24px] max-md:flex-col max-md:items-start'>
          <h1 className='font-bold text-[24px]'>Recommended</h1>
          <h1 className='bg-primary p-[10px] w-fit h-fit text-white rounded-[15px] font-semibold'>Movies</h1>
          <h1 className='border border-primary p-[10px] w-fit h-fit text-white rounded-[15px] opacity-80'>Series</h1>
          <h1 className='border border-primary p-[10px] w-fit h-fit text-white rounded-[15px] opacity-80'>Animation</h1>
        </div>
        <a href="" className='flex items-center gap-3 font-semibold text-[24px] opacity-50'>View all <TbArrowRight/></a>
      </div>
      <div className='grid grid-cols-4 gap-[32px] w-full max-2xl:grid-cols-2 max-md:grid-cols-1 place-items-center'>
        {data && data.results && data.results.slice(12, 20).map((item) => (
          <Link className='w-[352px] text-white' key={item.id} href={`/movie/${item.id}`}>
            <img src={getPosterPathURL(item.poster_path, 'w154')} alt="" className='object-cover rounded-[10px] w-full h-[344px]'/>
            <div className='flex w-full items-center justify-between mt-[8px]'>
              <h1 className='font-semibold text-[24px] line-clamp-1'>{item.title}</h1>
              <div className='flex items-center justify-center gap-3'>
                <h1 className='bg-primary p-[4px] w-fit h-fit text-white rounded-[5px]'>CAM</h1>
                <div className='border border-primary p-[4px] w-fit text-white rounded-[5px] flex items-center justify-center gap-[5px]'>
                  <TbClock />
                  <h1>3:12:00</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recommended;