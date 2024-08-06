import React from 'react';
import Button from '../Button';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import MenuIcon from "../../assets/images/menu.svg";

const headerLinks = [
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Roadmap',
    href: '#roadmap'
  },
  {
    label: 'Tokenomics',
    href: '#tokenomics'
  },
  {
    label: 'Faq',
    href: '#faq'
  },
]

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className='flex items-center gap-3'>
        <img className='max-md:w-10 max-md:h-10' src="/logo.png" alt="logo" />
        <div className='uppercase text-[32px] max-md:text-[24px]'>Quokka</div>
      </div>
      <ul className='flex items-center gap-8 list-none max-lg:gap-4 max-md:hidden'>
        {
          headerLinks.map(link => (
            <li
              key={link.href}
              className='uppercase text-[16px] cursor-pointer hover:text-primary transition ease-in-out'
            >
              <a href={link.href}>
                {link.label}
              </a>
            </li>
          ))
        }
      </ul>
      <Button className="max-md:hidden">Connect</Button>
      <div className='md:hidden'>
        <Menu>
          <MenuButton className="data-[active]:bg-primary p-2 rounded-full">
            <img className='w-5 h-5' src={MenuIcon} alt="menu" />
          </MenuButton>
          <MenuItems anchor="bottom" className="bg-[#FFB545] rounded-[10px] text-center mt-2">
            <MenuItem className="block">
              <div className='flex items-center justify-center px-4 py-2 text-white uppercase cursor-pointer bg-primary whitespace-nowrap'>
                Buy Quokka
              </div>
            </MenuItem>
            {headerLinks.map((link) => (
              <MenuItem key={link.href} className="block data-[focus]:text-primary text-[#780A7D] py-1">
                <a href={link.href}>{link.label}</a>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
}

export default NavBar;