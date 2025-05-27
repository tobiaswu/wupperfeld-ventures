import { motion } from 'framer-motion';
import { Brain, Code } from 'lucide-react';

const ProfileTab = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gunmetal-400/20 backdrop-blur-sm border border-steel-blue-600/30 rounded-xl p-6"
    >
      <h3 className="text-2xl font-bold mb-4 text-buff-400 flex items-center gap-2">
        <Brain className="w-6 h-6" />
        About Me
      </h3>
      <p className="text-steel-blue-600 leading-relaxed mb-4">
        Hi, I&apos;m Tobias – an ambitious software engineer from Germany and
        founder of MadeByAgents. I help businesses unlock growth and efficiency
        through AI-powered solutions.
      </p>
      <p className="text-steel-blue-600 leading-relaxed">
        I specialize in strategic AI consulting, agentic workflows, enterprise
        software development, and business process automation for 7-figure (or
        scaling) businesses looking to streamline operations.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="bg-gunmetal-400/20 backdrop-blur-sm border border-steel-blue-600/30 rounded-xl p-6"
    >
      <h3 className="text-2xl font-bold mb-4 text-buff-400 flex items-center gap-2">
        <Code className="w-6 h-6" />
        Tech Stack
      </h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-steel-blue-400 rounded-full animate-pulse"></div>
          <span className="text-steel-blue-600">
            TypeScript / React Ecosystem
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-steel-blue-400 rounded-full animate-pulse"></div>
          <span className="text-steel-blue-600">Python Ecosystem</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-steel-blue-400 rounded-full animate-pulse"></div>
          <span className="text-steel-blue-600">
            Agent Frameworks (OpenAI Agents SDK / CrewAI / LangGraph)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-steel-blue-400 rounded-full animate-pulse"></div>
          <span className="text-steel-blue-600">
            Cursor / AI Development Tools
          </span>
        </div>
      </div>
    </motion.div>
  </div>
);

export default ProfileTab;
