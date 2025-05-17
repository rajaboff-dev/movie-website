import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {TbBell, TbSearch} from "react-icons/tb";

function Navbar() {
  return (
    <nav className='w-full h-[100px] bg-tertiary text-secondary flex items-center justify-between gap-10 px-[200px] fixed z-10'>
      <List data={[
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
      ]}/>
      <div className='flex items-center justify-between bg-secondary rounded-full px-3 text-tertiary w-full'>
        <input type='text' placeholder='Search...' className='w-full py-3 focus:outline-none' />
        <TbSearch className='w-5 h-5' />
      </div>
      <List data={[
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
      ]}/>
      <div className='flex items-center justify-center gap-[16px]'>
        <a href="/login">Login/Signup</a>
        <TbBell />
      </div>
    </nav>
  );
}

const List = ({data}) => (
  <ul className='flex items-center justify-center gap-[16px]'>
    {data.map((item, i) => (
      <ListItem key={uuidv4()} item={item}/>
    ))}
  </ul>
)


const ListItem = ({item}) => (
  <li>
    <a href={item.url}>{item.label}</a>
  </li>
)

export default Navbar;