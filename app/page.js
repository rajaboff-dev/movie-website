'use client'
import Navbar from "@/app/components/Navbar";
import HomeSection from "@/app/components/HomeSection";
import {useEffect} from "react";
import useGenreStore from "@/app/store/genres";
import RecentlyUpdated from "@/app/components/RecentlyUpdated";
import Trending from "@/app/components/Trending";
import NewReleaseMovies from "@/app/components/NewReleaseMovies";
import NewReleaseSeries from "@/app/components/NewReleaseSeries";
import Recommended from "@/app/components/Recommended";

export default function Home() {
  const {fetchAllGenres} = useGenreStore()
  useEffect(() => {
    fetchAllGenres()
  })

  return (
    <>
      <HomeSection/>
      <RecentlyUpdated/>
      <Trending/>
      <NewReleaseMovies/>
      <NewReleaseSeries/>
      <Recommended/>
    </>
  );
}
