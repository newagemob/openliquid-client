import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const About: NextPage = () => {
  return (
    <>
      <Head key='about'>
        <title>About</title>
        <meta name='description' content='About OpenLiquid' />
        <meta name='keywords' content='openliquid,orbit,algorithmic,trading,platform,open,source,finance,algorithms' />
      </Head>

      <div className='flex flex-col justify-around items-center w-full h-full p-4 my-6 md:mt-16'>
        <div className='flex justify-center items-center bg-gray-100 p-4 rounded-md shadow-md'>
          <div className='flex flex-col justify-center max-w-2xl mx-auto'>
            <div className='flex flex-col justify-between my-4 space-y-2'>
              <h1 className='text-4xl font-bold'>About</h1>
              <span className='text-md italic'>About OpenLiquid</span>
            </div>
            <div className='text-left text-sm text-indigo-800 my-4'>
              <Link href='/' className='text-decoration-none border-2 rounded-sm px-2 py-1 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>
                back
              </Link>
            </div>
            <div className='text-left my-4 break-words'>
              <p className='py-2 text-md'>
                OpenLiquid's <span className='font-bold'>ORBIT</span> is an open-source algorithmic trading platform that allows users to create, test, and execute automated trading strategies using real-time market data and advanced analytics. It is a powerful tool for traders, investors, and developers to create, optimize, and backtest trading strategies. ORBIT provides users with a wide range of features, including easy-to-use development tools, powerful analytics and data visualization capabilities, and the ability to execute trades in real-time. Additionally, ORBIT supports a variety of data sources and languages, allowing users to quickly and easily develop custom trading algorithms. We run a server that analyzes, backtests, and executes trades for the <Link href='/fund' className='text-decoration-none border-b-2 rounded-sm px-0 py-0 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>OpenLiquid Fund</Link> based on popular algorithms such as Moving Average Crossover, Mean Reversion, Momentum, Arbitrage, and Market Making. Alternatively, you can run ORBIT on your own server by <Link href='https://github.com/newagemob/orbit' className='text-decoration-none border-b-2 rounded-sm px-0 py-0 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>downloading the repository</Link> and following the guide on <Link href='https://github.com/newagemob/orbit' className='text-decoration-none border-b-2 rounded-sm px-0 py-0 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>GitHub</Link>.
              </p>

              <p className='py-2 text-md'>
                OpenLiquid is a community of developers, traders, and investors who are passionate about building the next generation of trading platforms. We are committed to building a platform that is easy to use, powerful, and open-source. We believe that the best way to build a great product is to build it with the community. We are always looking for new contributors to help us build the next generation of trading platforms. If you are interested in contributing to OpenLiquid, please <Link href='/contact' className='text-decoration-none border-b-2 rounded-sm px-0 py-0 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
