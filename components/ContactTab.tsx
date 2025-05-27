import { motion } from 'framer-motion';
import { YouTubeIcon, LinkedInIcon, XIcon, MailIcon } from './SocialIcons';

const socialLinks = [
  {
    name: 'YouTube',
    icon: <YouTubeIcon className="w-6 h-6" />,
    url: 'https://youtube.com/@madebyagents',
    color: 'hover:text-red-400',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon className="w-6 h-6" />,
    url: 'https://linkedin.com/in/tobias-wupperfeld',
    color: 'hover:text-blue-400',
  },
  {
    name: 'X (Twitter)',
    icon: <XIcon className="w-6 h-6" />,
    url: 'https://x.com/tobiaswup',
    color: 'hover:text-sky-400',
  },
  {
    name: 'Email',
    icon: <MailIcon className="w-6 h-6" />,
    url: 'mailto:tobias@wupperfeld.org',
    color: 'hover:text-green-400',
  },
];

const ContactTab = () => (
  <div className="text-center space-y-8">
    <h3 className="text-3xl font-bold text-buff-400 mb-8">
      Let&apos;s Connect
    </h3>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gunmetal-400/20 backdrop-blur-sm border border-steel-blue-600/30 rounded-xl p-8"
    >
      <p className="text-xl text-steel-blue-600 mb-8">
        Ready to supercharge your business with AI? Let&apos;s discuss your next
        big idea.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center gap-3 p-4 rounded-lg bg-steel-blue-600/10 border border-steel-blue-600/30 text-steel-blue-400 transition-all duration-300 ${link.color}`}
          >
            {link.icon}
            <span className="font-mono text-sm">{link.name}</span>
          </motion.a>
        ))}
      </div>

      <div className="mt-8 p-4 bg-buff-400/10 rounded-lg border border-buff-400/30">
        <p className="text-buff-300 font-mono">
          📧 Direct: tobias@wupperfeld.org
        </p>
      </div>
    </motion.div>
  </div>
);

export default ContactTab;
