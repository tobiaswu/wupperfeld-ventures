import { motion } from "framer-motion";
import {
  Rocket,
  Zap,
  ExternalLink,
  Bitcoin,
  ShoppingCart,
  Building2,
  GanttChart,
  Factory,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "MadeByAgents.com",
    description:
      "AI-powered solutions agency specializing in rapid software development, strategic consulting, and agentic workflows.",
    url: "https://madebyagents.com",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    name: "The Agent Roundup",
    description:
      "Weekly notes on AI-driven software development: coding agents, workflows, and tools we actually use.",
    url: "https://agentroundup.com/subscribe",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "JAN3 – Head of AI Research",
    description:
      "Leading A1 Lab at JAN3, building AI-powered tools and workflows for the Bitcoin ecosystem. Driving R&D initiatives that bridge cutting-edge AI with sovereign technology.",
    url: "https://jan3.com",
    icon: <Bitcoin className="w-6 h-6" />,
  },
];

const pastProjects = [
  {
    company: "Procure AI",
    role: "Fullstack Engineer",
    type: "Full-time",
    duration: "Aug 2022 – Jul 2023",
    length: "1 yr",
    location: "Remote, London",
    icon: <ShoppingCart className="w-6 h-6" />,
    highlights: [
      "Built AI-powered procurement platform from the ground up using Next.js, TypeScript, and Python",
      "Designed and implemented RESTful APIs and database schemas for complex procurement workflows",
      "Integrated LLM-based document parsing and supplier matching features",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "AI/ML",
      "REST APIs",
    ],
  },
  {
    company: "SAP",
    role: "Frontend Engineer",
    type: "Full-time",
    duration: "Nov 2020 – May 2022",
    length: "1 yr 7 mos",
    location: "Remote, Walldorf",
    icon: <Building2 className="w-6 h-6" />,
    highlights: [
      "Developed enterprise UI components for SAP Business Technology Platform using React and UI5",
      "Led migration of legacy jQuery dashboards to modern React architecture",
      "Collaborated with cross-functional teams across 4 time zones on design system contributions",
    ],
    tags: ["React", "TypeScript", "SAP UI5", "Figma", "Jest", "Storybook"],
  },
  {
    company: "lackner.pm",
    role: "Project Engineer",
    type: "Full-time",
    duration: "Feb 2019 – Jul 2019",
    length: "6 mos",
    location: "Innsbruck, Austria",
    icon: <GanttChart className="w-6 h-6" />,
    highlights: [
      "Managed technical project planning and execution for construction engineering projects",
      "Developed automated reporting tools reducing manual effort by 40%",
      "Coordinated between engineering teams and stakeholders on multi-million euro infrastructure projects",
    ],
    tags: [
      "Project Management",
      "AutoCAD",
      "MS Project",
      "Reporting",
      "Stakeholder Management",
    ],
  },
  {
    company: "SHL Medical",
    role: "PM & Engineering",
    type: "Full-time",
    duration: "Oct 2016 – Mar 2017",
    length: "6 mos",
    location: "Taipei, Taiwan",
    icon: <Factory className="w-6 h-6" />,
    highlights: [
      "Led cross-functional project management for medical device manufacturing processes",
      "Engineered quality assurance workflows for drug delivery device production lines",
      "Bridged communication between Swiss HQ engineering and Taiwanese manufacturing teams",
    ],
    tags: [
      "Medical Devices",
      "Quality Assurance",
      "Manufacturing",
      "Project Management",
      "GMP",
    ],
  },
];

const ProjectsTab = () => (
  <div className="space-y-6">
    <h3 className="text-3xl font-bold text-center text-buff-400 mb-8">
      Active Projects
    </h3>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gunmetal-400/20 backdrop-blur-sm border border-steel-blue-600/30 rounded-xl p-6 hover:border-steel-blue-400/50 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="text-buff-400 group-hover:text-buff-300 transition-colors">
              {project.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-steel-blue-400 mb-2">
                {project.name}
              </h4>
              <p className="text-steel-blue-600 mb-4">{project.description}</p>
              <Link
                href={project.url}
                className="inline-flex items-center gap-2 text-buff-400 hover:text-buff-300 transition-colors font-mono text-sm"
              >
                Visit Project <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Separator */}
    <div className="relative py-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-steel-blue-600/20" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-gunmetal-400/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-mono text-steel-blue-600 border border-steel-blue-600/20">
          Previously
        </span>
      </div>
    </div>

    {/* Past Projects */}
    <h3 className="text-3xl font-bold text-center text-buff-400 mb-8">
      Past Projects
    </h3>
    <div className="grid md:grid-cols-2 gap-6">
      {pastProjects.map((project, index) => (
        <motion.div
          key={project.company}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (projects.length + index) * 0.1 }}
          className="bg-gunmetal-400/20 backdrop-blur-sm border border-steel-blue-600/20 rounded-xl p-6 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="text-buff-400 group-hover:text-buff-300 transition-colors">
              {project.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-steel-blue-400 mb-1">
                {project.company}
              </h4>
              <p className="text-sm text-buff-400 mb-1">{project.role}</p>
              <p className="text-xs font-mono text-steel-blue-600 mb-0.5">
                {project.type} · {project.duration} · {project.length}
              </p>
              <p className="text-xs font-mono text-steel-blue-600 mb-4">
                {project.location}
              </p>
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-steel-blue-600"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-buff-400 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded-full bg-steel-blue-600/10 text-steel-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ProjectsTab;
