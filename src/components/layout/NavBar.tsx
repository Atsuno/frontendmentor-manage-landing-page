'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import useDataStore from '@/hooks/useDataStore'

const NavBar = () => {
  const { banner, btnText, menuList } = useDataStore()
  const [isMenu, toggleMenu] = useState(false)

  return (
    <section className="flex w-full items-center justify-between gap-5 p-5 md:px-10 md:text-sm lg:px-20 lg:text-base">
      <div>
        {banner.svg}
      </div>

      <ul className="hidden items-center gap-5 font-bold md:flex md:gap-3 md:text-sm lg:gap-10">
        {menuList.map((value) => (
          <li key={value}><Link className="hover:text-primary-two/70" href="/" rel="noopenner">{value}</Link></li>
        ))}
      </ul>

      <button className="hidden rounded-full bg-primary-one text-sm text-specific shadow-lg shadow-primary-one/40 hover:bg-primary-one/80 md:block md:px-6 md:py-3 lg:w-fit lg:px-10 lg:py-4" type="button">{btnText}</button>

      <div className="drawer drawer-end w-fit md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content z-50">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" text-2xl" onClick={() => toggleMenu(!isMenu)} aria-hidden="true">
            {!isMenu ? <GiHamburgerMenu /> : <AiOutlineClose /> }
          </label>
        </div>
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={() => toggleMenu(!isMenu)} aria-hidden="true" />
          <ul className={`${!isMenu ? '' : 'justify-self-center'} menu mt-20 h-60 w-60  items-center bg-specific p-4 font-bold`}>
            {/* Sidebar content here */}
            {menuList.map((value) => (
              <li key={value}><Link href="/" rel="noopenner">{value}</Link></li>
            ))}
          </ul>
        </div>
      </div>

    </section>

  )
}

export default NavBar
