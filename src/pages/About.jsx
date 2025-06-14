

export default function About() {
  return (
    <div className="pt-24 pb-20 px-4 md:px-12 lg:px-28 bg-gradient-to-b from-white to-emerald-50 text-slate-800">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 font-serif tracking-wide">
          About <span className="text-emerald-500">Mindwrite</span>
        </h1>
        <p className="mt-4 text-slate-600 text-base md:text-lg max-w-xl mx-auto">
          Learn who we are, what we do, and why we love sharing knowledge.
        </p>
      </div>

      {/* Welcome + Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-800">
            👋 Welcome to the Developer Space
          </h2>
          <p className="text-slate-700 leading-relaxed">
            MyBlog is a digital journal created by developers for developers. Whether you're just starting your journey or scaling up your skills, our mission is to guide, teach, and grow together.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Our blog offers hands-on tutorials, deep dives into frontend frameworks, tips for job interviews, and more — all built with clean design and code.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww"
            alt="Workspace"
            className="rounded-xl shadow-xl w-full max-w-md object-cover"
          />
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-20">
        <h2 className="text-xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 inline-block pb-1">
          🚀 Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base text-slate-700">
          <div className="bg-white p-5 shadow-sm rounded-lg border">
            📘 Share knowledge that’s practical and useful.
          </div>
          <div className="bg-white p-5 shadow-sm rounded-lg border">
            ✨ Focus on clean, maintainable code always.
          </div>
          <div className="bg-white p-5 shadow-sm rounded-lg border">
            💡 Stay consistent. Keep learning. Keep building.
          </div>
          <div className="bg-white p-5 shadow-sm rounded-lg border">
            🌱 Grow together as a friendly dev community.
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-20">
        <h2 className="text-xl font-bold text-emerald-800 mb-6">🧰 Tools & Tech We Use</h2>
        <div className="flex flex-wrap gap-4">
          {['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'GitHub', 'Markdown'].map((item) => (
            <span
              key={item}
              className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm shadow"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Our Journey */}
      <div className="mb-20">
        <h2 className="text-xl font-bold text-emerald-800 mb-6">📅 Journey So Far</h2>
        <ul className="space-y-3 text-slate-700 text-base">
          <li>✅ <strong>2023</strong> – Started as a personal dev diary.</li>
          <li>🔥 <strong>2024</strong> – Grew into a mini dev community.</li>
          <li>🚀 <strong>2025</strong> – Built into a full-featured React blog with clean UI.</li>
        </ul>
      </div>

      {/* Creator Info */}
      <div className="mb-20">
        <h2 className="text-xl font-bold text-emerald-800 mb-6">👨‍💻 Meet the Creator</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-md border">
          <img
            src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="John"
            className="w-24 h-24 rounded-full border-2 border-emerald-300 object-cover"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-emerald-700">John</h3>
            <p className="text-slate-600 mt-1 text-sm max-w-md">
              Frontend Developer from USA. Loves React, building clean UIs, and helping others through open content. Sharing code is my happy place.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <p className="text-base text-slate-700 mb-4">Ready to explore amazing blogs?</p>
        <a
          href="/blog"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
        >
          Go to Blog
        </a>
      </div>
    </div>
  );
}
