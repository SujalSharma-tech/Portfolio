import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Play,
  Video,
} from "lucide-react";
import { AnimatedSection } from "./components/animated-section";

export default function Portfolio() {
  // Enable smooth scrolling
  useEffect(() => {
    // Add smooth scrolling behavior
    const handleLinkClick = (e) => {
      const target = e.target;
      const link = target.closest("a");

      if (
        link &&
        link.hash &&
        link.hash.startsWith("#") &&
        link.origin === window.location.origin
      ) {
        e.preventDefault();
        const targetId = link.hash.slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: "smooth",
          });

          // Update URL without scrolling
          history.pushState(null, "", link.hash);
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Header/Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-zinc-900/80">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Sujal.codes
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-purple-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#certifications"
            className="hover:text-purple-400 transition-colors"
          >
            Certifications
          </a>
          <a
            href="#opensource"
            className="hover:text-purple-400 transition-colors"
          >
            Open Source
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </nav>
        <a href="/resume.pdf" download="Sujal_Resume.pdf">
          <Button
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <AnimatedSection id="about" className="container mx-auto py-20 px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Sujal
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-zinc-300">
                Full Stack Developer
              </h2>
              <p className="text-lg text-zinc-400 mb-8">
                I am a full-stack developer with expertise in MERN, PHP, gRPC,
                and cloud technologies, passionate about building scalable,
                high-performance web applications.I specialize in developing
                RESTful APIs, implementing secure authentication systems, and
                optimizing database solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/SujalSharma-tech"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/sujalsharma12"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="mailto:sharmasujal995@example.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </a>
                <a
                  href="https://instagram.com/sujal.dreamss"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 relative mx-auto brightness-[0.7]">
                <img
                  src="/user.jpg?height=320&width=320"
                  alt="sujal"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Skills & Tech Stack
              </span>
            </h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto mb-16"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-purple-400 p-2 bg-purple-400/10 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "React.js",
                    "Next.js",
                    "Tailwind CSS",
                    "SASS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-800/80 text-zinc-200 px-3 py-1.5 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-purple-400 p-2 bg-purple-400/10 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-server"
                    >
                      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                      <line x1="6" x2="6" y1="6" y2="6" />
                      <line x1="6" x2="6" y1="18" y2="18" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "Kafka",
                    "Docker",
                    "GraphQL",
                    "REST APIs",
                    "Microservices",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-800/80 text-zinc-200 px-3 py-1.5 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-purple-400 p-2 bg-purple-400/10 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-database"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "Redis",
                    "Firebase",
                    "Supabase",
                    "Clickhouse",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-800/80 text-zinc-200 px-3 py-1.5 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-purple-400 p-2 bg-purple-400/10 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-cloud"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Google Cloud",
                    "Azure",
                    "Docker",
                    "Kubernetes",
                    "CI/CD",
                    "Vercel",
                    "Netlify",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-800/80 text-zinc-200 px-3 py-1.5 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dev Tools */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-purple-400 p-2 bg-purple-400/10 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-wrench"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Dev Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git",
                    "GitHub",
                    "VS Code",
                    "Figma",
                    "Postman",
                    "Jest",
                    "Webpack",
                    "Vite",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-800/80 text-zinc-200 px-3 py-1.5 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Others */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-purple-400 p-2 bg-purple-400/10 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-layers"
                    >
                      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                      <path d="m22 12.7-9.04 4.1a2 2 0 0 1-1.92 0L2 12.7" />
                      <path d="m22 17.7-9.04 4.1a2 2 0 0 1-1.92 0L2 17.7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Others</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Socket.io",
                    "JWT",
                    "OAuth",
                    "REST APIs",
                    "WebSockets",
                    "GraphQL",
                    "Redux",
                    "Zustand",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-800/80 text-zinc-200 px-3 py-1.5 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="education" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Education
              </span>
            </h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto mb-16"></div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-600 hidden md:block"></div>

              {/* University */}
              <div className="relative mb-16 md:mb-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                      <h3 className="text-xl font-bold text-purple-400">
                        Bachelor of Computer Science
                      </h3>
                      <p className="text-lg font-medium mt-1">
                        Lovely Professional University
                      </p>
                      <p className="text-zinc-400 mt-2">2022 - 2026</p>
                      <div className="mt-4">
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                          CGPA : 8.55
                        </Badge>
                      </div>
                      <p className="mt-4 text-zinc-300">
                        B.Tech Computer Science with a focus on software
                        development and data structures.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-6 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center relative z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-graduation-cap"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* 12th Class */}
              <div className="relative mb-16 md:mb-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-center md:justify-end order-1 mb-6 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center relative z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-book-open"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-2">
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                      <h3 className="text-xl font-bold text-purple-400">
                        Higher Secondary Education
                      </h3>
                      <p className="text-lg font-medium mt-1">
                        Arya Model Sr. Sec. School
                      </p>
                      <p className="text-zinc-400 mt-2">2021 - 2022</p>
                      <div className="mt-4">
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                          Grade: 94.6%
                        </Badge>
                      </div>
                      <p className="mt-4 text-zinc-300">
                        Science stream with Computer Science.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 10th Class */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                      <h3 className="text-xl font-bold text-purple-400">
                        Secondary Education
                      </h3>
                      <p className="text-lg font-medium mt-1">
                        Arya Model Sr. Sec. School
                      </p>
                      <p className="text-zinc-400 mt-2">2019 - 2020</p>
                      <div className="mt-4">
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                          Grade: 96%
                        </Badge>
                      </div>
                      <p className="mt-4 text-zinc-300">
                        achieving a perfect score in all subjects
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-6 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center relative z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-school"
                      >
                        <path d="m4 6 8-4 8 4" />
                        <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
                        <path d="M14 22v-4a2 2 0 0 0-4 0v4" />
                        <path d="M18 5v17" />
                        <path d="M6 5v17" />
                        <circle cx="12" cy="9" r="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Featured Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Tekton - Cloud Deployment System"
                description="Tekton is a cloud-native CI/CD platform that automates building, testing, and deploying applications from source code to production environments."
                tags={[
                  "AWS ECS Fargate",
                  "Node.js",
                  "KafkaJS",
                  "Clickhouse",
                  "Prisma",
                ]}
                github="https://github.com/SujalSharma-tech/tekton-backend"
                demo="https://tekton.sujal.codes"
                insights="Provided one click deployment of reactjs projects from github link"
                delay={0}
              />

              <ProjectCard
                title="Roomnest"
                description="Room listing website specially designed for university students to view pin-pointed locations on google maps."
                tags={[
                  "ReactJs",
                  "Nodejs",
                  "PostgreSQL",
                  "Docker",
                  "AWS",
                  "Google Maps API",
                ]}
                github="https://github.com/SujalSharma-tech/RoomNest-Frontend"
                demo="https://roomnest.me"
                insights="Implemented Google Maps API integration that reduced property search time by 40% and increased user engagement by 35%."
                delay={150}
              />

              <ProjectCard
                title="NotesSync"
                description="A full-fledged note-taking app allowing users to create, edit, share and organize notes."
                tags={["ReactJS", "Nodejs", "Express", "TailwindCSS"]}
                github="https://github.com/SujalSharma-tech/NotesSync-Frontend"
                demo="https://notessync.netlify.app"
                insights="Added 7 organizational features including archiving (reducing clutter by 60%), priority pinning (used by 78% of users),and a precision range selector that improved content selection speed by 35%."
                delay={300}
              />

              <ProjectCard
                title="SkyPulse -  Weather App"
                description="SkyPulse is a modern weather application provides real-time weather information, forecasts, and additional meteorological data like air quality and UV index"
                tags={[
                  "Shadcn UI",
                  "TanStack Query",
                  "TypeScript",
                  "OpenWeatherAPI",
                  "React",
                ]}
                github="https://github.com/SujalSharma-tech/Zynetic-SkyPulse"
                demo="https://zynetic.sujal.codes"
                insights="The app emphasizes user experience with features like location-based weather, favorites and search history."
                delay={450}
              />

              <ProjectCard
                title="Realtime News Website"
                description="A fully responsive and modern news website offering trending news, global news, and categorized news with search functionality."
                tags={["ReactJS", "Firebase", "Gnews API", "TailwindCSS"]}
                github="https://github.com/SujalSharma-tech/news-acowale"
                demo="https://news-acowale.web.app"
                insights="The project incorporates efficient API data handling and pagination, offering smooth navigation despite the limitations of the free API version."
                delay={600}
              />

              <ProjectCard
                title="TradeNest"
                description="online marketplace for University students to buy, sell, and exchange notes, notebooks, and accessories."
                tags={["React", "Node.js", "DaisyUI", "TailwindCSS", "Zustand"]}
                github="https://github.com/SujalSharma-tech/TradeNest-Frontend"
                demo="https://tradenest.tech"
                insights="Designed a responsive UI with 15+ custom components using TailwindCSS and DaisyUI, reducing page load time by 40% and achieving a 93% mobile usability score."
                delay={750}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Certifications Section */}
        <AnimatedSection id="certifications" className="py-20 bg-zinc-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Certifications
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CertificationCard
                title="Full stack development using MERN stack"
                organization="CipherSchools"
                date="July 2024"
                certificateLink="https://www.cipherschools.com/certificate/preview?id=66a68d6d938f3ef9dda7b5ce"
              />

              <CertificationCard
                title="Dynamic Programming, Greedy Algorithms"
                organization="Coursera"
                date="April 2024"
                certificateLink="https://coursera.org/share/fb3e19ba388a68e398811f96e32705f1"
              />

              <CertificationCard
                title="Build AI Apps with ChatGPT, Dall-E, and GPT-4"
                organization="Coursera"
                date="May 2024"
                certificateLink="https://coursera.org/share/c768622185b324d9db8416d4479c2bed"
              />

              <CertificationCard
                title="GenAI for Everyone"
                organization="fractal"
                date="Janurary 2024"
                certificateLink="https://coursera.org/share/35bf5eddf1a4c2022979be6ecd26b3c6"
              />

              <CertificationCard
                title="ChatGPT Playground for Beginners: Intro to NLP AI"
                organization="Coursera"
                date="May 2024"
                certificateLink="https://coursera.org/share/172bb4d04dc2b79dd167d9cab4418cf1"
              />

              <CertificationCard
                title="Ethical Hacking"
                organization="Nptel"
                date="October 2024"
                certificateLink="https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs94/Course/NPTEL24CS94S35690065404294733.pdf"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Open Source Section */}
        <AnimatedSection id="opensource" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Open Source Contributions
              </span>
            </h2>

            <div className="flex gap-8 justify-center">
              <OpenSourceCard
                project="AOSP - Descendant OS"
                description="Contribution to custom rom descendant os based on aosp and maintainer for the same for Redmi k40/  mi 11x /poco f3 group."
                contributions={[
                  "Fixed a memory leak in the audio service.",
                  "Improved the build process by optimizing asset management",
                  "fixed bugs related to the HBM mode",
                ]}
                delay={0}
              />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection id="video" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Video CV
              </span>
            </h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto mb-16"></div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 group">
                  <img
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Video CV Thumbnail"
                    width={1280}
                    height={720}
                    className="object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-all">
                    <div className="w-20 h-20 rounded-full bg-purple-500/80 flex items-center justify-center">
                      <Play />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Watch My Video Introduction
                </h3>
                <p className="text-zinc-300 mb-6">
                  Get to know me better through this short video where I talk
                  about my skills, experience, and what drives me as a
                  developer. I also showcase some of my favorite projects and
                  discuss my approach to problem-solving.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-purple-600 hover:bg-purple-700 flex-1"
                  >
                    <a
                      href="https://drive.google.com/file/d/1ob6Ms44_66L_QQ_Hxglio1APn-MJi9oZ/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Watch on Google Drive
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a
                      href="https://drive.usercontent.google.com/download?id=1ob6Ms44_66L_QQ_Hxglio1APn-MJi9oZ&export=download&authuser=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Video
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="py-20 bg-zinc-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Get In Touch
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-purple-400" />
                    <a
                      href="mailto:sharmasujal995@example.com"
                      className="hover:text-purple-400 transition-colors"
                    >
                      sharmasujal995@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3 text-purple-400" />
                    <a
                      href="https://github.com/SujalSharma-tech"
                      target="_blank"
                      className="hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      github.com/SujalSharma-tech
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-purple-400" />
                    <a
                      href="https://linkedin.com/in/sujalsharma12"
                      target="_blank"
                      className="hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      linkedin.com/in/sujalsharma12
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 mr-3 text-purple-400" />
                    <a
                      href="https://instagram.com/sujal.dreamss"
                      target="_blank"
                      className="hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      instagram.com/sujal.dreamss
                    </a>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold mb-4">Location</h3>
                  <p className="text-zinc-400">Punjab, India</p>
                  <p className="text-zinc-400 mt-2">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} Sujal Sharma. All rights reserved.
          </p>
          <p className="text-zinc-600 mt-2">
            Built with React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

// Component for skill cards
// function SkillCard({ name, delay = 0 }) {
//   return (
//     <div
//       className="bg-zinc-800/50 rounded-lg p-4 flex items-center justify-center h-24 border border-zinc-700 hover:border-purple-500 transition-all hover:bg-zinc-800 group hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       <span className="text-lg font-medium group-hover:text-purple-400 transition-colors">
//         {name}
//       </span>
//     </div>
//   );
// }

// Component for project cards
function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
  insights,
  delay = 0,
}) {
  return (
    <div
      className="opacity-0 translate-y-4 "
      style={{
        animation: `fadeIn 0.5s ease-out ${delay}ms forwards`,
      }}
    >
      <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden hover:border-purple-500 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10 min-h-[362px] ">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-zinc-700/50">
                {tag}
              </Badge>
            ))}
          </div>
          <div>
            <h4 className="text-sm font-medium text-purple-400 mb-1">
              Key Insights:
            </h4>
            <p className="text-sm text-zinc-400">{insights}</p>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="flex-1 bg-purple-600 hover:bg-purple-700"
          >
            <a href={demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// Component for certification cards
function CertificationCard({ title, organization, date, certificateLink }) {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden hover:border-purple-500 transition-all group hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={"/certificate.png"}
          alt={title}
          className=" w-full h-full transition-transform group-hover:scale-105 object-contain"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm text-zinc-400">{date}</p>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-purple-400 hover:text-purple-300 p-0"
        >
          <a href={certificateLink} target="_blank" rel="noreferrer">
            View Certificate
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

function SkillCard({ name, delay = 0 }) {
  return (
    <div
      className="bg-zinc-800/50 rounded-lg p-4 flex items-center justify-center h-24 border border-zinc-700 hover:border-purple-500 transition-all hover:bg-zinc-800 group hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-lg font-medium group-hover:text-purple-400 transition-colors">
        {name}
      </span>
    </div>
  );
}
// Component for open source contribution cards
function OpenSourceCard({
  project,
  description,
  contributions,

  delay = 0,
}) {
  return (
    <div
      className="opacity-0 translate-y-4 w-[700px] min-w-[200px]"
      style={{
        animation: `fadeIn 0.5s ease-out ${delay}ms forwards`,
      }}
    >
      <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden hover:border-purple-500 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
        <CardHeader>
          <CardTitle className="text-xl">{project}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <h4 className="text-sm font-medium text-purple-400 mb-2">
            Key Contributions:
          </h4>
          <ul className="space-y-1 text-sm text-zinc-400">
            {contributions.map((contribution, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                {contribution}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
