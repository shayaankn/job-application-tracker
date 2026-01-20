import { Link } from "react-router-dom";
import { useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import screenshotFull from "../assets/screenshot-full.webp";
import screenshotHalf from "../assets/screenshot-half.webp";

export default function Landing() {
  useEffect(() => {
    const typed = new window.Typed("#typed", {
      strings: ["without the chaos.", "in one place.", "the smart way."],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1400,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <main className="bg-white text-slate-900 w-full">
      {/* <Navbar /> */}

      {/* HERO SECTION */}
      <section className="flex flex-col sm:items-center sm:text-center max-w-6xl mx-auto px-6 pt-18 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Track your job applications <br className="hidden sm:block" />{" "}
          <span id="typed"></span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8">
          A simple, focused job application tracker that helps you stay
          organized, follow up on time, and keep your job search stress-free.
        </p>

        <div className="flex gap-4 mb-12">
          <Link
            to="/board"
            className="text-slate-900 bg-purple-200 hover:bg-purple-300 border border-purple-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-200 cursor-pointer transition px-7 py-3"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="text-slate-900 bg-white hover:bg-purple-200 border border-slate-200 hover:border-purple-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-200 cursor-pointer transition px-7 py-3"
          >
            Learn more
          </a>
        </div>

        <img
          src={screenshotHalf}
          alt="Product preview"
          className="w-full max-w-6xl rounded-2xl border border-slate-200 md:hidden"
        />

        <img
          src={screenshotFull}
          alt="Product preview"
          className="w-full max-w-6xl rounded-2xl border border-slate-200 hidden md:block"
        />
      </section>

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6 py-14"
      >
        {/* Card 1 */}
        <div className="border border-slate-200 rounded-2xl cursor-pointer transition hover:-translate-y-2 hover:shadow-lg p-6">
          {/* Content */}
          <div className="flex flex-col">
            <div className="bg-purple-100 flex items-center justify-center h-14 w-14 rounded-xl text-2xl mb-4">
              <i className="bi bi-grid-1x2-fill"></i>
            </div>

            <h3 className="text-lg font-semibold mb-2">Application Board</h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Visualize all your applications by status — applied, interviewing,
              offer, or rejected.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-slate-200 rounded-2xl cursor-pointer transition hover:-translate-y-2 hover:shadow-lg p-6">
          {/* Content */}
          <div className="flex flex-col">
            <div className="bg-purple-100 flex items-center justify-center h-14 w-14 rounded-xl text-2xl mb-4">
              <i className="bi bi-clipboard-check-fill"></i>
            </div>

            <h3 className="text-lg font-semibold mb-2">Update statuses</h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Mark applications as applied, interviewing, or offered — see your
              progress at a glance.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-slate-200 rounded-2xl cursor-pointer transition hover:-translate-y-2 hover:shadow-lg p-6">
          {/* Content */}
          <div className="flex flex-col">
            <div className="bg-purple-100 flex items-center justify-center h-14 w-14 rounded-xl text-2xl mb-4">
              <i className="bi bi-bar-chart-fill"></i>
            </div>

            <h3 className="text-lg font-semibold mb-2">Simple overview</h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              See your entire job search progress at a glance with a clean,
              visual layout.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-1 pb-1 pt-10">
        <div className="bg-purple-100 rounded-2xl">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Ready to organize your job search?
            </h2>
            <p className="text-slate-600 text-lg mt-4">
              Try the demo and start tracking your applications in minutes.
            </p>

            <div className="mt-8">
              <Link
                to="/board"
                className="text-slate-50 bg-slate-950 hover:bg-slate-900 rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 transition-colors duration-200 px-7 py-3"
              >
                Start Tracking <i class="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
