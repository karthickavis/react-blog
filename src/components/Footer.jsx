// src/components/Footer.jsx



export default function Footer() {
  return (
    <footer className="bg-emerald-700 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-3 font-serif">MindWrite</h2>
          <p className="text-sm text-emerald-100">
            A place where tech enthusiasts share thoughts, tutorials, and stories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-medium mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm text-emerald-100">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-medium mb-2">Contact</h2>
          <p className="text-sm text-emerald-100">Email: support@myblog.com</p>
          <p className="text-sm text-emerald-100">Phone: +91 98765 43210</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-medium mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-300">Facebook</a>
            <a href="#" className="hover:text-emerald-300">Twitter</a>
            <a href="#" className="hover:text-emerald-300">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-emerald-100 border-t border-emerald-600 pt-4">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
}
