import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About me
        </h2>
      </div>
      <div>
        <p className="mb-4">Starting my journey in 2016, I ventured into the world of web development, crafting custom solutions for various clients across different industries. From leading WordPress development at DOM767 to freelancing with Toptal, I've honed my skills in architecting and delivering cutting-edge applications. My tenure at Happy Monster further expanded my expertise, where I developed plugins and features, embraced diverse technologies like PHP, JavaScript, Vue, and Laravel, and collaborated closely with cross-functional teams.</p><p className="mb-4">In my role as Lead Developer at Awe Design Studio, I've had the privilege of spearheading a talented team, leveraging the latest technologies to drive innovation and deliver cutting-edge solutions. With a keen focus on pushing boundaries and embracing emerging trends, we've embarked on numerous projects, pushing the limits of what's possible in the digital space.</p><p className="mb-4">I continue to leverage WordPress's capabilities to create accessible and engaging user experiences. Beyond the screen, I channel my passion for open-source projects, dedicating time to contribute and learn from the vibrant developer community. With a fervent love for WordPress and a commitment to continuous growth, I embrace every opportunity to push boundaries and evolve as a developer.</p>
      </div>
    </section>
  );
}
