import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold text-white/70 tracking-wider mb-1">Front End Developer</h3>
            <h2 className="text-3xl md:text-5xl mb-2">Hello I&apos;m</h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">Masum Khondokher</h1>
          </div>
          <p className="w-auto md:max-w-[500px] text-white/50 font-thin leading-6">As a Front-End Developer, I design and build interactive web interfaces, enhance user experiences, and ensure websites are responsive and visually appealing.
             From crafting UI components to optimizing performance, I bridge the gap between design and functionality.</p>
             <a download href={'/resume.pdf'} className="bg-transparent rounded-full border border-lightSky/50 flex items-center px-6 py-2.5 gap-2
              text-sm text-lightSky hover:bg-hoverColor hover:text-black hoverEffect">Download cv<Download className="w-4"></Download></a>
              <SocialLinks></SocialLinks>
              <Statistics></Statistics>
        </div>
        <div>photo</div>
      </Container>

    </div>
  );
}
