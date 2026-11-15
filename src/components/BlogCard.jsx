
import MainCard from "../components/MainCard";
import data from "../data/posts.json";
import { Link, useParams } from "react-router";

function BlogCard() {
  const { slug } = useParams();

  const post = data.posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold text-white">
          المقال غير موجود
        </h2>
      </section>
    );
  }

  const relatedPosts = data.posts
    .filter(
      (item) =>
        item.category === post.category &&
        item.id !== post.id
    )
    .slice(0, 3);

  // Parse Article Content
  const contentSections = post.content
    .split("\n\n")
    .filter((section) => section.trim());

  const intro = contentSections[0];

  const articleSections = [];

  contentSections.slice(1).forEach((section) => {
    const trimmedSection = section.trim();

    if (trimmedSection.startsWith("## ")) {
      articleSections.push({
        id: `section-${articleSections.length}`,
        title: trimmedSection.replace("## ", "").trim(),
        paragraphs: [],
      });
    } else if (articleSections.length > 0) {
      articleSections[articleSections.length - 1].paragraphs.push(
        trimmedSection
      );
    }
  });

  // Format Date
  const formattedDate = new Date(
    `${post.date}T00:00:00`
  ).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
  });

  const shareUrl = window.location.href;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <>
      {/* Article Hero - Full Width */}
      <section className="w-full pt-10">

        <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">

          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10"></div>

          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:px-16 lg:px-24 pb-12 text-right">

            <span className="w-fit px-4 py-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-full text-sm mb-5">
              {post.category}
            </span>

            <div className="flex flex-wrap items-center gap-5 text-neutral-300 text-sm mb-5">

              <span>
                <i className="fa-regular fa-calendar ml-2 text-orange-500"></i>
                {formattedDate}
              </span>

              <span>
                <i className="fa-regular fa-clock ml-2 text-orange-500"></i>
                {post.readTime}
              </span>

            </div>

            <h1 className="text-white text-3xl md:text-5xl font-bold leading-relaxed max-w-4xl">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 mt-6">

              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
              />

              <div>
                <p className="text-white font-semibold">
                  {post.author.name}
                </p>

                <p className="text-neutral-400 text-sm">
                  {post.author.role}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Article Content */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-10 py-16"
        dir="rtl"
      >

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-8 lg:gap-12 items-start">

          {/* Main Article - Right */}
          <main className="min-w-0 text-right">

            {/* Quote */}
            <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">

              <p className="text-lg text-neutral-200 leading-relaxed italic">
                "{post.excerpt}"
              </p>

            </div>

            {/* Article Text */}
            <div className="prose-custom">

              <p className="text-neutral-300 leading-relaxed mb-6 text-lg text-right">
                {intro}
              </p>

              {articleSections.map((section) => (
                <div key={section.id}>

                  <h2
                    id={section.id}
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24 text-right"
                  >

                    <span className="flex items-center justify-center w-10 h-10 shrink-0 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500"></i>
                    </span>

                    {section.title}

                  </h2>

                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-neutral-300 leading-relaxed mb-6 text-lg text-right"
                    >
                      {paragraph}
                    </p>
                  ))}

                </div>
              ))}

            </div>

            {/* Tags */}
            <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                  <i className="fa-solid fa-tags text-orange-500"></i>
                </div>

                <h3 className="font-bold text-white">
                  الوسوم
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}

              </div>
            </div>

            {/* Share */}
            <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">

              <div className="flex items-center justify-between flex-wrap gap-4">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-share-nodes text-orange-500"></i>
                  </div>

                  <h3 className="font-bold text-white">
                    شارك المقال
                  </h3>

                </div>

                <div className="flex gap-2">

                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + shareUrl)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>

                  <button
                    onClick={copyLink}
                    className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <i className="fa-solid fa-link"></i>
                  </button>

                </div>
              </div>
            </div>

            {/* Author */}
            <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

                <img
                  alt={post.author.name}
                  className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                  src={post.author.avatar}
                />

                <div className="text-center sm:text-right flex-1">

                  <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                    كاتب المقال
                  </span>

                  <h3 className="text-xl font-bold text-white mt-1">
                    {post.author.name}
                  </h3>

                  <p className="text-neutral-500 text-sm mb-3">
                    {post.author.role}
                  </p>

                  <p className="text-neutral-400 text-sm leading-relaxed">
                    مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                  </p>

                </div>
              </div>
            </div>

          </main>

         {/* Sidebar - Left */}
<aside className="min-w-0 self-start h-fit lg:sticky lg:top-24">

  <div className="space-y-6">

    {/* Table of Contents */}
    <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">

      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
          <i className="fa-solid fa-list text-orange-500"></i>
        </div>

        <h3 className="font-bold text-white">
          محتويات المقال
        </h3>
      </div>

      <nav className="space-y-2">
        {articleSections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
          >
            <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
              {index + 1}
            </span>

            <span className="text-sm">
              {section.title}
            </span>
          </a>
        ))}
      </nav>
    </div>

    {/* Article Info */}
    <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">

      <div className="grid grid-cols-2 gap-4">

        <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
          <i className="fa-regular fa-clock text-orange-500 text-xl mb-2"></i>
          <p className="text-white font-bold text-sm">
            {post.readTime}
          </p>
          <p className="text-neutral-500 text-xs">
            وقت القراءة
          </p>
        </div>

        <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
          <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2"></i>
          <p className="text-white font-bold text-sm">
            {formattedDate}
          </p>
          <p className="text-neutral-500 text-xs">
            تاريخ النشر
          </p>
        </div>

      </div>
    </div>

    {/* Newsletter */}
    <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">

      <div className="text-center">

        <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
        </div>

        <h3 className="font-bold text-white mb-2">
          لا تفوّت جديدنا
        </h3>

        <p className="text-neutral-400 text-sm mb-4">
          اشترك للحصول على أحدث المقالات
        </p>

        <a
          className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
          href="/blogs"
        >
          تصفح المزيد
        </a>

      </div>
    </div>

  </div>
</aside>

        </div>

       
{/* Related Articles */}
<div className="mt-20 pt-12 border-t border-[#262626]">

  {/* Section Header */}
  <div className="flex items-center justify-between mb-10">

    <div className="flex items-center gap-4">

      <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
        <i className="fa-solid fa-images text-orange-500 text-xl"></i>
      </span>

      <div>
        <h2 className="text-2xl font-bold text-white">
          مقالات قد تعجبك
        </h2>

        <p className="text-neutral-500 text-sm">
          استكشف المزيد من المحتوى المميز
        </p>
      </div>

    </div>

    <a
      href="/blogs"
      className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
    >
      عرض الكل

      <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
    </a>

  </div>

  {/* Related Posts */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {relatedPosts.map((item) => (

      <Link
        key={item.id}
        to={`/blogs/${item.slug}`}
        className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
      >

        {/* Image */}
        <div className="relative h-48 overflow-hidden">

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent"></div>

          <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
            {item.category}
          </span>

        </div>

        {/* Content */}
        <div className="p-5">

          <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
            {item.title}
          </h3>

          <div className="flex items-center justify-between text-sm text-neutral-500 gap-2">

            <span className="flex items-center gap-2 min-w-0">

              <img
                alt={item.author.name}
                className="w-6 h-6 rounded-full object-cover shrink-0"
                src={item.author.avatar}
              />

              <span className="truncate">
                {item.author.name}
              </span>

            </span>

            <span className="shrink-0">
              {item.readTime}
            </span>

          </div>

        </div>

      </Link>

    ))}

  </div>

</div>


      </section>
    </>
  );
}

export default BlogCard;
