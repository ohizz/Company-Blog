import { urlForImage } from "../lib/sanity";
import Tag from "./Tag";
import Image from 'next/image'
const Card = ({post}) => {
 return(
  <div className="max-w-4xl lg:max-w-md">
      <h2 className="font-head mt-2 text-2xl uppercase block font-semibold tracking-tight lg:leading-snug text-brand-primary w-50 lg:text-5xl text-black-500">{post.title}</h2>
      <div className="flex ">
     {post.categories.map((category) => (
        <div key={post.id} className="uppercase font-normal text-slate-400 text-sm tracking-wide mr-3">
      {category && (<Tag key={category.id} title={category.title}/>)}
      </div>
    ))}
    </div>
   {/* <img className="mainImage"
   alt={post.title + 'image'}
  //  src={urlForImage(post.mainImage)}
   /> */}
  <div className="pt-3 mb-2 flex align-center justify-start">
  <img className=" object-cover h-6 w-6 mr-2 rounded-full"
   alt={post.username + 'avatar'}
   src={urlForImage(post.authorImage)}/>
   <p className="text-gray-500 dark:text-gray-800 tracking-tighter text-sm mr-6">by {post.username}</p>
   <p className="text-sm text-gray-500 tracking-tighter"> {new Date(post.publishedAt).toDateString()}</p>
  </div>
  <p className="max-w-3xl md:max-w-4xl text-justify">{post.excerpt}</p>
  <div>
  <hr className="my-4"/>
  </div>
    </div>
 )
}

export default Card;