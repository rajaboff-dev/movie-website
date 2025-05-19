'use client'
import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {TbBell, TbMenu2, TbSearch} from "react-icons/tb";
import {useParams, usePathname} from "next/navigation";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='w-full h-[100px] bg-tertiary text-secondary flex items-center justify-between gap-10 px-[200px] fixed z-50 max-xl:px-[20px]'>
      <List
        data={[
          {
            label: 'Home',
            url: '/',
          },
          {
            label: 'Genre',
            url: '/genre',
          },
          {
            label: 'Country',
            url: '/country',
          }
        ]}
      />
      <div className='flex items-center justify-between bg-secondary rounded-full px-3 text-tertiary w-full max-sm:bg-transparent max-sm:text-white'>
        <input type='text' placeholder='Search...' className='w-full py-3 focus:outline-none max-sm:hidden' />
        <TbSearch className='w-5 h-5' />
      </div>
      <List
        data={[
          {
            label: 'Movies',
            url: '/movies',
          },
          {
            label: 'Series',
            url: '/series',
          },
          {
            label: 'Animation',
            url: '/animation',
          }
        ]}
      />
      <div className='flex items-center justify-center gap-[16px]'>
        <a href="/login">Login/Signup</a>
        <TbBell />
      </div>
      <TbMenu2 className='w-8 h-8 max-sm:min-w-5 max-sm:min-h-5 xl:hidden' onClick={() => setMenuOpen(!isMenuOpen)} />
      {isMenuOpen && (
        <List
          data={[
            {
              label: 'Home',
              url: '/',
            },
            {
              label: 'Genre',
              url: '/genre',
            },
            {
              label: 'Country',
              url: '/country',
            },
            {
              label: 'Movies',
              url: '/movies',
            },
            {
              label: 'Series',
              url: '/series',
            },
            {
              label: 'Animation',
              url: '/animation',
            }
          ]}
          className='absolute w-full top-[100px] bg-black flex items-center justify-center flex-col gap-5'
        />
      )}
    </nav>
  );
}

const List = ({data, ...props}) => (
  <ul className='flex items-center justify-center gap-[16px] max-xl:hidden' {...props}>
    {data.map((item, i) => (
      <ListItem key={uuidv4()} item={item}/>
    ))}
  </ul>
)


const ListItem = ({item}) => {
  const pathname = usePathname()
  console.log(pathname, item.url == pathname)
  return (
    <li className='max-xl:p-3 flex items-center justify-center flex-col'>
      <a href={item.url}>{item.label}</a>
      {pathname == item.url && (
        <span className='w-[5px] h-[5px] rounded-full bg-red-500 inline-block'></span>
      )}
    </li>
  )
}

export default Navbar;