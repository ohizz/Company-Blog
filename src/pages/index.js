import Head from 'next/head'
import Image from 'next/image'
import { Lora } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getClient } from '../../lib/sanity.server'
import Link from 'next/link'
import groq from 'groq'
import Card from '../../components/Card'

const lora = Lora({ subsets: ['latin'] })

const Home = ({posts, result}) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='font-body grid md:grid-cols-2 gap-6 grid-cols-1'>
    {posts?.map((post) => (
      <div className="">
       <Card post={post}/>
       <Link key={post.id} href={`/posts/${encodeURIComponent(post.slug.current)}`}>
        <button className='border-2 border-gray-900 text-slate-900 text-xs p-2 tracking-wide hover:bg-gray-300 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 '>Read More</button>
      </Link>
       </div>
    ))}
      </main>
    </>
  )
}

export async function getStaticProps ({preview = false}) {
 const posts = await getClient(preview).fetch(groq`
 *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
  _id,
  title,
  "username": author->username,
  "categories": categories[]->{id, title},
  "authorImage": author->avatar,
  body,
  mainImage,
  slug,
  publishedAt,
  "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "..."

 }`)
 return{
  props: {
    posts,
  },
 }
}

let lastId = ''

async function fetchNextPage() {
  if (lastId === null) {
    return []
  }
  const {result} = await fetch(
    groq`*[_type == "article" && _id > $lastId] | order(_id) [0...100] {
      _id, title, body
    }`, {lastId})
  
  if (result.length > 0) {
    lastId = result[result.length - 1]._id
  } else {
    lastId = null // Reached the end
  }
  return result
}
export default Home;