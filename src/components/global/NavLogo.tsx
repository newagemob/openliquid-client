import React from 'react'
import Link from "next/link"
import { GiAcidTube } from 'react-icons/gi'

const NavLogo = () => {
  return (
    <>
      <Link
        href="/"
        passHref
        // give a margin on right and left
        className="flex items-center gap-2 mr-2 ml-2 cursor-pointer"
      >
        <GiAcidTube />
        <h1><span className="text-zinc-400">Open</span><span className="text-slate-200">Liquid</span></h1>
      </Link>
    </>
  )
}

export default NavLogo
