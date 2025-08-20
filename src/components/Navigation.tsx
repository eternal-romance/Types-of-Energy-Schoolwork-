import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Atom, Waves } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const energyTypes = [
    { path: '/tipos/mecanica', name: 'Mecânica' },
    { path: '/tipos/termica', name: 'Térmica' },
    { path: '/tipos/eletrica', name: 'Elétrica' },
    { path: '/tipos/quimica', name: 'Química' },
    { path: '/tipos/nuclear', name: 'Nuclear' },
    { path: '/tipos/solar', name: 'Solar' },
  ];

  const energySources = [
    { path: '/fontes/hidreletrica', name: 'Hidrelétrica' },
    { path: '/fontes/solar', name: 'Solar' },
    { path: '/fontes/eolica', name: 'Eólica' },
    { path: '/fontes/geotermica', name: 'Geotérmica' },
    { path: '/fontes/biomassa', name: 'Biomassa' },
    { path: '/fontes/mares', name: 'Marés e Oceanos' },
    { path: '/fontes/hidrogenio', name: 'Hidrogênio' },
    { path: '/fontes/fosseis', name: 'Combustíveis Fósseis' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500"
            >
              <Zap className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              Tipos de Energia
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/conceito"
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                location.pathname === '/conceito' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Conceito
            </Link>
            
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
                <Atom className="h-4 w-4 mr-1" />
                Tipos
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-700">
                {energyTypes.map((type) => (
                  <Link
                    key={type.path}
                    to={type.path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {type.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
                <Waves className="h-4 w-4 mr-1" />
                Fontes
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-700">
                {energySources.map((source) => (
                  <Link
                    key={source.path}
                    to={source.path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {source.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/conceito"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Conceito
              </Link>
              
              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-2">Tipos de Energia</h3>
                <div className="pl-4 space-y-2">
                  {energyTypes.map((type) => (
                    <Link
                      key={type.path}
                      to={type.path}
                      className="block text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-teal-400 mb-2">Fontes de Energia</h3>
                <div className="pl-4 space-y-2">
                  {energySources.map((source) => (
                    <Link
                      key={source.path}
                      to={source.path}
                      className="block text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {source.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;