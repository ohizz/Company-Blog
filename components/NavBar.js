const NavBar = () => {
 return(
  <div className="flex items-center align-center py-10" >
    <h1 className="font-fancy p-0 m-0"><a href="/" className="text-lg  md:text-6xl lg:text-7xl text-black-900 font-bold font-head">HELLO WORLD</a></h1>
    <a href="#" className="font-body text-gray-700 hover:text-slate-500 ml-6 text-sm">
        About
      </a>
      <a href="#" className="font-body text-gray-700 hover:text-slate-500 ml-6 text-sm">
        Project
      </a>
      <a href="#" className="font-body text-gray-700 hover:text-slate-500 ml-6 text-sm">
        Contact
      </a>
  </div>
 )
}

export default NavBar;