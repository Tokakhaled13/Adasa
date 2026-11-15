
import { Link } from "react-router";

export default function MainCard({ post, viewMode = "grid" }) {
  return (
    <Link to={`/blogs/${post.slug}`} className="block group h-full">

      {viewMode === "list" ? (

        /* List View */
        <div className="bg-[#171717] border border-[#262626] rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5">

          <div className="flex flex-col sm:flex-row h-auto sm:h-[212px]">

            {/* Image - Right */}
            <div className="w-full sm:w-[25%] shrink-0 h-52 sm:h-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content - Left */}
            <div className="w-full sm:w-[75%] p-5 sm:px-7 sm:py-5 flex flex-col justify-between text-right">

              {/* Top Info */}
              <div>

                <div className="flex items-center gap-3 mb-3 flex-wrap">

                  <span className="text-orange-500 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>

                  <span className="text-gray-400 text-xs flex items-center gap-1.5">
                    <i className="fa-regular fa-clock"></i>
                    {post.readTime}
                  </span>

                  <span className="text-gray-400 text-xs flex items-center gap-1.5">
                    <i className="fa-regular fa-calendar"></i>
                    {post.date}
                  </span>

                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-relaxed transition-colors duration-300 group-hover:text-orange-400 line-clamp-1">
                  {post.title}
                </h3>

                <p className="text-gray-400 mt-2 leading-7 text-sm line-clamp-2">
                  {post.excerpt}
                </p>

              </div>

              {/* Bottom Info */}
              <div className="flex justify-between items-end mt-4 gap-4">

                {/* Read Article */}
                <span className="text-orange-500 flex items-center gap-2 text-sm font-semibold shrink-0">
                  اقرأ المقال
                  <i className="fa-solid fa-arrow-left transition-transform duration-300 group-hover:-translate-x-2"></i>
                </span>

                {/* Author */}
                <div className="flex items-center gap-3 min-w-0">

                  <div className="text-right min-w-0">
                    <p className="text-white font-semibold text-sm">
                      {post.author.name}
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      {post.author.role}
                    </p>
                  </div>

                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-700 shrink-0"
                  />

                </div>

              </div>

            </div>
          </div>
        </div>

      ) : (

        /* Grid View */
        <div className="bg-[#171717] border border-transparent rounded-3xl overflow-hidden h-full transition-all duration-500 hover:border-orange-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/5">

          <div className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="p-6">

            <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-orange-400">
              {post.title}
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              {post.excerpt}
            </p>

          </div>
        </div>

      )}

    </Link>
  );
}
