import Link from 'next/link'
const NavBar = () => {
 return(
  <div className="flex items-center align-center py-10" >
    <h1 className="font-fancy p-0 m-0"><a href="/" className="text-lg  md:text-6xl lg:text-7xl text-black-900 font-bold font-head">HELLO WORLD</a></h1>
    <Link href="#" className="font-body text-gray-700 hover:text-slate-500 ml-6 text-sm">
        About
      </Link>
      <Link href="#" className="font-body text-gray-700 hover:text-slate-500 ml-6 text-sm">
        Project
      </Link>
      <Link href="#" className="font-body text-gray-700 hover:text-slate-500 ml-6 text-sm">
        Contact
      </Link>
  </div>
 )
}

export default NavBar;