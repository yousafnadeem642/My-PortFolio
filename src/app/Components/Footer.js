
export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row
          items-center justify-between gap-6">

          {/* Logo / Name */}
          <div className="text-center md:text-left">

            <h2 className="text-2xl font-bold">
              Yousaf
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="text-slate-400 mt-2">
              Front-End Web Developer
            </p>

          </div>


          {/* Social Links */}
          <div className="flex gap-6">

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

            <a
              href="https://www.instagram.com/yousafnadeem642?igsh=MXNkazRxejlqbDFkNA=="
              className="text-slate-400
              hover:text-cyan-400 transition"
            >
              Instagram
            </a>

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Yousaf Nadeem.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

