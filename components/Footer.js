const Footer = () =>{
 let year = new Date().getFullYear();
 return(
  <footer className="text-center my-5">
   <p className=" font-head">Copyright © {year} Hello World. All rights reserved</p>
   <p className=" font-head">Made by Ohis</p>
  </footer>
 )
}

export default Footer;