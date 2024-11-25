import Image from "next/image";
import log from "./log.jpg";

export default function Home() {
  return (
    <section className="flex flex-col items-center   px-20  pb-36 md:pb-10 text-xl text-black text-center white max-md:px-5 max-md:pt-4">
    <div className="md:flex md:flex-col  md:w-full  ">
     <div className="flex flex-col justify-center items-center">
     <Image className="ml-4 pt-8"  
     src={log} alt="Skinny" 
     width={140} 
     height={140}/>
     <p className="text-white ">Mastcarp</p>
   
   
      </div>
      <p className="text-zinc-900 mt-24 px-8 text-base ">When a carp learned to use Farcaster, it became a MastCarp. Now it's teaching other fish how to cast frames.</p>
      <p className="text-zinc-900  px-8 text-base ">

       
       </p> 
        <p className="text-zinc-100 text-sm font-thin"></p>
        
            <p  className="text-zinc-900 mt-24 px-8 text-base ">CA : TBA</p>
       <div className=" pt-8">
       <a  href="https://app.uniswap.org/swap" className="px-4 py-2 bg-[#3F2786] hover:bg-[#3F2768] text-white text-sm font-medium rounded-md" type="button">
 Buy on Uniswap
</a></div>
       </div>
         <article className="flex flex-col items-center   text-zinc-900 pt-64">


       <nav className="flex gap-3.5 items-center mt-80 max-w-full text-base w-[248px] max-md:mt-10">
         <a href="" className="grow self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
           twitter
         </a>
         <span aria-hidden="true" className="self-stretch">|</span>
         <a href="#chart" className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
           chart
         </a>
         <span aria-hidden="true" className="self-stretch">|</span>
         <a href="" className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
           MastCarp
         </a>
       </nav>
     </article>
   </section>
  );
}
