import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Fund: NextPage = () => {
  return (
    <>
      <Head key='fund'>
        <title>OpenLiquid Open Source Fund</title>
        <meta name='description' content='OpenLiquid Open Source Fund' />
        <meta name='keywords' content='openliquid,fund,open source,documentation,docs,finance,algorithms,quant,quantitative,finance,python,typescript,react,reactjs,react.js,react.ts,react.tsx,open source finance,open source fund' />
      </Head>

      <div className='flex flex-col justify-around items-center w-full h-full p-4 my-6 md:mt-16'>
        <div className='flex justify-center items-center bg-gray-100 p-4 rounded-md shadow-md'>
          <div className='flex flex-col justify-center max-w-2xl mx-auto'>
            <div className='flex flex-col justify-between my-4 space-y-2'>
              <h1 className='text-4xl font-bold'>Fund</h1>
              <h3 className='text-xl italic'>OpenLiquid Open Source Fund</h3>
            </div>

            <div className='text-left text-sm text-indigo-800 my-4'>
              <Link href='/docs' className='text-decoration-none border-2 rounded-sm px-2 py-1 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>
                back
              </Link>
            </div>

            <div className='text-left my-4 break-words'>
              <h1 className='text-3xl font-bold py-4'>What is the Open Source Fund?</h1>
              <p className='py-2 text-md'>
                OpenLiquid Open Source Fund is a fund that is managed by OpenLiquid Capital and currently powered by OpenLiquid's <Link href='/docs' className='text-decoration-none border-b-2 rounded-sm px-0 py-0 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>ORBIT</Link> trading agent. The fund is a pool of money collected at the beginning of each quarter, with dividends, interest, and capital gains paid out or reinvested at the each asset's discretion.
                Please stand by while we are developing our <Link href='/dashboard'>user interface</Link> for managing user investments, voting privileges, and other fund management features.
              </p>

              <h1 className='text-3xl font-bold py-4'>How do I invest in the Open Source Fund?</h1>
              <p className='py-2 text-md'>
                While we are still in development, and testing <Link href='/docs' className='text-decoration-none border-b-2 rounded-sm px-0 py-0 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>ORBIT</Link> (our algorithmic trading pipeline), we are not accepting investments into the Open Source Fund. To be notified when we are accepting investments, please sign up for our <Link href='/newsletter' className='text-decoration-none border-b-2 rounded-sm px-0 py-0 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>newsletter</Link>. If you are interested in helping us develop <Link href='/docs' className='text-decoration-none border-b-2 rounded-sm px-0 py-0 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>ORBIT</Link>, please <Link href='/contact' className='text-decoration-none border-b-2 rounded-sm px-0 py-0 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// TODO: create /orbit page, /dashboard page, /newsletter page, /contact page

export default Fund