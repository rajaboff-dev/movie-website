'use client'
import React from 'react';
import getPosterPathURL from "@/app/utils/getPosterPathURL";
import {TbArrowRight, TbClock, TbStar, TbStarFilled} from "react-icons/tb";
import useGetLatestSeries from "@/app/hooks/queries/useGetLatestSeries";
import useGetRecentlyMovies from "@/app/hooks/queries/useGetRecentlyMovies";
import Link from "next/link";

function NewReleaseSeries() {
  const {data} = useGetRecentlyMovies()
  return (
    <div className='px-[160px] pt-[72px] text-white flex flex-col items-start justify-center gap-5 max-xl:px-[20px]'>
      <div className='flex items-center justify-between w-full'>
        <h1 className='font-bold text-[24px]'>New Release - Series</h1>
        <a href="" className='flex items-center gap-3 font-semibold text-[24px] opacity-50'>View all <TbArrowRight/></a>
      </div>
      <div className='flex items-center justify-between gap-[33px] w-full max-xl:flex-wrap max-xl:justify-center'>
        {data && data.results && data.results.slice(8, 12).map((item) => (
          <Link className='w-[352px] text-white' key={item.id} href={`/movie/${item.id}`}>
            <div className='max-h-[293px] h-[293px] relative top-0'>
              <img
                src={getPosterPathURL(item.poster_path, 'w154')}
                alt=""
                className='w-full max-h-[293px] absolute z-0 object-cover rounded-[10px] brightness-75'
              />
              <div className='w-full px-[16px] py-[8px]'>
                <h1 className='relative z-10 bg-primary p-[10px] w-fit text-white rounded-[10px]'>EP 6</h1>
              </div>
            </div>
            <div className='flex w-full items-center justify-between mt-[8px]'>
              <h1 className='font-semibold text-[24px] line-clamp-1'>{item.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewReleaseSeries;