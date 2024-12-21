import AllMovieList from "./components/AllMovieList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className=" bg-black text-white" >
      <Navbar />
      <Hero />
      <AllMovieList />
    </div >
  );
}
