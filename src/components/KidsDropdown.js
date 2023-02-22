import React from 'react';

import { RoomContext } from '../context/RoomContext';

import { Menu } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';


const lis = [
  { name: '0 Kids' },
  { name: '1 Kid' },
  { name: '2 Kids' },
  { name: '3 Kids' },
];

const KidsDropdown = () => {
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      {/* btn */}
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        Kids
        <BsChevronDown className='text-base text-accent-hover' />
      </Menu.Button>

      {/* itmes */}
      <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
        {lis.map((li, index) => {
          return (
            <Menu.Items as='li' key={index} className='border-b last-of-type:border-b-0 h-12 hover:bg-accent-hover hover:text-white flex justify-center cursor-pointer'>
              {li.name}
            </Menu.Items>);
        })}
      </Menu.Items>

    </Menu>
  );
};

export default KidsDropdown;
