
import { useParams, Link } from 'react-router-dom';
import blogData from '../data/Blogdata';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="pt-28 text-center text-red-500 font-medium text-lg">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-5 md:px-20 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/blog"
          className="text-emerald-600 text-sm mb-6 inline-block hover:underline"
        >
          ← Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 font-serif mb-4">
          {blog.title}
        </h1>

        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[350px] object-cover rounded-xl shadow mb-6"
        />

        {/* Content */}
        <p className="text-slate-700 leading-7 text-base">
          {blog.content}
        </p>
      </div>
    </div>
  );
}
