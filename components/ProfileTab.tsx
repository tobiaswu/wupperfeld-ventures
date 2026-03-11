import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, Code } from "lucide-react";

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
        I&apos;m Tobias – founder of{" "}
        <span className="text-buff-400 font-semibold">Made By Agents</span> and
        Head of AI Research at JAN3. I help startups and scaling companies ship
        production-ready software 10× faster using AI agents and modern
        development practices.
      </p>
      <p className="text-steel-blue-600 leading-relaxed mb-4">
        My approach isn&apos;t just about adding AI features – it&apos;s about
        fundamentally transforming how your team builds software. From strategic
        roadmaps to hands-on development with coding agents, I deliver clean,
        maintainable code that scales.
      </p>
      <p className="text-steel-blue-600 leading-relaxed">
        Whether you need to launch an MVP fast, automate repetitive workflows,
        or upskill your engineering team for the AI era – I&apos;m the partner
        who bridges deep technical execution with strategic thinking.
      </p>
    </motion.div>

    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gunmetal-400/20 backdrop-blur-sm border border-steel-blue-600/30 rounded-xl overflow-hidden"
      >
        <Image
          src="/tobias.webp"
          alt="Tobias Wupperfeld"
          width={600}
          height={600}
          className="w-full max-h-96 object-cover object-top"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gunmetal-400/20 backdrop-blur-sm border border-steel-blue-600/30 rounded-xl p-6"
      >
        <h3 className="text-2xl font-bold mb-4 text-buff-400 flex items-center gap-2">
          <Code className="w-6 h-6" />
          Tech Stack
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <div className="w-3 h-3 flex-shrink-0 bg-steel-blue-400 rounded-full animate-pulse"></div>
            <span className="text-steel-blue-600">
              <span className="text-steel-blue-400">Frontend:</span> Next.js,
              React, Vite, Tailwind
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-3 h-3 flex-shrink-0 bg-steel-blue-400 rounded-full animate-pulse"></div>
            <span className="text-steel-blue-600">
              <span className="text-steel-blue-400">Backend:</span> FastAPI,
              Fastify, Node.js
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-3 h-3 flex-shrink-0 bg-steel-blue-400 rounded-full animate-pulse"></div>
            <span className="text-steel-blue-600">
              <span className="text-steel-blue-400">AI Agents:</span> OpenAI
              SDK, CrewAI, LangGraph
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-3 h-3 flex-shrink-0 bg-steel-blue-400 rounded-full animate-pulse"></div>
            <span className="text-steel-blue-600">
              <span className="text-steel-blue-400">Dev Tools:</span> Cursor,
              Claude, Codex
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-3 h-3 flex-shrink-0 bg-buff-400 rounded-full animate-pulse"></div>
            <span className="text-buff-400 font-medium">
              + whatever gets the job done
            </span>
          </li>
        </ul>
      </motion.div>
    </div>
  </div>
);

export default ProfileTab;
