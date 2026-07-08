"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    school: "CIIT Colleges of Art & Technology, Quezon City",
    period: "2025-Present",
    course: "BS Computer Science",
    specialization: "Artificial Intelligence & Cloud Computing",
    status: "In Progress (Year 1 of 4)",
    achievements: [
      "Hackathon Jam Participant (CIIT, A.Y. 2025-2026)"
    ]
  },
  {
    school: "Technological Institute of the Philippines, Quezon City",
    period: "2024-2025",
    course: "BS Data Science & Analytics",
    status: "Completed 1 Semester",
    achievements: [
      "Included in Top 10 Finalists - Innov8 Ideathon by Microsoft Student Community (2024, TIP Manila)",
      "4th Place - Interdepartmental General Info Quiz Bee (2024, TIP QC) · Topnotcher in elimination round"
    ]
  },
  {
    school: "STI College Marikina",
    period: "2022-2024",
    course: "TVL - IT · Mobile App and Web Development",
    status: "Completed",
    achievements: [
      "2nd Runner Up - Codefest Tagisan ng Talino 2023-24 (Local Level)",
      "Entrant - Codefest Tagisan ng Talino 2022-23 (Local Level)",
      "SHS Expo - Best in Communication & Best Use of Theme (served as Class President)"
    ]
  }
];

export default function Education() {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-charcoal-950 flex justify-center overflow-hidden">
      <div className="max-w-4xl w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <GraduationCap className="w-8 h-8 text-lightning" />
            Academic <span className="text-lightning">Background</span>
          </h2>
          <p className="text-foreground-secondary text-lg font-light">
            My formal educational journey and key academic milestones.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-charcoal-800 ml-4 md:ml-6 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: -35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Node */}
              <div className="absolute w-4 h-4 bg-charcoal-900 border-2 border-lightning rounded-full -left-2.25 top-1.5 ring-4 ring-charcoal-950" />
              
              <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 md:p-8 hover:border-lightning/30 transition-colors duration-500">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.course}</h3>
                    <h4 className="text-lg text-foreground-secondary font-medium mt-1">{edu.school}</h4>
                    {edu.specialization && (
                      <p className="text-lightning font-medium mt-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Specialization: {edu.specialization}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <span className="flex items-center gap-2 text-sm font-medium text-lightning bg-lightning-muted px-3 py-1.5 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="text-sm text-foreground-tertiary font-mono uppercase tracking-wider px-1">
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="mt-6 pt-6 border-t border-charcoal-800/50">
                  <h5 className="text-sm font-semibold text-foreground-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-4 h-4 text-lightning" />
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground-secondary text-sm md:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-charcoal-700 shrink-0 mt-2" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}