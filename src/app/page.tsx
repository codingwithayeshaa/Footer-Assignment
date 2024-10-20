import Footer from "./Footer/page";
import Header from "./Header/page";

export default function Home(){
  return(
    <main>
      <Header/>
       <div className="bg-black text-white text-center w-full py-8 font-bold mt-9">
     <p>Hello World</p>
    </div>
      <Footer/>
    </main>
    )
}

