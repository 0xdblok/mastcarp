import Image from "next/image";
import log from "./log.jpg";

export default function Home() {
  return (
    <section className="flex flex-col items-center     px-20  pb-36 md:pb-10 text-xl text-black text-center white max-md:px-5 max-md:pt-4">
    <div className="md:flex md:flex-col  md:w-full  ">
     <div className="flex flex-col justify-center items-center">
     <Image className=" pt-8"  
     src={log} alt="Skinny" 
     width={140} 
     height={140}/>
     <p className="text-[#3F2786] text-xl font-bold ">Mastcarp</p>
   
   
      </div>
      <p className="text-zinc-900 mt-24 px-8 text-base font-semibold ">When a carp learned to use Farcaster, it became a MastCarp. Now it's teaching other fish how to cast frames.</p>
     
     <div className="px-32 text-zinc-900 pt-8  px-8 text-base  ">
     <p className="text-zinc-900 pt-8  px-8 text-base ">

Okay, so picture this: everyone on Warpcast was trying to be the next big creator, making fancy Frames and dropping the hottest takes. They were all competing to be casting masters, taking themselves way too seriously.




And that's how a token based on being mid at social media became the most relatable thing in web3. Not because it's trying to change the world, but because it reminds us that not everything needs to be that deep.


 </p> 
  <p className="pt-2">Then this one developer had the most random thought ever. "What if we made a token that's literally just about being bad at casting?" And just like that, MastCarp was born.
  </p>
    
        <p className="pt-2">The name came from the most obvious pun ever - instead of being a master of casting, they became a MastCarp. Yeah, it's exactly as dumb as it sounds, and that's the whole point.
        </p>
        <p className="pt-2">At first, people were like "wait, is this serious?" But that was exactly what made it perfect. In a world where every project promises to revolutionize something, MastCarp promises absolutely nothing. Zero utility, zero roadmap, zero chill.
        </p>
        <p className="pt-2">
The community started growing because everyone was tired of pretending they knew what they were doing. Instead of posting their Ws, people started sharing their worst casts and failed frames. It became a safe space for social media awkwardness.
</p>
        <p className="pt-2">
Now whenever someone messes up their cast or makes a Frame that completely flops, they just say "MastCarp energy" and keep it moving. Because sometimes the best thing you can do is just embrace the chaos.
</p>
        <p className="pt-2"> 
And that's how a token based on being mid at social media became the most relatable thing in web3. Not because it's trying to change the world, but because it reminds us that not everything needs to be that deep.
</p>
<p className="pt-2">Welcome to MastCarp - where the only skill requirement is having no skills at all.</p>
        </div>
            <p  className="text-zinc-900 mt-24 px-8 text-base ">CA : 0x60673A91bDa90c4F4b8A3DdFdE779E8D2A946faF</p>
       <div className=" pt-8">
       <a  href="https://app.uniswap.org/swap" className="px-4 py-2 bg-[#3F2786] hover:bg-[#3F2768] text-white text-sm font-medium rounded-md" type="button">
 Buy on Uniswap
</a></div>
       </div>
         <article className="flex flex-col items-center   text-zinc-900 pt-64">


       <nav className="flex gap-3.5 items-center mt-30 max-w-full text-base w-[248px] max-md:mt-10">
         <a href="https://x.com/mastcarp" className="grow self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
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

