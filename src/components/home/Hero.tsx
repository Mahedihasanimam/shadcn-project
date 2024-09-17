import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image";
  import heroimg from "../../../public/images/download.png";

const Hero = () => {
    return (
        <div>
            <Carousel>
  <CarouselContent>
    <CarouselItem>
        <Image className="w-full h-[600px] object-cover" alt="heroimg" src={heroimg}/>
    </CarouselItem>
    <CarouselItem>tow...</CarouselItem>
    <CarouselItem>three...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

        </div>
    );
};

export default Hero;