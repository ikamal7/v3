import SocialLink from "@/components/SocialLink";
import NavMenu from "@/components/NavMenu";
import Link from "next/link";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Footer from "@/sections/Footer";
import About from "@/sections/About";

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href={"/"}>Kamal Hosen</Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Senior Software Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
              <NavMenu />
            </div>
            <SocialLink />
          </header>
          <main className="pt-24 lg:w-1/2 lg:py-24" id="content">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
