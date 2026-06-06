
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com", color: "hover:text-gray-300" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", url: "mailto:johnas.bautista@example.com", color: "hover:text-cyan-400" }
  ];

  return (
    <footer className="relative w-full bg-black border-t border-cyan-500/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Johnas J. Bautista</h3>
            <p className="text-gray-400 text-sm">
              Cybersecurity Professional & Security Analyst aspiring to protect digital assets and build secure systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition duration-300">About Me</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition duration-300">Projects</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-cyan-400 transition duration-300">Certifications</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition duration-300 p-2 rounded-lg border border-slate-700/50 hover:border-slate-600/50`}
                    title={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Johnas J. Bautista. All rights reserved.</p>
          <p>Designed & Built with a focus on Security Excellence</p>
        </div>
      </div>
    </footer>
  );
}