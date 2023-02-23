// navbar component will be two tabs

import Link from 'next/link'
import React from 'react'
import NavLogo from './NavLogo'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Navbar = () => {
  const activeTab: any = React.useRef()
  const tabs = [
    {
      name: <IoDocumentTextOutline />,
      path: '/docs',
    },
    {
      name: <AiOutlineInfoCircle />,
      path: '/about',
    },
  ]


  return (
    // tabs should come from the bottom of the navbar, with a border on the top and sides of the tabs
    <>
      <div className="logo flex items-center top-0 left-0 p-4 z-50 text-xl text-white bg-gradient-to-r from-indigo-900 to-slate-800">
        <NavLogo />

        {/* tabs */}
        {/* put the tabs at the bottom of the navbar */}
        <div className="flex flex-row items-right justify-end space-x-6 ml-auto">
          {tabs.map((tab, index) => (
            <Link
              href={tab.path}
              key={index}
              passHref
              className={`flex items-center justify-center gap-2 p-1 px-6 rounded-md cursor-pointer ${
                activeTab.current === index ? 'bg-slate-500' : 'bg-slate-600'
              }`}
              onClick={() => {
                activeTab.current = index
              }}
            >
              <h1>{tab.name}</h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar
