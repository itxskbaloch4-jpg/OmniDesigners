"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Redesign",
    category: "Web Design",
    description: "Complete WooCommerce overhaul with conversion-focused UX and mobile-first design.",
    color: "from-brand-amber/20 to-brand-amber/5",
  },
  {
    title: "Local SEO Campaign",
    category: "SEO / GEO",
    description: "Tripled organic traffic for a Montreal law firm within 6 months through targeted SEO.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Google Ads Overhaul",
    category: "Google Ads",
    description: "Reduced cost-per-lead by 40% while doubling qualified leads for a home services company.",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    title: "Social Media Growth",
    category: "Social Media",
    description: "Grew Instagram following from 800 to 15,000 in 4 months with targeted content strategy.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    title: "Restaurant Brand Launch",
    category: "Digital Marketing",
    description: "Full digital presence launch including website, social channels, and review management.",
    color: "from-red-500/20 to-red-500/5",
  },
  {
    title: "AI Photo Packages",
    category: "AI Services",
    description: "Professional AI-enhanced product photography that boosted client conversion rates by 28%.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
];

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 bg-brand-brown overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-brand-amber font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Our Work
          </p>
          <h2
            id="portfolio-heading"
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real campaigns. Real businesses. Real growth across Montreal and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-6 bg-gradient-to-br ${project.color} border border-white/10 rounded-2xl hover:border-brand-amber/50 transition-all duration-500 hover:-translate-y-2`}
            >
              <span className="inline-block text-xs font-semibold text-brand-amber uppercase tracking-widest mb-3">
                {project.category}
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-amber transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio/"
            className="inline-flex items-center gap-2 px-8 py-4 border border-brand-amber text-brand-amber font-semibold rounded-xl hover:bg-brand-amber hover:text-brand-brown transition-all duration-300"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
