import HeroBanner from "./components/HeroBanner";
import HeroHeading from "./components/HeroHeading";
import InfoBox from "./components/InfoBox";
import SocialLinks from "./components/SocialLinks";
import StripedBox from "./components/StripedBox";
import AboutSection from "./components/AboutSection";
import Heading from "./components/layout/Heading";
import StackBox from "./components/StackBox";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSetion";
import BlogsSection from "./components/BlogsSection";

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

      <ProjectsSection />

      <StripedBox />

      <Heading name="Education" />
      <div className="w-full border-b h-fit">
        <EducationSection />
      </div>

      <StripedBox />

      <Heading name="Blogs"/>

      <BlogsSection />
    </main>
  );
}
