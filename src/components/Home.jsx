import { Link } from "react-router";
import data from "../data/posts.json";

const categories = [
  {
    id: 1,
    title: "إضاءة",
    icon: "fa-solid fa-sun",
    count: 3,
  },
  {
    id: 2,
    title: "بورتريه",
    icon: "fa-solid fa-user",
    count: 3,
  },
  {
    id: 3,
    title: "مناظر طبيعية",
    icon: "fa-solid fa-mountain-sun",
    count: 2,
  },
  {
    id: 4,
    title: "تقنيات",
    icon: "fa-solid fa-sliders",
    count: 5,
  },
  {
    id: 5,
    title: "معدات",
    icon: "fa-solid fa-camera",
    count: 3,
  },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Orange Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>

              <span className="text-sm font-medium text-neutral-300">
                مرحباً بك في عدسة
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              اكتشف{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                فن
              </span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            {/* Buttons */}
            <div
              dir="ltr"
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#161616] border border-[#333333] text-neutral-300 font-semibold rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                <i className="fa-regular fa-circle-question"></i>
                <span>اعرف المزيد</span>
              </Link>

              <Link
                to="/blogs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 hover:-translate-y-1 transition-all duration-300"
              >
                <span>استكشف المقالات</span>
                <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </div>

            {/* Statistics */}
            <div
              dir="ltr"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {/* Writers */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:scale-105 hover:border-orange-500/30 transition-all duration-300">
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  6
                </p>
                <p className="text-neutral-500 text-sm">كاتب</p>
              </div>

              {/* Categories */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:scale-105 hover:border-orange-500/30 transition-all duration-300">
                <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  4
                </p>
                <p className="text-neutral-500 text-sm">تصنيفات</p>
              </div>

              {/* Readers */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:scale-105 hover:border-orange-500/30 transition-all duration-300">
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  +10ألف
                </p>
                <p className="text-neutral-500 text-sm">قارئ</p>
              </div>

              {/* Articles */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:scale-105 hover:border-orange-500/30 transition-all duration-300">
                <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  +50
                </p>
                <p className="text-neutral-500 text-sm">مقالة</p>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Featured Articles */}
<section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
  {/* Background Glow */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div
      dir="rtl"
      className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
    >
      {/* Title */}
      <div className="text-right">
        <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          مميز
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          مقالات مختارة
        </h2>

        <p className="text-neutral-400 text-lg max-w-lg">
          محتوى منتقى لبدء رحلة تعلمك
        </p>
      </div>

      {/* View All */}
      <Link
        to="/blogs"
        className="group inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:from-orange-600 hover:to-orange-700"
      >
        عرض الكل
        <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
      </Link>
    </div>

    {/* Featured Posts */}
    <div className="space-y-8">
      {data.posts.slice(0, 3).map((post, index) => (
        <article
          key={post.id}
          className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <Link
  to={`/blogs/${post.slug}`}
  className="block relative z-10"
  onClick={() => console.log("CARD CLICKED", post.slug)}
>
            <div
              dir="rtl"
              className="grid md:grid-cols-2 gap-0"
            >
              {/* Image - Right */}
              <div className="relative h-72 md:h-[400px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                    <i className="fa-solid fa-star"></i>
                    مميز
                  </span>
                </div>
              </div>

              {/* Content - Left */}
              <div
                dir="rtl"
                className="p-8 md:p-10 flex flex-col justify-center bg-[#161616] text-right"
              >
                {/* Category & Read Time */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                    {post.category}
                  </span>

                  <span className="flex items-center gap-1 text-sm text-neutral-500">
                    <i className="fa-regular fa-clock"></i>
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt || post.description}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between mt-auto">

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                    />

                    <div className="text-right">
                      <p className="text-sm font-semibold text-white">
                        {post.author.name}
                      </p>

                      <p className="text-xs text-neutral-500">
                        {post.date}
                      </p>
                    </div>
                  </div>

                  {/* Read More */}
                  <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    اقرأ المقال
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>

                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  </div>
</section>


    
{/* Categories Section */}
<section className="py-24 bg-[#111111] relative border-y border-[#262626]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="text-center mb-12">
      <span className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        التصنيفات
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        استكشف حسب الموضوع
      </h2>

      <p className="text-neutral-400 text-lg max-w-lg mx-auto">
        اعثر على محتوى مصمم حسب اهتماماتك
      </p>
    </div>

    {/* Categories Cards */}
    <div
      dir="rtl"
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
    >
      {categories.map((category, index) => (
        <Link
          key={category.id}
          to={`/blogs?category=${encodeURIComponent(category.title)}`}
          className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">

            {/* Icon */}
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <i className={`${category.icon} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}></i>
            </div>

            {/* Category Info */}
            <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
              {category.title}
            </h3>

            <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
              {category.count} مقالة
            </p>

            {/* Arrow */}
            <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
              <i className="fa-solid fa-arrow-left text-white text-sm"></i>
            </div>

          </div>
        </Link>
      ))}
    </div>

  </div>
</section>


{/* Latest Articles */}
<section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div
      dir="rtl"
      className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
    >
      {/* Title - Right */}
      <div className="text-right">
        <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          الأحدث
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          أحدث المقالات
        </h2>

        <p className="text-neutral-400 text-lg">
          محتوى جديد طازج من المطبعة
        </p>
      </div>

      {/* View All - Left */}
      <Link
        to="/blogs"
        className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
      >
        عرض جميع المقالات
        <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
      </Link>
    </div>

    {/* Articles Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.posts.slice(3, 6).map((post, index) => (
        <article
          key={post.id}
          className="group bg-[#161616] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Link to={`/blogs/${post.slug}`} className="block">

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Category */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6" dir="rtl">

              {/* Read Time & Date */}
              <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                <span className="flex items-center gap-1">
                  <i className="fa-regular fa-clock"></i>
                  {post.readTime}
                </span>

                <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>

                <span>{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                {post.excerpt || post.description}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-[#262626]">

                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      {post.author.name}
                    </p>

                    <p className="text-xs text-neutral-500">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i className="fa-solid fa-chevron-left text-sm text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>

              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  </div>
</section>


{/* Newsletter */}
<section className="bg-[#0d0d0d] py-24">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto bg-[#171717] border border-gray-800 rounded-3xl py-14 px-8 md:px-12">
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center">
          <i className="fa-regular fa-envelope text-white text-3xl"></i>
        </div>
      </div>

      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mt-8">
        اشترك في
        <span className="text-orange-500"> نشرتنا الإخبارية</span>
      </h2>

      <p className="text-center text-gray-400 text-base md:text-lg mt-5 leading-8 max-w-2xl mx-auto">
        احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
        الإلكتروني
      </p>

      <div className="flex flex-col md:flex-row-reverse gap-4 justify-center mt-10">
        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          className="w-full md:w-[480px] h-14 bg-[#0d0d0d] border border-gray-800 rounded-xl px-6 text-white text-right outline-none focus:border-orange-500 transition-colors"
        />

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 rounded-xl font-bold h-14 transition-colors whitespace-nowrap">
          اشترك الآن
        </button>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 mt-10">
        <div className="flex -space-x-4 rtl:space-x-reverse">
          {data.posts.slice(0, 3).map((post) => (
            <img
              key={post.id}
              src={post.author.avatar}
              alt={post.author.name}
              className="w-11 h-11 rounded-full border-2 border-[#171717] object-cover"
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-gray-500 text-sm">
         

        


          <span>إلغاء الاشتراك في أي وقت</span>
          <span>•</span>


          <span>بدون إزعاج</span>
            <span>•</span>


           <span>
            انضم لـ
            <span className="text-white font-bold"> 10,000+ </span>
            مصور
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
