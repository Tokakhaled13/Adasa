import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../assets/logo.png";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        : "text-neutral-400 hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
        : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
    }`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            dir="rtl"
            className="flex justify-between items-center h-20"
          >
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                <img
                  src={logo}
                  alt="عدسة"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  عدسة
                </span>
                <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
                <NavLink to="/" end className={navLinkClass}>
                  الرئيسية
                </NavLink>

                <NavLink to="/blogs" className={navLinkClass}>
                  المدونة
                </NavLink>

                <NavLink to="/about" className={navLinkClass}>
                  من نحن
                </NavLink>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                aria-label="بحث"
                className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
              >
                <i className="fa-solid fa-magnifying-glass text-xl"></i>
              </button>

              <Link
                to="/blogs"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                ابدأ القراءة
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="فتح القائمة"
              aria-expanded={isMenuOpen}
              className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              <i
                className={`fa-solid ${
                  isMenuOpen ? "fa-xmark" : "fa-bars"
                } text-xl`}
              ></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen
                ? "max-h-80 pb-4 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
              <div className="flex flex-col space-y-1">
                <NavLink
                  to="/"
                  end
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  الرئيسية
                </NavLink>

                <NavLink
                  to="/blogs"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  المدونة
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  من نحن
                </NavLink>

                <Link
                  to="/blogs"
                  onClick={closeMenu}
                  className="mt-2 text-center px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  ابدأ القراءة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            dir="rtl"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="flex items-center gap-3 mb-6 group w-fit"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30">
                  <span className="text-white font-bold text-xl">ع</span>
                </div>

                <span className="text-xl font-bold text-white">
                  عدسة
                </span>
              </Link>

              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>

              {/* Social Links */}
              <div className="flex gap-2">
                <a
                  href="https://twitter.com/adasah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>

                <a
                  href="https://github.com/adasah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  href="https://linkedin.com/company/adasah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a
                  href="https://youtube.com/@adasah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                استكشف
              </h3>

              <ul className="space-y-4">
                {[
                  { title: "الرئيسية", path: "/" },
                  { title: "المدونة", path: "/blogs" },
                  { title: "من نحن", path: "/about" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <i className="fa-solid fa-chevron-left text-xs opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                التصنيفات
              </h3>

              <ul className="space-y-4">
                {["إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات"].map(
                  (category) => (
                    <li key={category}>
                      <Link
                        to={`/blogs?category=${encodeURIComponent(category)}`}
                        className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <i className="fa-solid fa-chevron-left text-xs opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                        {category}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                ابقى على اطلاع
              </h3>

              <p className="text-sm text-neutral-500 mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-3"
              >
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  اشترك
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative border-t border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div
              dir="rtl"
              className="flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <p className="text-sm text-neutral-600">
                © 2026 عدسة. صنع بكل{" "}
                <i className="fa-solid fa-heart text-orange-500"></i>{" "}
                جميع الحقوق محفوظة.
              </p>

              <div className="flex gap-6">
                <Link
                  to="/privacy"
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                >
                  سياسة الخصوصية
                </Link>

                <Link
                  to="/terms"
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                >
                  شروط الخدمة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
