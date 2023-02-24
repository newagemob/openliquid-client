import Link from 'next/link'
import matter from 'gray-matter'
import fs from "fs"
import path from "path"
import Head from 'next/head'

const Docs = (props: {
  posts: [{
    slug: string,
    frontMatter: { [key: string]: string }
  }]
}) => {
  return (
    <>
      <Head key='docs'>
        <title>OpenLiquid Documentation</title>
        <meta name='description' content='OpenLiquid Documentation' />
        <meta name='keywords' content='openliquid,orbit,roadmap,documentation,docs,finance,algorithms,quant,quantitative,finance,python,typescript,react,reactjs,react.js,react.ts,react.tsx,finance documentation,finance docs,finance api,open source finance' />
      </Head>

      <header className='flex flex-col justify-center items-center w-full h-full p-4 my-6 md:mt-16'>
        <div className='flex flex-col justify-center items-center max-w-2xl mx-auto'>
          <h1 className='text-4xl font-bold text-zinc-900'>OpenLiquid Documentation</h1>
        </div>
      </header>

      <section className='flex flex-col justify-center items-center w-full h-full p-4 my-6 md:mt-16'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3'>
          {/* TODO: order blog posts by date (descending) */}
          {props.posts.map(({ slug, frontMatter: { title, bannerImage, date } }) => (
            <div
              className='flex flex-col justify-around items-center my-4 mx-4 p-4 rounded-md bg-indigo-200 hover:bg-indigo-300'
              key={slug}
            >
              <Link href={`/docs/structure/${slug}`} passHref className='text-decoration-none'>
                <h5
                  className='text-left text-2xl font-bold text-zinc-900 border-none'
                >
                  {title}
                </h5>

                <hr />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}


export async function getStaticProps() {
  // Get files from the posts dir
  const dirPath = path.join(process.cwd(), 'src/pages/docs/structure/markdown_docs')
  const files = fs.readdirSync(dirPath)

  const posts = files.filter(filename => filename.includes(".md")).map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join(dirPath, filename),
      'utf-8'
    )

    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      slug,
      frontMatter,
    }
  }).sort((a, b) => (
    new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  ))

  return {
    props: {
      posts,
    },
  }
}

export default Docs
