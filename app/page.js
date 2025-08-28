
import Hero from "./sections/Hero";
import TopGames from "./sections/Topgames";
import BelowHeroSection from "./sections/Second";
import GamingSiteSections from "./sections/Faq";
import { Payment } from "./sections/Payments";

export default function Home() {
  return (
   <>
  
   <Hero/>
   
     <TopGames/>
    <BelowHeroSection/>
 
   <GamingSiteSections/>
  <Payment/>
   </>
  );
}
