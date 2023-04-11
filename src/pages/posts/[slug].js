import groq from "groq"
import Tag from "../../../components/Tag"
import Image from 'next/image'
import { PortableText } from "@portabletext/react"
import { urlForImage } from "../../../lib/sanity"
import { getClient } from "../../../lib/sanity.server"

const PostComponents = {
 types: {
    image: ({value}) => {
        return(
            <img className="post-image"
            alt={value.alt || ""}
            src={urlForImage(value)}/>
        )
    }
 }
}

const Post = ({post}) => {
 const{title, categories, body, authorImage, username, about, postedAt, publishedAt} = post
 return(
  <section className="font-body max-w-3xl mx-8 lg:mx-auto text-justify">
   {post && <article>
    <div className="flex justify-center align-center mt-3 mb-10">
    <h1 className="text-5xl font-head font-semibold text-center">{title}</h1>
    {categories.map((category) => (
      <div className="self-end my-3 text-left uppercase text-xs text-slate-900">
      {category && (<Tag key={category.id} title={category.title}/>)}
      </div>
    ))}
    </div>
    <p className="text-sm text-gray-500 tracking-tighter mb-4"> {new Date(post.publishedAt).toDateString()}</p>
    <PortableText className="text-justify" value={body} components={PostComponents}/>
    <hr className="my-6"/>
    <div className="my-2 font-body flex flex-row align-center flex-cols" >
      <div className="flex align-center">
      <Image className=" object-cover h-9 w-9 mr-2 rounded-full"
   alt={username + 'avatar'}
   src={urlForImage(authorImage)}/>
   <p className="text-gray-800 dark:text-gray-400 text-sm uppercase self-center">Posted - {username}</p>
      </div>
      <div className="flex">
      <p className="text-slate-700">About Author</p>
   <p className="tracking-wider">{about} </p>
    </div>
    </div>
    </article>}
  </section>
 )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
 title,
 "username": author->username,
 "about": author->bio,
 "categories": categories[]->{id, title},
 "authorImage": author->avatar,
 body,
 publishedAt,
 mainImage,
 postedAt,
}`

export async function getStaticPaths() {
 const paths = await getClient().fetch(
 groq`*[_type == "post" && defined(slug.current)][].slug.current`
)
 return{
 paths: paths.map((slug) => ({params: {slug}})),
 fallback: true,
}
}

export async function getStaticProps({params, preview = false}) {
 const post = await getClient(preview).fetch(query, {slug: params.slug})
 return{
  props: {
   post,   
 }
}
}

export default Post