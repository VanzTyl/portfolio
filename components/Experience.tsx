"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experienceData = [
  {
    role: "Cybercafé Administrator",
    company: "Bunker Gaming (Family Business · IT Operations)",
    period: "2018–2020",
    responsibilities: [
      "Managed daily ops of a multi-client cybercafé",
      "Maintained diskless workstations on a central server",
      "Hardware & software troubleshooting",
      "Basic LAN networking (network switches)"
    ]
  },
  {
    role: "Operations Assistant",
    company: "LIZA LYN PH (Family Business · E-Commerce)",
    period: "2016–2020",
    responsibilities: [
      "Managed product listings on Shopee, Lazada, Zalora",
      "Handled customer chat support & order inquiries",
      "Product photography & image editing (GIMP)",
      "Data tracking & records (Microsoft Excel)"
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-charcoal-950 flex justify-center overflow-hidden">
      <div className="max-w-4xl w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }} // <-- Fixed: once set to false
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <Briefcase className="w-8 h-8 text-lightning" />
            Work <span className="text-lightning">Experience</span>
          </h2>
          <p className="text-foreground-secondary text-lg font-light">
            Foundational background in physical IT operations and business administration.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-charcoal-800 ml-4 md:ml-6 space-y-12">
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: -35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }} // <-- Fixed: once set to false
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute w-4 h-4 bg-charcoal-900 border-2 border-lightning rounded-full -left-2.25 top-1.5 ring-4 ring-charcoal-950" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                  <h4 className="text-lg text-foreground-secondary font-medium">{job.company}</h4>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-lightning bg-lightning-muted px-3 py-1.5 rounded-full w-fit">
                  <Calendar className="w-4 h-4" />
                  {job.period}
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {job.responsibilities.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground-secondary">
                    <ChevronRight className="w-5 h-5 text-charcoal-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}