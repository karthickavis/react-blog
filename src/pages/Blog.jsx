import { useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/Blogdata'; // ✅ Correct import

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 3;

  // ✅ Use the correct variable name
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <div className="pt-24 pb-20 px-4 md:px-12 lg:px-28 bg-white text-slate-800">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 font-serif">
          Explore <span className="text-emerald-500">Our Blogs</span>
        </h1>
        <p className="mt-3 text-slate-600 text-base max-w-xl mx-auto">
          Read insights, tutorials, and tips from the world of frontend development.
        </p>
      </div>

      {/* Search bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full max-w-xl px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page
          }}
        />
      </div>

      {/* Blog Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => (
            <div key={blog.id} className="bg-white border rounded-xl shadow hover:shadow-md transition">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover rounded-t-xl"
              />
              <div className="p-5 space-y-2">
                <h2 className="text-xl font-semibold text-emerald-800">{blog.title}</h2>
                <p className="text-slate-600 text-sm">{blog.description}</p>
                <Link to={`/blog/${blog.id}`} className="inline-block mt-2 text-sm text-emerald-600 hover:underline font-medium">
                  Read more →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-slate-500">No blogs found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded border text-sm ${
              currentPage === i + 1
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-slate-700 hover:bg-emerald-100'
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
