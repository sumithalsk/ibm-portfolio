import { motion } from 'framer-motion';
import { Terminal, Code, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center gap-4 mb-8"
          >
            <Terminal className="w-12 h-12 text-cyan-400" />
            <Code className="w-12 h-12 text-emerald-400" />
            <Cpu className="w-12 h-12 text-blue-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent"
          >
            Patlolla Sumith Reddy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-mono"
          >
            <span className="text-cyan-400">$</span> Technical Support Engineer | Systems Diagnostics | Hardware-Software Integration
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Computer Science student passionate about <span className="text-cyan-400 font-semibold">system reliability</span>, 
            <span className="text-emerald-400 font-semibold"> hardware diagnostics</span>, and 
            <span className="text-blue-400 font-semibold"> low-level debugging</span>. 
            Building tools for monitoring, automation, and troubleshooting complex systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
}
