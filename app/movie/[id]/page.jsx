'use client'
import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import getMovie from "@/app/hooks/queries/getMovie";
import getVideos from "@/app/hooks/queries/getVideos";
import getPosterPathURL from "@/app/utils/getPosterPathURL";
import {TbArrowRight, TbCalendarWeek, TbClock, TbPlayerPlayFilled, TbStar} from "react-icons/tb";
import useGenreStore from "@/app/store/genres";
import NewReleaseSeries from "@/app/components/NewReleaseSeries";
import NewReleaseMovies from "@/app/components/NewReleaseMovies";
import useGetRecentlyMovies from "@/app/hooks/queries/useGetRecentlyMovies";


export default function MovieDetailsPage() {
  const {id} = useParams()
  const data = getMovie(id)
  const { data: movies, isLoading: isRecentlyMoviesLoading } = useGetRecentlyMovies()
  const videos = getVideos(id)

  console.log('movies', movies)
  console.log('videos', videos)
  console.log('movie-details', data)

  if(data.isLoading || videos.isLoading || isRecentlyMoviesLoading) {
    return (
      <div className='flex items-center justify-center overflow-hidden bg-black text-white w-screen h-screen absolute top-0 left-0'>
        <h1>Loading...</h1>
      </div>
    )
  }

  if(!data.isLoading && (data.isError || !data.data)) {
    return (
      <h1 className='text-white text-center font-semibold text-[34px]'>Bunday film topilmadi!</h1>
    )
  }

  return (
    <div className="px-[160px] pt-10">
      <video src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' controls
             className='w-full'></video>
      <div className='mt-[96px]'>
        {!data.isLoading && !data.isError && data.data && (
          <div className=' flex items-start justify-center gap-[32px]'>
            <img src={getPosterPathURL(data.data.poster_path, 'w500')} alt="" className='rounded-[10px] h-[570px]'/>
            <div className='text-white w-full flex flex-col items-start justify-center gap-[64px]'>
              <div className='flex items-center justify-between w-full'>
                <h1 className='font-semibold text-[34px]'>{data.data.title}</h1>
                <button className='p-[16px] bg-primary text-secondary rounded-[15px]'>+ Add to Favourite</button>
              </div>
              <div className='flex flex-col items-start justify-center gap-[24px]'>
                <div className='flex items-center justify-start gap-[8px]'>
                  {data.data.genres.map(genre => (
                    <h1 className='bg-white p-[10px] w-fit text-black rounded-[10px]'
                        key={genre.id}>{genre.name}</h1>
                  ))}
                  <div className='flex items-center gap-[3.5px]'>
                    <TbCalendarWeek/> {new Date(data.data.release_date).getFullYear()}
                  </div>
                  <div className='flex items-center gap-[3.5px]'>
                    <TbStar/> {data.data.vote_average.toPrecision(2)}
                  </div>
                </div>
                <p>{data.data.overview}</p>
              </div>
              <div>
                <p><span
                  className='w-[120px] inline-block text-end'>Country</span> : {data.data.production_countries.map(item => item.name).join(', ')}
                </p>
                <p><span
                  className='w-[120px] inline-block text-end'>Genre</span> : {data.data.genres.map(item => item.name).join(', ')}
                </p>
                <p><span className='w-[120px] inline-block text-end'>Date Release</span> : {data.data.release_date}</p>
                <p><span
                  className='w-[120px] inline-block text-end'>Production</span> : {data.data.production_companies.map(item => item.name).join(', ')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='pt-[72px] text-white flex flex-col items-start justify-center gap-5'>
        <div className='flex items-center justify-between w-full'>
          <h1 className='font-bold text-[24px]'>You may also like</h1>
        </div>
        <div className='grid grid-cols-4 gap-[33px] w-full'>
          {movies && movies.results && movies.results.slice(4, 12).map((item) => (
            <div className='w-[352px] text-white' key={item.id}>
              <img src={getPosterPathURL(item.poster_path, 'w154')} alt="" className='object-cover rounded-[10px] w-full h-[344px]'/>
              <div className='flex w-full items-center justify-between mt-[8px]'>
                <h1 className='font-semibold text-[24px] line-clamp-1'>{item.title}</h1>
                <div className='flex items-center justify-center gap-3'>
                  <h1 className='bg-primary p-[4px] w-fit h-fit text-white rounded-[5px]'>HD</h1>
                  <div
                    className='border border-primary p-[4px] w-fit text-white rounded-[5px] flex items-center justify-center gap-[5px]'>
                    <TbClock/>
                    <h1>3:12:00</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Comments />
    </div>
  );
}


const Comments = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=10').then((res) => res.json()).then(data => setComments(data));
  }, []);
  return (
    <div className='text-white flex flex-col items-start justify-center gap-[48px] w-full pt-[84px]'>
      <h1 className='text-[24px] font-semibold'>Comments</h1>
      <div className='flex items-center justify-start gap-[32px] w-full'>
        <img src="https://i.pravatar.cc/" alt="" className='w-[128px] h-[128px] rounded-full'/>
        <div className='flex flex-col items-start justify-center gap-[6px] w-full'>
          <h1>James</h1>
          <input type='text' placeholder='Write your comments here.....' className='bg-white w-full rounded-[10px] h-[72px] text-black p-4'/>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center gap-[48px]'>
        {comments && comments.map((item) => (
          <div className='flex items-center justify-start gap-[32px]' key={item.id}>
            <img src={`https://i.pravatar.cc?u=${item.email}`} alt="" className='w-[128px] h-[128px] rounded-full'/>
            <div className='flex flex-col items-start justify-center gap-[6px] w-full'>
              <h1>{item.email}</h1>
              <p>12/06/2020</p>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}