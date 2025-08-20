import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Atom, Waves, ChevronRight } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="min-h-screen pt-20 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="inline-block p-6 rounded-full bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 mb-8"
          >
            <Zap className="h-16 w-16 text-blue-400" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
            Tipos de Energia
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubra o fascinante universo da energia e suas múltiplas manifestações que movem nosso mundo
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link to="/conceito" className="group">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30">
                  <Zap className="h-8 w-8 text-blue-400" />
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                O que é Energia?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Compreenda o conceito fundamental de energia e sua importância em nossa vida cotidiana.
              </p>
            </motion.div>
          </Link>

          <div className="group">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/50 backdrop-blur-sm hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-teal-600/20 to-teal-500/20 border border-teal-500/30">
                  <Atom className="h-8 w-8 text-teal-400" />
                </div>
                <span className="text-sm font-medium text-teal-400 bg-teal-500/20 px-3 py-1 rounded-full">
                  6 tipos
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                Tipos de Energia
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Explore as diferentes formas de energia: mecânica, térmica, elétrica, química, nuclear e solar.
              </p>
            </motion.div>
          </div>

          <div className="group">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30">
                  <Waves className="h-8 w-8 text-green-400" />
                </div>
                <span className="text-sm font-medium text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
                  8 fontes
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                Fontes de Energia
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Conheça as principais fontes energéticas e sua classificação entre renováveis e não renováveis.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <Link to="/conceito">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Começar Exploração
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;