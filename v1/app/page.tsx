import Hero from "@/components/Hero";
import SkillsMatrix from "@/components/SkillsMatrix";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

export const metadata = {
  title: "VanzTyl",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full" id="top">
      <Hero />
      <div id="skills"><SkillsMatrix /></div>
      <div id="experience"><Experience /></div>
      <div id="education"><Education /></div>
      <div id="projects"><Projects /></div>
    </div>
  );
}