import React from 'react'
import fs from 'fs'
import path from 'path'
import matter, { } from 'gray-matter'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'
import Code from '~/components/docs/Code'
import Head from 'next/head'

const Document = (props: {
  frontMatter: { [key: string]: string },
  slug: string,
  content: string,
}) => (
  <>
    <Head key={props.slug}>
      <title>{props.frontMatter.title}</title>
      <meta name='description' content={props.frontMatter.description} />
      <meta name='keywords' content={'openliquid,orbit,roadmap,documentation,docs,finance,algorithms,quant,quantitative,finance,python,typescript,react,reactjs,react.js,react.ts,react.tsx,finance documentation,finance docs,finance api,open source finance,' + props.frontMatter.title} />
    </Head>

    <div className='flex flex-col justify-around items-center w-full h-full p-4 my-6 md:mt-16'>
      <div className='flex justify-center items-center bg-gray-100 p-4 rounded-md shadow-md'>

        <div className='flex flex-col justify-center max-w-2xl mx-auto'>
          <div className='flex flex-col justify-between my-4 space-y-2'>
            <h1 className='text-4xl font-bold'>{props.frontMatter.title}</h1>
            <h3 className='text-xl italic'>{props.frontMatter.description}</h3>
          </div>

          <div className='text-left text-sm text-indigo-800 my-4'>
            <Link href='/docs' className='text-decoration-none border-2 rounded-sm px-2 py-1 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200'>
              back
            </Link>
          </div>

          <div className='text-left my-4 break-words'>
            <Markdown
              options={{
                overrides: {
                  a: {
                    component: Link,
                    props: {
                      className: 'text-decoration-none border-2 rounded-sm px-2 py-1 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200',
                    },
                  },
                  h1: {
                    component: 'h1',
                    props: {
                      className: 'text-3xl font-bold py-4',
                    },
                  },
                  h2: {
                    component: 'h2',
                    props: {
                      className: 'text-2xl font-bold py-2',
                    },
                  },
                  h3: {
                    component: 'h3',
                    props: {
                      className: 'text-xl font-bold py-2',
                    },
                  },
                  code: {
                    component: Code,
                    props: {
                      className: 'bg-zinc-200 p-2 rounded-md break-words rounded-md overflow-hidden',
                    },
                  },
                  strong: {
                    component: 'strong',
                    props: {
                      className: 'py-1 text-lg py-2 font-bold',
                    },
                  },
                  p: {
                    component: 'p',
                    props: {
                      className: 'py-2 text-md',
                    },
                  },
                  ul: {
                    component: 'ul',
                    props: {
                      className: 'py-2 text-md',
                    },
                  },
                  li: {
                    component: 'li',
                    props: {
                      className: 'py-2 text-md italic',
                    },
                  },
                },
              }}
              children={props.content}
            />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Document

export async function getStaticPaths() {
  const dirPath = path.join(process.cwd(), 'src/pages/docs/structure/markdown_docs')
  const files = fs.readdirSync(dirPath)

  const paths = files.filter(filename => filename.includes('.md')).map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: never) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'src/pages/docs/structure/markdown_docs/', slug + '.md'),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  }
}
