'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left gap-16">
        <Image
          className="h-auto"
          src="/wv_logo.webp"
          alt="Logo of Wupperfeld Ventures"
          width={384}
          height={200}
        />
        <div>
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl text-white leading-normal font-bold"
            initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Building and Investing in Technology-Driven Ventures. Turning
            Innovative Ideas Into Impactful Solutions.
          </motion.h1>
          <Link href="mailto:tobias@wupperfeld.org">
            <motion.button
              className="btn btn-primary mt-6 rounded-md"
              initial={{ opacity: 0, y: 150, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5 }}
            >
              Contact
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};
