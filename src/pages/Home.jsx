
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import { useEffect, useState } from 'react';

 // ✅ Make sure the path is correct

 function Counter({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.floor(duration / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === target) clearInterval(timer);
    }, stepTime);
  }, [target, duration]);

  return <span>{count}</span>;
}
export default function Home() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      desc: 'A beginner-friendly guide to building your first React app.',
      image:
        'https://media.istockphoto.com/id/2172166279/photo/a-seminar-and-workshop-on-coding-to-enhance-system-efficiency.webp?a=1&b=1&s=612x612&w=0&k=20&c=66j73dmnoZXLJNSZbiG3GUrNGu5oDjoS3kq5f_oGrfg=',
    },
    {
      id: 2,
      title: 'Understanding JavaScript Closures',
      desc: 'Closures are a powerful concept in JS. Learn how they work.',
      image:
        'https://media.istockphoto.com/id/2169149999/photo/software-source-code-programming-code-programming-code-on-computer-screen-developer-working.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZAWsyyISmvpvY30D8JJsrzgvXcvXIcKyot0y-fuskxQ=',
    },
    {
      id: 3,
      title: 'Tips for Writing Clean Code',
      desc: 'Improve your code quality with these clean coding practices.',
      image:
        'https://images.unsplash.com/photo-1564931768730-7e4d8e240044?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className=" bg-white min-h-screen text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="h-[100vh] flex items-center justify-center text-center px-4 md:px-12 lg:px-20 bg-emerald-100">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-4">
            Welcome to Mindwrite
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-6">
            Discover fresh articles and thoughts from the world of tech.
          </p>
          <Link
            to="/blog"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition duration-200"
          >
            Read Blog
          </Link>
        </div>
      </section>



 {/* Animated Stats */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-10">Our Journey So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-5xl font-bold text-emerald-700">
                <Counter target={250} duration={2000} />+
              </h3>
              <p className="text-gray-600 mt-2">Blogs Published</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-emerald-700">
                <Counter target={1000} duration={2000} />+
              </h3>
              <p className="text-gray-600 mt-2">Readers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-emerald-700">
                <Counter target={20} duration={2000} />+
              </h3>
              <p className="text-gray-600 mt-2">Active Writers</p>
            </div>
          </div>
        </div>
      </section>
      {/* Slider Section */}
      <Slider />

      {/* Blog Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-14 px-4 md:px-12 lg:px-20">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-emerald-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-emerald-800 mb-2 font-serif">
                {post.title}
              </h2>
              <p className="text-slate-600 text-sm mb-4">{post.desc}</p>
              <Link
                to="/blog"
                className="text-emerald-600 hover:underline font-medium text-sm"
              >
                Blogs →
              </Link>
            </div>
          </div>
        ))}
      </section>

     <section className="bg-emerald-50 py-12">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-emerald-800 mb-6">What Our Readers Say</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { name: 'Anjali', text: 'MindWrite changed the way I journal. The UI is simple and elegant.' },
        { name: 'Rahul', text: 'I love reading motivational blogs here every morning. Feels fresh!' },
        { name: 'Sneha', text: 'It’s like talking to a friend. Writing has never felt so easy!' }
      ].map((review, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
          <p className="italic mb-4">"{review.text}"</p>
          <h4 className="text-sm font-semibold text-emerald-700">– {review.name}</h4>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="bg-emerald-500 py-12 text-white">
  <div className="max-w-3xl mx-auto text-center px-6">
    <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
    <p className="mb-6">Subscribe to our newsletter to receive weekly tips and new blog updates!</p>
    <form className="flex flex-col sm:flex-row gap-4 justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-md text-gray-800 focus:outline-none border-2 border-amber-50 "
      />
      <button type="submit" className="bg-white text-emerald-700 px-6 py-2 rounded-md font-semibold hover:bg-emerald-100">
        Subscribe
      </button>
    </form>
  </div>
</section>

      
    </div>
  );
}
