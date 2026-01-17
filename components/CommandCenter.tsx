'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Briefcase,
  Users,
} from 'lucide-react';
import { MailIcon } from './SocialIcons';
import ProfileTab from './ProfileTab';
import ProjectsTab from './ProjectsTab';
import ClientsTab from './ClientsTab';
import ContactTab from './ContactTab';

interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: TabProps[] = [
  { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
  {
    id: 'projects',
    label: 'Projects',
    icon: <Briefcase className="w-4 h-4" />,
  },
  { id: 'clients', label: 'Clients', icon: <Users className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <MailIcon className="w-4 h-4" /> },
];

export function CommandCenter() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabVariants = {
    inactive: {
      backgroundColor: 'rgba(34, 51, 59, 0.3)',
      borderColor: 'rgba(79, 124, 172, 0.3)',
      color: 'rgba(79, 124, 172, 0.7)',
    },
    active: {
      backgroundColor: 'rgba(79, 124, 172, 0.2)',
      borderColor: '#4f7cac',
      color: '#4f7cac',
      boxShadow: '0 0 20px rgba(79, 124, 172, 0.3)',
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="min-h-screen  text-steel-blue-900 dark:text-steel-blue-200">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-steel-blue-400 to-buff-400 bg-clip-text text-transparent">
            WUPPERFELD VENTURES
          </h1>
          <p className="text-lg text-steel-blue-600 font-mono">
            Tobias Wupperfeld • Ship 10× Faster with AI-Powered Development
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variants={tabVariants}
              animate={activeTab === tab.id ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 font-mono text-sm transition-all duration-300"
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === 'profile' && <ProfileTab />}
            {activeTab === 'projects' && <ProjectsTab />}
            {activeTab === 'clients' && <ClientsTab />}
            {activeTab === 'contact' && <ContactTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
