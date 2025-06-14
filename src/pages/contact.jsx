

export default function Contact() {
  return (
    <div className="pt-24 pb-20 px-4 md:px-12 lg:px-28 bg-white text-slate-800">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 font-serif">
          Contact <span className="text-emerald-500">Us</span>
        </h1>
        <p className="mt-3 text-slate-600 text-base max-w-xl mx-auto">
          Have a question, feedback, or just want to connect? We’d love to hear from you!
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-emerald-50 p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">📍 Address</h2>
            <p className="text-slate-700 text-sm">Anna Nagar, Chennai, Tamil Nadu – 600040</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">📞 Phone</h2>
            <p className="text-slate-700 text-sm">+91 98765 43210</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">📧 Email</h2>
            <p className="text-slate-700 text-sm">contact@mindwrite.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-emerald-50 p-8 rounded-xl shadow-md border space-y-6">
          <h2 className="text-xl font-bold text-emerald-800 mb-2">Send a Message</h2>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded font-semibold hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
