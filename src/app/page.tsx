import FadeInComponent from "@/components/FadeInComponent";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/HeroSection";
import Projects from "@/components/home/Projects";
import Tools from "@/components/home/Tools";

export default function Home() {
  return (
    <>
      <FadeInComponent>
        <Hero />
      </FadeInComponent>
      <FadeInComponent>
        <Tools />
      </FadeInComponent>
      <FadeInComponent>
        <Experience />
      </FadeInComponent>
      {/* <Projects /> */}
    </>
  );
}
