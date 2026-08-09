
const skills = [
  {
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    link: "https://nextjs.org/docs",
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/docs",
  },
];

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A modern responsive shopping website built with React and Tailwind CSS.",
    tech: "React • Tailwind CSS",
  },
  {
    title: "Portfolio Website",
    description:
      "A clean and modern developer portfolio designed to showcase skills and projects.",
    tech: "Next.js • Tailwind CSS",
  },
  {
    title: "Web Application",
    description:
      "A responsive web application with a clean interface and interactive features.",
    tech: "JavaScript • React",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">

        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, black, transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 w-full py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              {/* Available Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2
                rounded-full border border-slate-700
                bg-slate-900/80 text-sm text-slate-300 mb-7">

                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                Available for opportunities
              </div>


              <p className="text-cyan-400 font-semibold text-lg">
                Hello, I'm
              </p>


              <h1 className="text-5xl sm:text-6xl lg:text-7xl
                font-bold leading-tight mt-3">

                Yousaf
                <span className="block text-cyan-400">
                  Nadeem.
                </span>

              </h1>


              <h2 className="text-2xl md:text-3xl
                font-semibold text-slate-300 mt-5">

                Front-End Web Developer

              </h2>


              <p className="text-slate-400 text-lg leading-8
                mt-6 max-w-xl">

                I create modern, responsive and user-friendly
                websites that combine clean design with powerful
                functionality.

              </p>


              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-9">

                <a
                  href="#projects"
                  className="group px-7 py-3.5 rounded-xl
                  bg-cyan-400 text-slate-950 font-bold
                  hover:bg-cyan-300 transition
                  shadow-lg shadow-cyan-400/10"
                >
                  View My Projects
                  <span className="inline-block ml-2
                    group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>


                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-xl
                  border border-slate-700
                  bg-slate-900/50
                  font-semibold
                  hover:border-cyan-400
                  hover:text-cyan-400 transition"
                >
                  Let's Talk
                </a>

              </div>


              {/* Social */}
              <div className="flex items-center gap-6 mt-9">

                <span className="text-slate-500 text-sm">
                   <a
                  href="https://www.instagram.com/yousafnadeem642?igsh=MXNkazRxejlqbDFkNA=="
                  className="text-slate-400
                  hover:text-cyan-400 transition"
                >
                 Find Me On
                </a>
                </span>

                <a
                  href="https://github.com/yousafnadeem642"
                  className="text-slate-400
                  hover:text-cyan-400 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/yousaf-nadeem-7717093a3?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  className="text-slate-400
                  hover:text-cyan-400 transition"
                >
                  LinkedIn
                </a>

              </div>

            </div>


            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end">

              <div className="relative">

                {/* Glow */}
                <div className="absolute -inset-10
                  bg-cyan-400/10 blur-3xl rounded-full" />


                {/* Main Card */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80
                  lg:w-96 lg:h-96 rounded-[2rem]
                  border border-slate-700
                  bg-gradient-to-br from-slate-900
                  to-slate-950
                  shadow-2xl
                  flex items-center justify-center">

                  {/* Code */}
                  <div className="font-mono text-left">

                    <p className="text-slate-500">
                      &lt;developer&gt;
                    </p>

                    <p className="text-cyan-400 ml-5 mt-3">
                      const
                      <span className="text-white"> developer </span>
                      =
                    </p>

                    <p className="text-green-400 ml-10 mt-2">
                      "Yousaf Nadeem"
                    </p>

                    <p className="text-cyan-400 ml-5 mt-2">
                      role:
                    </p>

                    <p className="text-yellow-400 ml-10">
                      "Front-End Developer"
                    </p>

                    <p className="text-slate-500 mt-3">
                      &lt;/developer&gt;
                    </p>

                  </div>


                  {/* Floating React */}
                  <div className="absolute -top-6 -right-8
                    px-4 py-2 rounded-xl
                    bg-slate-800 border border-slate-700
                    shadow-xl">
                    ⚛️ React
                  </div>


                  {/* Floating Next */}
                  <div className="absolute -bottom-6 -left-8
                    px-4 py-2 rounded-xl
                    bg-slate-800 border border-slate-700
                    shadow-xl">
                    ▲ Next.js
                  </div>


                  {/* Floating JS */}
                  <div className="absolute top-1/2 -right-16
                    px-4 py-2 rounded-xl
                    bg-slate-800 border border-slate-700
                    shadow-xl hidden sm:block">
                    JS
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4
            gap-4 mt-20 max-w-4xl">

            <div className="border-l border-slate-700 pl-5">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-slate-500 mt-1">
                Projects Built
              </p>
            </div>

            <div className="border-l border-slate-700 pl-5">
              <p className="text-3xl font-bold">6+</p>
              <p className="text-slate-500 mt-1">
                Technologies
              </p>
            </div>

            <div className="border-l border-slate-700 pl-5">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-slate-500 mt-1">
                Passion
              </p>
            </div>

            <div className="border-l border-slate-700 pl-5">
              <p className="text-3xl font-bold">∞</p>
              <p className="text-slate-500 mt-1">
                Learning
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section className="py-24 bg-slate-900/70">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-cyan-400 font-semibold">
              MY TOOLKIT
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Technologies I Use
            </h2>

            <p className="text-slate-400 mt-4">
              Click a technology to explore its official documentation.
            </p>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-3
            lg:grid-cols-6 gap-5">

            {skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl
                bg-slate-950 border border-slate-800
                text-center
                hover:border-cyan-400
                hover:-translate-y-2
                transition duration-300"
              >

                <div className="text-2xl mb-3">
                  {skill.name === "HTML" && "🌐"}
                  {skill.name === "CSS" && "🎨"}
                  {skill.name === "JavaScript" && "⚡"}
                  {skill.name === "React" && "⚛️"}
                  {skill.name === "Next.js" && "▲"}
                  {skill.name === "Tailwind CSS" && "🌊"}
                </div>

                <p className="font-semibold group-hover:text-cyan-400 transition">
                  {skill.name}
                </p>

              </a>
            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col md:flex-row
            justify-between md:items-end gap-5 mb-14">

            <div>

              <p className="text-cyan-400 font-semibold">
                MY WORK
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Featured Projects
              </h2>

            </div>

            <p className="text-slate-400 max-w-md">
              A few projects that showcase my skills,
              creativity and passion for web development.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-2xl overflow-hidden
                border border-slate-800
                bg-slate-900
                hover:border-cyan-400/50
                transition duration-300"
              >

                {/* Project Preview */}
                <div className="h-48 bg-gradient-to-br
                  from-slate-800 to-slate-950
                  flex items-center justify-center">

                  <span className="text-5xl font-bold
                    text-slate-700
                    group-hover:text-cyan-400/50 transition">
                    0{index + 1}
                  </span>

                </div>


                <div className="p-6">

                  <p className="text-cyan-400 text-sm font-semibold">
                    {project.tech}
                  </p>

                  <h3 className="text-xl font-bold mt-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mt-3 leading-7">
                    {project.description}
                  </p>

                  <a
                    href="#"
                    className="inline-block mt-5
                    text-sm font-semibold
                    hover:text-cyan-400 transition"
                  >
                    View Project →
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section id="contact" className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="relative overflow-hidden
            rounded-3xl border border-slate-800
            bg-gradient-to-br from-slate-900
            to-slate-950 p-10 md:p-16 text-center">

            <div className="absolute top-0 left-1/2
              -translate-x-1/2 w-72 h-40
              bg-cyan-400/10 blur-3xl" />

            <div className="relative">

              <p className="text-cyan-400 font-semibold">
                HAVE A PROJECT?
              </p>

              <h2 className="text-4xl md:text-5xl
                font-bold mt-4">
                Let's Work Together
              </h2>

              <p className="text-slate-400
                text-lg max-w-2xl mx-auto mt-5">
                I'm always interested in hearing about
                new projects, ideas and opportunities.
              </p>

              <a
                href="mailto:your-email@example.com"
                className="inline-block mt-8
                px-8 py-4 rounded-xl
                bg-cyan-400 text-slate-950
                font-bold
                hover:bg-cyan-300
                hover:-translate-y-1
                transition"
              >
                Get In Touch →
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

