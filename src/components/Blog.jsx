
import { useState, useEffect } from "react";
import data from "../data/posts.json";
import MainCard from "../components/MainCard";

function Blog() {
  const posts = data.posts;

  const [selectedCategory, setSelectedCategory] =
    useState("جميع المقالات");

  const [searchTerm, setSearchTerm] = useState("");

  // Restore saved view mode
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("blogViewMode") || "grid";
  });

  const [currentPage, setCurrentPage] = useState(1);

  // Save view mode whenever it changes
  useEffect(() => {
    localStorage.setItem("blogViewMode", viewMode);
  }, [viewMode]);

  const postsPerPage = 6;

  const categories = [
    "جميع المقالات",
    ...new Set(posts.map((post) => post.category)),
  ];

  // Filter Posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "جميع المقالات" ||
      post.category === selectedCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = filteredPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Reset Pagination
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <main dir="rtl" className="bg-[#0b0b0b] min-h-screen">

      {/* Hero Section */}
      <section
        className="relative h-[333px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px),
            radial-gradient(ellipse at center, rgba(249,115,22,0.13), transparent 65%)
          `,
          backgroundSize: "60px 60px, 60px 60px, 100% 100%",
        }}
      >

        <div className="relative z-10 text-center px-4">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span>مدونتنا</span>
            <i className="fa-regular fa-newspaper"></i>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            استكشف{" "}
            <span className="text-orange-500">
              مقالاتنا
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>

        </div>
      </section>

      {/* Search & Categories */}
      <section className="border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">

            {/* Search */}
            <div className="relative w-full lg:w-[320px] shrink-0">
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full h-[50px] pr-5 pl-12 rounded-xl bg-[#171717] border border-[#262626] text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />

              <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"></i>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2.5 text-sm rounded-xl border transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-orange-600 border-orange-600 text-white"
                      : "bg-[#171717] border-[#262626] text-gray-400 hover:text-white hover:border-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        {/* Posts Count & View Mode */}
        <div className="flex justify-between items-center mb-8">

          {/* Posts Count */}
          <p className="text-gray-400 text-sm">
            عرض{" "}
            <span className="text-white font-bold">
              {filteredPosts.length}
            </span>{" "}
            مقالات
          </p>

          {/* View Mode */}
          <div
            dir="ltr"
            className="flex items-center gap-1.5 bg-[#171717] border border-[#262626] rounded-xl p-1.5"
          >

            {/* Grid View */}
            <button
              onClick={() => setViewMode("grid")}
              aria-label="Grid View"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-orange-500 text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              <i className="fa-solid fa-table-cells-large"></i>
            </button>

            {/* List View */}
            <button
              onClick={() => setViewMode("list")}
              aria-label="List View"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-orange-500 text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              <i className="fa-solid fa-bars"></i>
            </button>

          </div>
        </div>

        {/* Posts */}
        {currentPosts.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-8"
            }
          >
            {currentPosts.map((post) => (
              <MainCard
                key={post.id}
                post={post}
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <i className="fa-solid fa-magnifying-glass text-4xl text-gray-600 mb-5"></i>

            <h3 className="text-xl font-bold text-white mb-3">
              لا توجد مقالات
            </h3>

            <p className="text-gray-500">
              جرب البحث بكلمات مختلفة أو اختر تصنيفًا آخر
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo({
                    top: 500,
                    behavior: "smooth",
                  });
                }}
                className={`w-12 h-12 rounded-xl border transition-all duration-300 ${
                  currentPage === index + 1
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-[#171717] border-[#2a2a2a] text-gray-400 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

      </section>
    </main>
  );
}

export default Blog;
