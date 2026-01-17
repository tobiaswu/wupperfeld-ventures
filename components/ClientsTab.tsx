import { motion } from 'framer-motion';
import { ClientsLogos } from './ClientsLogos';

const ClientsTab = () => (
  <div className="text-center">
    <h3 className="text-3xl font-bold text-buff-400 mb-4">
      Trusted by Industry Leaders
    </h3>
    <p className="text-steel-blue-600 mb-8 max-w-2xl mx-auto">
      From enterprise software modernization to AI-powered MVPs – I&apos;ve helped
      startups and established companies ship faster and smarter.
    </p>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gunmetal-400/20 backdrop-blur-sm border border-steel-blue-600/30 rounded-xl p-12"
    >
      <ClientsLogos />
    </motion.div>
  </div>
);

export default ClientsTab;
