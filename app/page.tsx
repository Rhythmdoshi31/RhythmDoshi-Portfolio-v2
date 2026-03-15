import HeroBanner from "./components/HeroBanner";
import HeroHeading from "./components/HeroHeading";
import InfoBox from "./components/InfoBox";
import SocialLinks from "./components/SocialLinks";
import StripedBox from "./components/StripedBox";
import AboutSection from "./components/AboutSection";
import Heading from "./components/layout/Heading";
import StackBox from "./components/StackBox";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg1 dark:bg-black pb-12">
      {/* HeroBanner */}
      <div className="w-full border-b">
        <HeroBanner />
      </div>

      {/* HeroHeading */}
      <div className="w-full border-b">
        <HeroHeading />
      </div>

      <StripedBox />

      {/* InfoBox */}
      <div className="w-full border-b">
        <InfoBox />
      </div>

      {/* Social Links */}
      <div className="w-full h-16 border-b">
        <SocialLinks />
      </div>

      <StripedBox />

      {/* About Heading */}
      <Heading name="About" />

      {/* About Section */}
      <div className="w-full border-b">
        <AboutSection />
      </div>

      <StripedBox />

      <Heading name="Stack" />

      <div className="w-full border-b">
        <StackBox />
      </div>

      <StripedBox />

      <Heading name="Projects" />

      <div className="w-full border-b">
        <div className="innerContainer h-12 flex items-center justify-start px-4 font1 tracking-tighter text2 text-sm">
          <h3>A collection of some of the projects I&apos;ve worked on.</h3>
        </div>
      </div>

      {/* // Project lines */}
      <div className="w-full border-b">
        <div className="innerContainer h-5 relative">
          <div className="pointer-events-none absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-r border-edge"></div>
            <div className="border-l border-edge"></div>
          </div>
        </div>
      </div>

      <div className="w-full border-b h-fit">
        <ProjectsSection />
      </div>

      <div className="w-full border-b">
        <div className="innerContainer h-5 relative">
          <div className="pointer-events-none absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-r border-edge"></div>
            <div className="border-l border-edge"></div>
          </div>
        </div>
      </div>

      <div className="w-full border-b h-fit">
        <ProjectsSection />
      </div>

      <div className="w-full border-b">
        <div className="innerContainer h-5 relative">
          <div className="pointer-events-none absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-r border-edge"></div>
            <div className="border-l border-edge"></div>
          </div>
        </div>
      </div>

      <div className="w-full border-b h-fit">
        <ProjectsSection />
      </div>
      <div className="w-full border-b">
        <div className="innerContainer h-5 flex items-center justify-end px-4">
          <h5 className="text-sm text1 font2 tracking-tighter hover:underline"> More Projects on Github</h5>
        </div>
      </div>



      <StripedBox />

      <Heading name="Education" />
      <div className="w-full border h-fit"></div>
    </main>
  );
}
