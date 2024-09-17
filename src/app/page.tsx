import Accordion from "@/components/Accordion";
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <main>
      <div className="container mx-auto mb-12">
        <Hero/>
        <Accordion/>
       
        
      </div>
    </main>
  );
}
