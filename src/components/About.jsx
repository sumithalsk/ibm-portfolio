import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Bug, Server, Wrench, Shield } from 'lucide-react';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const highlights = [
    {
      icon: Bug,
      title: 'System Diagnostics',
      description: 'Expert in log analysis, fault isolation, and debugging complex hardware-software issues',
    },
    {
      icon: Server,
      title: 'Architecture Knowledge',
      description: 'Strong foundation in computer architecture, RISC systems, memory management, and CPU operations',
    },
    {
      icon: Wrench,
      title: 'Automation Tools',
      description: 'Built diagnostic tools, monitoring scripts, and automation utilities using C, Python, and Bash',
    },
    {
      icon: Shield,
      title: 'Reliability Engineering',
      description: 'Passionate about system reliability, uptime monitoring, and proactive issue detection',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
            Motivated Computer Science student with strong fundamentals in <span className="text-cyan-400">computer architecture</span>, 
            <span className="text-emerald-400"> debugging</span>, and <span className="text-blue-400">system-level programming</span>. 
            Hands-on experience building diagnostic tools, automation scripts, and monitoring utilities. Strong analytical and troubleshooting skills with passion for 
            hardware-software interaction, system reliability, and technical support engineering.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all group hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <item.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
