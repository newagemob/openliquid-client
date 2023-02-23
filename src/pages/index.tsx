import { type NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { api } from "~/utils/api"

const Home: NextPage = () => {
  const links = [
    {
      href: "/docs",
      text: "Documentation"
    },
    {
      href: "/docs/roadmap",
      text: "Roadmap"
    },
    {
      href: "/about",
      text: "About"
    }
  ]

  return (
    <>
      <Head>
        <title>OpenLiquid Capital</title>
        <meta name="description" content="Open Source Algorithmic Trading Firm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-indigo-900 to-slate-800">
        <section className="flex flex-col w-[100vw] h-[100vh] justify-center justify-around">
          <div className="flex-col justify-center items-center px-8 md:px-20">
            <h1 className="text-4xl font-bold text-zinc-300 font-sans">OpenLiquid Capital</h1>
            <p className="text-md text-zinc-400 font-mono px-1.5 py-2">FOSS Algorithmic Trading Firm</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-around mt-8 space-y-4 md:space-y-0 md:space-x-4">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="border-2 border-zinc-300 rounded-md px-4 py-2 text-xl text-zinc-300 hover:bg-zinc-400 hover:font-bold hover:text-slate-900 transition duration-300 ease-in-out w-[12rem] text-center">
                <span>{link.text}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
