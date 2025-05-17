import React from 'react';
import useGetRecentlyMovies from "@/app/hooks/queries/useGetRecentlyMovies";
import getPosterPathURL from "@/app/utils/getPosterPathURL";
import {TbArrowLeft, TbArrowRight} from "react-icons/tb";
import Link from "next/link";

function RecentlyUpdated() {
  const {data} = useGetRecentlyMovies()

  return (
    <div className='px-[160px] bg-tertiary text-white pt-[72px]'>
      <h1 className='font-medium text-[24px]'>Recently Updated</h1>
      <div className='flex justify-between items-center w-full gap-[40px] mt-[24px]'>
        <div className='flex items-center justify-between w-5/6'>
          {data && data?.results && data.results?.length > 0 && data.results.slice(0, 5).map((item, index) => (
            <Link href={`/movie/${item.id}`} key={item.id} className='flex items-center justify-center gap-[24px] cursor-pointer'>
              <img src={getPosterPathURL(item.poster_path, 'w154')} className='w-[64px] h-[100px] rounded-[5px]' alt=""/>
              <div className='flex flex-col items-start justify-center gap-[4px]'>
                <h1 className='font-medium'>{item.title}</h1>
                <p className='font-normal'>Series/S 2/EP 9</p>
                <p className='font-normal'>{item.release_date}</p>
              </div>
            </Link>
          ))}
        </div>
        <button className='w-[88px] h-[88px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-black text-[36px] cursor-pointer'>
          <TbArrowRight/>
        </button>
      </div>
    </div>
  );
}

export default RecentlyUpdated;