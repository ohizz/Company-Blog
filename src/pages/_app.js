import '../styles/globals.css'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const App = ({ Component, pageProps }) => {
 return(
  <div className='max-w-5xl mx-5 lg:mx-auto'>
   <NavBar/>
   <Component {...pageProps}/>
   <Footer/>
  </div> 
)}

export default App;
