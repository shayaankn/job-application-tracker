import { Link } from "react-router-dom";
import heroImg from "../assets/hero.webp";
import screenshotImg from "../assets/screenshot.webp";

export default function Landing() {
  return (
    <main className="bg-stone-50 text-stone-800">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Track your job applications <br className="hidden sm:block" />
              without the chaos
            </h1>
            <p className="text-stone-600 max-w-xl text-lg mt-4">
              A simple, focused job application tracker that helps you stay
              organized, follow up on time, and keep your job search
              stress-free.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                to="/login"
                className="bg-stone-950 hover:bg-stone-900 text-stone-50 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-stone-200 px-6 py-3"
              >
                Get started
              </Link>
              <a
                href="#features"
                className="bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-stone-200 px-6 py-3"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Person using a laptop to organize job applications"
              className="rounded-md border border-stone-200"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything you need to stay on track
          </h2>
          <p className="text-stone-600 mt-3">
            Simple features designed to support your job search.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="border border-stone-300 hover:bg-stone-950 hover:border-stone-950 rounded-md cursor-pointer transition-colors duration-200 group p-6">
            <i className="bi bi-columns-gap text-3xl group-hover:text-stone-50"></i>
            <h3 className="text-lg font-medium group-hover:text-stone-50 mt-2">
              Application board
            </h3>
            <p className="text-sm text-stone-600 group-hover:text-stone-300 mt-2">
              Visualize all your applications by status — applied, interviewing,
              offer, or rejected.
            </p>
          </div>

          <div className="border border-stone-300 hover:bg-stone-950 hover:border-stone-950 rounded-md cursor-pointer transition-colors duration-200 group p-6">
            <i className="bi bi-arrow-repeat text-3xl group-hover:text-stone-50"></i>
            <h3 className="text-lg font-medium group-hover:text-stone-50 mt-2">
              Update statuses
            </h3>
            <p className="text-sm text-stone-600 group-hover:text-stone-300 mt-2">
              Mark applications as applied, interviewing, or offered — see your
              progress at a glance.
            </p>
          </div>

          <div className="border border-stone-300 hover:bg-stone-950 hover:border-stone-950 rounded-md cursor-pointer transition-colors duration-200 group p-6">
            <i className="bi bi-bar-chart-line text-3xl group-hover:text-stone-50"></i>
            <h3 className="text-lg font-medium group-hover:text-stone-50 mt-2">
              Simple overview
            </h3>
            <p className="text-sm text-stone-600 group-hover:text-stone-300 mt-2">
              See your entire job search progress at a glance with a clean,
              visual layout.
            </p>
          </div>
        </div>
      </section>

      {/* MORE DETAILS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-3xl font-bold tracking-tight">
          See your job search at a glance
        </h2>
        <p className="text-stone-600 mt-3">
          The board view makes it easy to understand where you stand with every
          application — no digging required.
        </p>
        <img
          src={screenshotImg}
          alt="App screenshot"
          className="rounded-md border border-stone-200 mt-8"
        />
      </section>

      {/* CTA */}
      <section className="bg-stone-950 text-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Ready to organize your job search?
          </h2>
          <p className="mt-3 text-lg text-stone-100">
            Try the demo and start tracking your applications in minutes.
          </p>

          <div className="mt-6">
            <Link
              to="/login"
              className="text-stone-50 hover:text-stone-800 hover:bg-stone-100 border border-stone-100 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-stone-700 transition-colors duration-200 px-8 py-3"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
