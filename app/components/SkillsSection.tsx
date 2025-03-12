"use client";
import SkillBar from "./Animations/SkillBar"
import Image from "next/image";

export default function SkillsSection() {
    return (
<section
        id="competences"
        className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#F2F3EE]/80"
      >
        <h2 className="text-4xl font-bold mb-4">Compétences</h2>

        {/* Liste des compétences */}
        <div className="flex flex-col items-start">
          <SkillBar skillName="HTML" level={100} barColor="#E34F26" />
          <SkillBar skillName="CSS" level={85} barColor="#1572B6" />
          <SkillBar skillName="JavaScript" level={80} barColor="#F7DF1E" />
          <SkillBar skillName="Angular" level={80} barColor="#3C173A" />
          <SkillBar skillName="React" level={75} barColor="#61DAFB" />
          <SkillBar skillName="Node.js" level={70} barColor="#3C873A" />
        </div>
</section>
  );
}