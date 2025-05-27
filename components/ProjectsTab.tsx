import { motion } from 'framer-motion';
import { Rocket, Zap, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    name: 'MadeByAgents.com',
    description:
      'AI-powered solutions agency specializing in strategic consulting and agentic workflows',
    url: 'https://madebyagents.com',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    name: 'Agents Made Simple',
    description:
      'Weekly AI agent newsletter with tutorials and use cases, delivered every Tuesday',
    url: 'https://news.madebyagents.com/subscribe',
    icon: <Zap className="w-6 h-6" />,
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
  </div>
);

export default ProjectsTab;
