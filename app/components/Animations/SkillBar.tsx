"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  skillName: string;
  level: number;
  barColor?: string;
}

export default function SkillBar({
  skillName,
  level,
  barColor = "#66BB6A",
}: SkillBarProps) {
  return (
    <div className="w-full max-w-md mb-4">      
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-[#666666] font-medium">{skillName}</span>        
      </div>
      
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">        
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: barColor }}
          initial={{ width: "0%" }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>
    </div>
  );
}
