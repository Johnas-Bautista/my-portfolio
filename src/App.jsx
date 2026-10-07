import { useEffect, useMemo, useState } from "react"
import {
  Activity,
  ArrowDownToLine,
  BadgeCheck,
  Binary,
  Braces,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  Radar,
  Send,
  Server,
  Shield,
  ShieldCheck,
  Terminal,
  X,
  Zap,
} from "lucide-react"
import profileImage from "./assets/GRAD PIC2.png"
import isc2Image from "./assets/certs/isc2-cc.png"
import radentaImage from "./assets/certs/radenta-ctm1.jpg"
import fortinetNse1 from "./assets/certs/fortinet-nse1.png"
import fortinetNse2 from "./assets/certs/fortinet-nse2.png"
import fortinetNse3 from "./assets/certs/fortinet-nse3.png"
import tryhackmeImage from "./assets/certs/thm-hacker-holiday.png"

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  // { label: "Contact", id: "contact" },
]

const TERMINAL_COMMANDS = [
  {
    command: "whoami",
    output: [
      "Johnas J. Bautista",
      "SOC Analyst Intern | Security Software Developer",
      "Focus: SIEM triage, secure engineering, defensive network operations",
    ],
  },
  {
    command: "cat skills.txt",
    output: [
      "Wazuh SIEM, OSINT, Wireshark, tcpdump, Nmap, pfSense, Cisco IOS",
      "Python, Bash, PowerShell, PHP, Laravel, JavaScript, React",
      "MITRE ATT&CK, Cyber Kill Chain, Pyramid of Pain, Unified Kill Chain",
    ],
  },
  {
    command: "run incident_report.sh",
    output: [
      "[OK] ISC2 CC Certified",
      "[OK] Wazuh SIEM Home Lab operational",
      "[OK] BSIT - PUP Taguig",
      "[INFO] True Positive workflow: alert, enrich, verify, report",
    ],
  },
]

const QUICK_STATS = [
  { value: "ISC2 CC", label: "Certified in Cybersecurity" },
  { value: "Wazuh", label: "SIEM home lab" },
  { value: "BSIT", label: "PUP Taguig" },
]

const EXPERIENCE_ACHIEVEMENTS = [
  "Triaged real-time alerts in Wazuh SIEM across multiple public-facing servers.",
  "Verified Indicators of Compromise using OSINT threat intelligence to isolate True Positives and delivered structured incident reports to supervisors.",
  "Engineered and deployed a Guest Wi-Fi Captive Portal to secure guest access and isolate internal network traffic.",
]

const PROJECTS = [
  {
    title: "Isolated Wazuh SIEM & Threat Emulation Lab",
    category: "SIEM & Threat Hunting",
    summary:
      "Set up a virtual lab in VirtualBox containing a Wazuh SIEM Server, a vulnerable Metasploitable endpoint, and an Attacker VM in strict host-isolated networking.",
    focus:
      "Analyzed real-time telemetry, created custom detection rules, and captured active exploit traffic.",
    icon: Radar,
    tone: "cyan",
  },
  {
    title: "DOST-STII Blueprint Network Infrastructure",
    category: "Network Security & Architecture",
    summary:
      "Designed and modeled a mirror logical network topology replicating DOST-STII's enterprise network in Cisco Packet Tracer.",
    focus:
      "Configured VLAN segmentation, pfSense routing rules, and Cisco IOS device security baselines.",
    icon: Network,
    tone: "emerald",
  },
  {
    title: "ODRMS Online Document Request & Management System",
    category: "Secure Software Engineering",
    summary:
      "Developed a high-security document management platform using Laravel, PHP, and MySQL.",
    focus:
      "Secured API endpoints with strict authentication and authorization, implemented tamper-proof audit log accounting, integrated OTP-based email password resets, and enforced strong Content Security Policies.",
    icon: FileText,
    tone: "amber",
  },
]

const PROJECT_FILTERS = ["All", ...new Set(PROJECTS.map((project) => project.category))]

const CERTIFICATIONS = [
  {
    title: "ISC2 Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    images: [{ src: isc2Image, label: "Certified in Cybersecurity" }],
    credentialUrl: "https://www.credly.com/badges/014de744-1048-47cc-ae76-e47bea049ceb/public_url",
  },
  {
    title: "Cyber Threat Monitoring Level 1",
    issuer: "Radenta Academy (TESDA Accredited Institutional Assessment)",
    images: [{ src: radentaImage, label: "Certificate" }],
    credentialUrl: "",
  },
  {
    title: "Fortinet Network Security Expert (NSE 1, 2, and 3)",
    issuer: "Fortinet",
    images: [
      { src: fortinetNse1, label: "NSE 1", credentialUrl: "https://www.credly.com/badges/7f8c8ba9-ef7f-4288-b0de-7d30ed0736f2/public_url" },
      { src: fortinetNse2, label: "NSE 2", credentialUrl: "https://www.credly.com/badges/71ea560c-9dff-4b58-9769-879b709e7c98/public_url" },
      { src: fortinetNse3, label: "NSE 3", credentialUrl: "https://www.credly.com/badges/59bca134-7e44-4d73-957d-b41d8ae5618e/public_url" },
    ],
    credentialUrl: "", // leave empty so no extra button shows at the bottom
  },
  {
    title: "TryHackMe Hacker Holiday Badge",
    issuer: "TryHackMe",
    images: [{ src: tryhackmeImage, label: "Certificate of Completion" }],
    credentialUrl: "https://github.com/Johnas-Bautista/hacker-holiday",
  },
]

const SKILL_GROUPS = [
  {
    title: "Security Operations & SIEM",
    score: 88,
    icon: ShieldCheck,
    skills: [
      "Wazuh SIEM",
      "OSINT",
      "Threat Triaging",
      "Cyber Kill Chain",
      "Pyramid of Pain",
      "MITRE ATT&CK",
      "Unified Kill Chain",
      "Incident Report",
      "Risk Assessment",
      "L2 Escalation",
      "Alert Investigation",
      "OSINT"
    ],
  },
  {
    title: "Network Defense & Traffic Analysis",
    score: 84,
    icon: Network,
    skills: [
      "Wireshark",
      "tcpdump",
      "Nmap",
      "pfSense",
      "Cisco IOS",
      "Packet Tracer",
      "ARP Analysis",
      "TCP/IP",
      "OSI Model",
    ],
  },
  {
    title: "VAPT Tools",
    score: 56,
    icon: Zap,
    skills: ["Burp Suite", "SQLMap", "Hydra", "Hashcat", "Metasploit", "Searchsploit", "OpenVAS"],
  },
  {
    title: "Secure Development & Scripting",
    score: 85,
    icon: Code2,
    skills: [
      "Python",
      "Shell Scripting (Linux Bash)",
      "PowerShell",
      "PHP",
      "Laravel",
      "JavaScript",
      "React",
      "Java",
    ],
  },
  {
    title: "Infrastructure & Utilities",
    score: 82,
    icon: Server,
    skills: ["Git", "Postman", "XAMPP", "VirtualBox", "Linux Administration"],
  },
]

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/johnas-bautista",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/johnas-bautista",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:johnas.bautista@example.com",
    icon: Mail,
  },
]

const toneClasses = {
  cyan: "border-cyan-400/40 text-cyan-200 bg-cyan-400/10",
  emerald: "border-emerald-400/40 text-emerald-200 bg-emerald-400/10",
  amber: "border-amber-300/40 text-amber-200 bg-amber-300/10",
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)
  const [activeSection, setActiveSection] = useState("home")
  const [projectFilter, setProjectFilter] = useState("All")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState("")

  const filteredProjects = useMemo(() => {
    if (projectFilter === "All") {
      return PROJECTS
    }

    return PROJECTS.filter((project) => project.category === projectFilter)
  }, [projectFilter])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: 0.01 },
    )

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsMenuOpen(false)
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setFormStatus("Message staged for secure handoff. Direct email is available below.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-cyan-400/15 bg-[#0f172a]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home section"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/35 bg-cyan-300/10">
              <Shield className="h-5 w-5 text-cyan-200" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold text-white">Johnas Bautista</span>
              <span className="block font-mono text-xs text-emerald-200">SOC Cyber Command</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${activeSection === item.id
                  ? "bg-cyan-300/10 text-cyan-100"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:johnas.bautista@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-emerald-300/30 px-3 py-2 text-sm font-medium text-emerald-100 transition hover:bg-emerald-300/10"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
            <a
              href="/RESUME-Bautista,Johnas Jr. J.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 text-cyan-100 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </nav>

        {isMenuOpen ? (
          <div className="border-t border-cyan-400/15 bg-[#111827] px-4 py-3 lg:hidden">
            <div className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`rounded-md px-3 py-3 text-left text-sm font-medium ${activeSection === item.id ? "bg-cyan-300/10 text-cyan-100" : "text-slate-300"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="cyber-grid relative overflow-hidden border-b border-slate-800/80">
          <div className="scanline absolute inset-0" aria-hidden="true" />
          <div className="mx-auto grid min-h-[calc(100vh-145px)] max-w-7xl items-center gap-10 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 font-mono text-xs text-emerald-100">
                <Activity className="h-4 w-4" aria-hidden="true" />
                Monitoring secure software, logs, and network telemetry
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white">
                SOC Analyst & Security Software Developer
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Bridging secure software engineering with active threat monitoring, SIEM analysis, and defensive network operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-md border border-slate-600 bg-slate-950/55 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-100"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                    </a>
                  )
                })}
                <a
                  href="/RESUME-Bautista,Johnas Jr. J.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
                >
                  <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {QUICK_STATS.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-slate-700/80 bg-slate-950/45 p-4">
                    <p className="font-mono text-lg font-semibold text-cyan-100">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <TerminalWidget />
          </div>
        </section>

        <section id="about" className="border-b border-slate-800 bg-[#111827] px-4 pt-8 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1fr]">
            <figure className="rounded-lg border border-slate-700 bg-slate-950/50 p-5">
              <img
                src={profileImage}
                alt="Johnas J. Bautista"
                className="aspect-[4/5] w-full rounded-md object-cover"
              />
              <figcaption className="mt-5 grid gap-3 font-mono text-sm text-slate-300">
                <span className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                  <span className="text-slate-500">Role</span>
                  <span className="text-cyan-100">SOC Analyst Intern</span>
                </span>
                <span className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
                  <span className="text-slate-500">Discipline</span>
                  <span className="text-emerald-100">Secure Engineering</span>
                </span>
                <span className="flex items-center justify-between gap-4">
                  <span className="text-slate-500">Base</span>
                  <span className="text-amber-100">Taguig, Metro Manila</span>
                </span>
              </figcaption>
            </figure>

            <div>
              <SectionEyebrow icon={Binary}>About Me & Career Evolution</SectionEyebrow>
              <h2 className="mt-4 text-3xl font-bold text-white">Developer instincts applied to defensive security.</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
                <p>
                  I started as a Full-Stack Developer specializing in secure web architecture: REST APIs, custom authentication,
                  password reset flows, session control, and Content Security Policy headers.
                </p>
                <p>
                  That foundation became my bridge into Cybersecurity and SOC operations, where I apply developer insights to
                  threat triage, log analysis, and network defense. Understanding how systems are built helps me investigate how
                  they fail, how attackers move, and how defenders can respond with clearer evidence.
                </p>
              </div>

              <div className="mt-8 rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-5">
                <div className="flex items-start gap-4">
                  <GraduationCap className="mt-1 h-6 w-6 text-cyan-200" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-white">Education</h3>
                    <p className="mt-2 text-slate-300">
                      Bachelor of Science in Information Technology (BSIT) - Polytechnic University of the Philippines (PUP Taguig).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-slate-800 bg-[#0f172a] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow icon={Layers3}>Professional Experience</SectionEyebrow>
            <div className="mt-5 grid gap-8 lg:grid-cols-[0.7fr_1fr]">
              <div>
                <h2 className="text-3xl font-bold text-white">SOC Analyst Intern</h2>
                <p className="mt-4 text-lg text-cyan-100">
                  Department of Science and Technology - Science and Technology Information Institute (DOST-STII)
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-emerald-300/35 bg-emerald-300/10 px-3 py-2 font-mono text-sm text-emerald-100">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Alert triage, incident reporting, secure guest access
                </div>
              </div>

              <div className="grid gap-4">
                {EXPERIENCE_ACHIEVEMENTS.map((achievement, index) => (
                  <div key={achievement} className="rounded-lg border border-slate-700 bg-slate-950/45 p-5">
                    <div className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm text-cyan-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="leading-7 text-slate-300">{achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-slate-800 bg-[#111827] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <SectionEyebrow icon={Terminal}>Practical Hands-On Projects</SectionEyebrow>
                <h2 className="mt-4 text-3xl font-bold text-white">Labs, architecture, and secure systems.</h2>
              </div>

              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
                {PROJECT_FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={projectFilter === filter}
                    onClick={() => setProjectFilter(filter)}
                    className={`rounded-md border px-3 py-2 text-sm font-semibold transition ${projectFilter === filter
                      ? "border-cyan-300 bg-cyan-300 text-slate-950"
                      : "border-slate-700 bg-slate-950/45 text-slate-300 hover:border-cyan-300/60"
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {filteredProjects.map((project) => {
                const Icon = project.icon

                return (
                  <article key={project.title} className="flex h-full flex-col rounded-lg border border-slate-700 bg-slate-950/50 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className={`inline-flex h-11 w-11 items-center justify-center rounded-md border ${toneClasses[project.tone]}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="rounded-md border border-slate-700 px-2 py-1 font-mono text-xs text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold leading-7 text-white">{project.title}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>

                    <div className="mt-6 border-t border-slate-800 pt-5">
                      <p className="font-mono text-sm text-emerald-100">Focus</p>
                      <p className="mt-2 leading-7 text-slate-400">{project.focus}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="certifications" className="border-b border-slate-800 bg-[#0f172a] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow icon={BadgeCheck}>Certifications & Badges</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold text-white">Validated security learning and practice.</h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {CERTIFICATIONS.map((cert) => {
                const cover = cert.images[0]?.src

                return (
                  <button
                    key={cert.title}
                    type="button"
                    onClick={() => cert.images.length > 0 && setSelectedCert(cert)}
                    className="group flex flex-col overflow-hidden rounded-lg border border-emerald-300/25 bg-emerald-300/10 text-left transition hover:border-emerald-300/60"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-slate-950/60">
                      {cover ? (
                        <img
                          src={cover}
                          alt={`${cert.title} certificate`}
                          loading="lazy"
                          className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <BadgeCheck className="h-10 w-10 text-emerald-200" aria-hidden="true" />
                      )}

                      {cert.images.length > 1 ? (
                        <span className="absolute right-2 top-2 rounded-md border border-cyan-300/40 bg-slate-950/90 px-2 py-1 font-mono text-xs text-cyan-100">
                          {cert.images.length} certificates
                        </span>
                      ) : null}
                    </div>
                    <div className="p-5">
                      <p className="font-semibold leading-7 text-white">{cert.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                      {cert.images.length > 0 ? (
                        <p className="mt-3 font-mono text-xs text-emerald-200">
                          {cert.images.length > 1 ? "Click to view all" : "Click to enlarge"}
                        </p>
                      ) : null}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="border-b border-slate-800 bg-[#111827] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow icon={Braces}>Technical Skill Matrix</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold text-white">Operational coverage from SIEM to secure code.</h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {SKILL_GROUPS.map((group) => {
                const Icon = group.icon

                return (
                  <article key={group.title} className="rounded-lg border border-slate-700 bg-slate-950/50 p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                      </div>
                      <span className="font-mono text-sm text-emerald-100">{group.score}%</span>
                    </div>

                    <div className="mt-5 h-2 overflow-hidden rounded-md bg-slate-800" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={group.score} aria-label={`${group.title} proficiency`}>
                      <div className="h-full rounded-md bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200" style={{ width: `${group.score}%` }} />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-sm text-slate-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* <section id="contact" className="bg-[#0f172a] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1fr]">
            <div>
              <SectionEyebrow icon={Send}>Contact</SectionEyebrow>
              <h2 className="mt-4 text-3xl font-bold text-white">Open to security, SOC, and secure development work.</h2>
              <p className="mt-5 leading-8 text-slate-300">
                Send a message for cybersecurity opportunities, internships, technical collaboration, or secure software work.
              </p>

              <div className="mt-8 grid gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center justify-between gap-4 rounded-lg border border-slate-700 bg-slate-950/45 px-4 py-4 text-slate-200 transition hover:border-cyan-300/60"
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon className="h-5 w-5 text-cyan-100" aria-hidden="true" />
                        {link.label}
                      </span>
                      <ExternalLink className="h-4 w-4 text-slate-500" aria-hidden="true" />
                    </a>
                  )
                })}
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="rounded-lg border border-slate-700 bg-[#111827] p-5 sm:p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" value={formData.name} onChange={handleFormChange} autoComplete="name" />
                <Field label="Email" name="email" type="email" value={formData.email} onChange={handleFormChange} autoComplete="email" />
              </div>

              <div className="mt-5">
                <Field label="Subject" name="subject" value={formData.subject} onChange={handleFormChange} />
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={6}
                  required
                  className="w-full resize-none rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                  placeholder="Opportunity, scope, or collaboration details"
                />
              </label>

              {formStatus ? (
                <p className="mt-4 rounded-md border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100" role="status">
                  {formStatus}
                </p>
              ) : null}

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </button>
            </form>
          </div>
        </section> */}
      </main>

      <footer className="border-t border-slate-800 bg-[#0b1120] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Johnas J. Bautista. All rights reserved.</p>
          <p className="inline-flex items-center gap-2 rounded-md border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-emerald-100">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Enforced with custom Content Security Policy (CSP) & Secure Coding Practices
          </p>
        </div>
      </footer>
      {selectedCert ? (
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      ) : null}
    </div>
  )
}
function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose()
    }
    const previousOverflow = document.body.style.overflow

    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden" // lock background scroll

    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      onClick={onClose}
    >
      <div
        className="relative max-h-full w-full max-w-4xl overflow-auto rounded-lg border border-cyan-300/25 bg-[#111827] p-4 sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-950 text-cyan-100 hover:border-cyan-300"
          aria-label="Close certificate preview"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <h3 className="pr-12 text-lg font-semibold text-white">{cert.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>

        <div className="mt-4 grid gap-6">
          {cert.images.map((image) => (
            <figure key={image.label}>
              <img
                src={image.src}
                alt={`${cert.title} - ${image.label}`}
                className="w-full rounded-md bg-slate-950 object-contain"
              />
              <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-3">
                {cert.images.length > 1 ? (
                  <span className="font-mono text-sm text-slate-400">{image.label}</span>
                ) : (
                  <span />
                )}

                {image.credentialUrl ? (
                  <a
                    href={image.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-3 py-1.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Verify {image.label}
                  </a>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>

        {cert.credentialUrl ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Verify credential
          </a>
        ) : null}
      </div>
    </div>
  )
}

function TerminalWidget() {
  const [activeCommandIndex, setActiveCommandIndex] = useState(0)
  const [typedCommand, setTypedCommand] = useState("")
  const [visibleLines, setVisibleLines] = useState(0)
  const activeCommand = TERMINAL_COMMANDS[activeCommandIndex]

  useEffect(() => {
    let typingTimer
    let revealTimer
    let advanceTimer
    let cursor = 0
    const command = TERMINAL_COMMANDS[activeCommandIndex].command

    const typeNextCharacter = () => {
      setTypedCommand(command.slice(0, cursor))
      cursor += 1

      if (cursor <= command.length + 1) {
        typingTimer = window.setTimeout(typeNextCharacter, 38)
        return
      }

      let line = 0
      revealTimer = window.setInterval(() => {
        line += 1
        setVisibleLines(line)

        if (line >= TERMINAL_COMMANDS[activeCommandIndex].output.length) {
          window.clearInterval(revealTimer)
          advanceTimer = window.setTimeout(() => {
            setActiveCommandIndex((current) => (current + 1) % TERMINAL_COMMANDS.length)
          }, 2400)
        }
      }, 260)
    }

    typingTimer = window.setTimeout(() => {
      setTypedCommand("")
      setVisibleLines(0)
      typeNextCharacter()
    }, 80)

    return () => {
      window.clearTimeout(typingTimer)
      window.clearInterval(revealTimer)
      window.clearTimeout(advanceTimer)
    }
  }, [activeCommandIndex])

  return (
    <div className="relative z-10 rounded-lg border border-cyan-300/25 bg-slate-950 shadow-2xl shadow-cyan-950/40">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-amber-300" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" aria-hidden="true" />
        </div>
        <div className="inline-flex items-center gap-2 font-mono text-xs text-slate-400">
          <Terminal className="h-4 w-4 text-cyan-100" aria-hidden="true" />
          analyst-console
        </div>
      </div>

      <div className="min-h-[400px] p-5 font-mono">
        <div className="mb-4 flex flex-wrap gap-2">
          {TERMINAL_COMMANDS.map((item, index) => (
            <button
              key={item.command}
              type="button"
              onClick={() => setActiveCommandIndex(index)}
              aria-pressed={activeCommandIndex === index}
              className={`rounded-md border px-3 py-2 text-xs transition ${activeCommandIndex === index
                ? "border-cyan-300 bg-cyan-300/10 text-cyan-100"
                : "border-slate-700 text-slate-400 hover:border-cyan-300/50 hover:text-slate-100"
                }`}
            >
              {item.command}
            </button>
          ))}
        </div>

        <div className="rounded-md border border-slate-800 bg-[#020617] p-4">
          <p className="text-sm text-slate-500">Last login: SOC console from 127.0.0.1</p>
          <p className="mt-4 break-words text-sm text-slate-100">
            <span className="text-emerald-200">johnas@soc-command</span>
            <span className="text-slate-500">:</span>
            <span className="text-cyan-200">~</span>
            <span className="text-slate-500">$ </span>
            <span>{typedCommand}</span>
            <span className="terminal-cursor" aria-hidden="true">_</span>
          </p>

          <div className="mt-5 space-y-3" aria-live="polite">
            {activeCommand.output.slice(0, visibleLines).map((line) => (
              <p key={line} className="flex gap-3 text-sm leading-6 text-slate-300">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" aria-hidden="true" />
                <span>{line}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <Metric label="Alert Review" value="Real-time" />
          <Metric label="IoC Workflow" value="OSINT" />
          <Metric label="Network Mode" value="Isolated" />
        </div>
      </div>
    </div>
  )
}

function SectionEyebrow({ children, icon }) {
  const IconComponent = icon

  return (
    <p className="inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 font-mono text-sm text-cyan-100">
      <IconComponent className="h-4 w-4" aria-hidden="true" />
      {children}
    </p>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-md border border-slate-800 bg-slate-900 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-cyan-100">{value}</p>
    </div>
  )
}

function Field({ label, name, type = "text", value, onChange, autoComplete }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required
        className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
        placeholder={label}
      />
    </label>
  )
}

export default App
