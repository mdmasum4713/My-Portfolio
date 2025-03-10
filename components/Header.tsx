"use client"
import React, { useState } from 'react';
import Container from './Container';
import { Logo } from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarData } from '@/constants';
import { Menu, } from 'lucide-react';
import Sidebar from './Sidebar';
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname();
  return (
    <header className='border-b border-b-hoverColor/10'>
      <Container className='py-5 flex items-center justify-between'>
        {/* logo */}
        <Logo title="Masum" subtitle="." />

        {/* Navbar List */}
        <div className='hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium'>
          {NavbarData?.map((item) => (
            <Link key={item.href} href={item.href}
              className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${pathname === item?.href && 'text-hoverColor'}`}>
              {item?.title}
              <span className={`w-full h-px bg-hoverColor
                 inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${pathname === item?.href ? 'translate-x-0' : "translate-x-[105%]"}`} />
            </Link>
          ))}
          <Link href={'/resume.pdf'} target='_blank' rel='noopener noreferrer' className='text-sm bg-lightSky/10 px-4 py-2 rounded-[6px] border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect'>
            Hire me
          </Link>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='inline-flex md:hidden'>
          <Menu className='hover:text-hoverColor hoverEffect'>

          </Menu>
        </button>
      </Container>
      <div className='md:hidden'>
        <Sidebar isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          pathname={pathname}
        ></Sidebar>
      </div>
    </header>
  );
};

export default Header;
