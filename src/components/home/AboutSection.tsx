"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 bg-brand-brown overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-brand-amber font-semibold text-sm uppercase tracking-[0.3em] mb-4">
              Who We Are
            </p>
            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Your Montreal Digital Marketing, SEO &amp;{" "}
              <span className="gradient-text">Web Design Agency</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 text-base">
              Omnivision Design is a digital marketing agency in Montreal that offers a unique
              combination of highly specialized digital marketing services (primarily SEO-related)
              to small and medium-sized businesses. In addition to professional web design and
              development, Omnivision Design has the best quality web marketing strategy in-store,
              guaranteed to take your company's marketing plan to the next level.
            </p>
            <p className="text-white/70 leading-relaxed mb-8 text-base">
              Let the top digital marketing company in Montreal help you achieve your financial
              objectives, boost your bottom line, and improve your position in the search engine
              results pages (SERPs) of Google and other search engines.
            </p>
            <Link
              href="/web-marketing-agency/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-amber text-brand-brown font-bold rounded-full hover:bg-brand-amber-light transition-all duration-300 hover:scale-105 amber-glow"
            >
              Learn More About Us
            </Link>
          </motion.div>

          {/* Right: Service cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                title: "Web Design",
                desc: "Creation and development of a website, including programming and content integration.",
                icon: "🎨",
              },
              {
                title: "SEM",
                desc: "Pay-per-click advertising — pay-as-you-go system that lets you pay per lead visiting your website.",
                icon: "📈",
              },
              {
                title: "SEO",
                desc: "Rank higher in organic search results and attract more visitors to your site.",
                icon: "🔍",
              },
              {
                title: "Social Media",
                desc: "Connect with prospective customers and build relationships while exercising brand control.",
                icon: "📱",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-6 bg-white/5 border border-brand-amber/20 rounded-2xl backdrop-blur-sm hover:border-brand-amber/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-brand-amber transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-brand-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
