import { forwardRef, useState } from 'react';
import Footer from './Footer';
import AnimatedContent from './ui/AnimatedContent';
import { Mail, Linkedin, Github, ExternalLink, Send, MapPin, Phone } from 'lucide-react';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "johnas.bautista@example.com",
      link: "mailto:johnas.bautista@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/johnas-bautista",
      link: "https://linkedin.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/johnas-bautista",
      link: "https://github.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Taguig, Metro Manila, PH",
      link: "#"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <section ref={ref} id="contact" className="relative min-h-screen w-full bg-black py-24 px-4 md:px-8">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedContent
            distance={80}
            direction="vertical"
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <Send className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Let's Connect
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Have an opportunity or want to discuss cybersecurity? I'd love to hear from you.
              </p>
            </div>
          </AnimatedContent>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <AnimatedContent
                  key={index}
                  distance={80}
                  direction="vertical"
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  threshold={0.2}
                  delay={index * 0.08}
                >
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 rounded-lg p-6 transition duration-300 text-center">
                      <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 w-fit mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-1">
                        {method.label}
                      </h3>
                      <p className="text-gray-400 text-sm truncate hover:text-clip">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </AnimatedContent>
              );
            })}
          </div>

          {/* Contact Form */}
          <AnimatedContent
            distance={80}
            direction="vertical"
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <div className="max-w-2xl mx-auto">
              <div className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <form onSubmit={handleSubmit} className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg p-8 space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2 text-sm">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                      placeholder="Opportunity or inquiry"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
                      placeholder="Tell me about your opportunity..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
      <Footer />
    </>
  );
});

export default Contact;