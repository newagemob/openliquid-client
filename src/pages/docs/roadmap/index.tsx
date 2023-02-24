import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import fs from 'fs'
import path from 'path'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'

const Roadmap = (
  props: {
    frontMatter: { [key: string]: string },
    slug: string,
    content: string,
  }
) => {
  return (
    <>
      <Head key='roadmap'>
        <title>OpenLiquid Roadmap</title>
        <meta name='description' content='ORBIT Roadmap' />
        <meta name='keywords' content='openliquid,orbit,roadmap,documentation,docs,finance,algorithms,quant,quantitative,finance,python,typescript,react,reactjs,react.js,react.ts,react.tsx' />
      </Head>

      <div className='flex flex-col justify-around items-center w-full h-full p-4 my-6 md:mt-16'>
        <div className='flex justify-center items-center bg-gray-100 p-4 rounded-md shadow-md'>
          <div className='flex flex-col justify-center max-w-2xl mx-auto'>
            <div className='flex flex-col justify-between my-4 space-y-2'>
              <h1 className='text-4xl font-bold'>Roadmap</h1>
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
                        className: 'text-decoration-none border-b-2 rounded-sm px-0 py-0 border-indigo-800 hover:bg-indigo-800 hover:text-zinc-200',
                      },
                    },
                    h1: {
                      component: 'h1',
                      props: {
                        className: 'text-3xl font-bold py-4 pt-6',
                      },
                    },
                    h2: {
                      component: 'h2',
                      props: {
                        className: 'text-2xl font-bold py-4',
                      },
                    },
                    h3: {
                      component: 'h3',
                      props: {
                        className: 'text-xl font-bold py-2',
                      },
                    },
                    code: {
                      component: 'code',
                      props: {
                        className: 'bg-gray-100 p-2 rounded-md',
                      },
                    },
                    table: {
                      component: 'table',
                      props: {
                        className: 'table-auto border border-indigo-800 table-rounded-md my-4 w-full p-4',
                      },
                    },
                    th: {
                      component: 'th',
                      props: {
                        className: 'border border-indigo-800 p-2',
                      },
                    },
                    td: {
                      component: 'td',
                      props: {
                        className: 'border border-indigo-800 p-2',
                      },
                    },
                    ul: {
                      component: 'ul',
                      props: {
                        className: 'list-disc list-inside',
                      },
                    },
                    ol: {
                      component: 'ol',
                      props: {
                        className: 'list-decimal list-inside',
                      },
                    },
                    li: {
                      component: 'li',
                      props: {
                        className: 'my-2 ml-6 list-item',
                      },
                    },
                    p: {
                      component: 'p',
                      props: {
                        className: 'my-4',
                      },
                    },
                    strong: {
                      component: 'strong',
                      props: {
                        className: 'font-bold',
                      },
                    },
                    em: {
                      component: 'em',
                      props: {
                        className: 'italic',
                      },
                    },
                  },
                }}
              >
                {props.content}
              </Markdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap

export const getStaticProps = async (context: any) => {
  const markdownWithMeta = fs.readFileSync(process.cwd() + '/src/pages/docs/roadmap/Roadmap.md', 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontMatter,
      content,
    },
  }
}
