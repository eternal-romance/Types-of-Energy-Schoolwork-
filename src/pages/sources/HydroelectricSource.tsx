import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Zap, Mountain } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import SourceBadge from '../../components/SourceBadge';

const HydroelectricSource = () => {
  return (
    <PageLayout 
      title="Energia Hidrelétrica"
      subtitle="Aproveitamento da força das águas para geração de eletricidade"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center"
        >
          <SourceBadge isRenewable={true} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 mr-4">
              <Waves className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Como Funciona</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia hidrelétrica aproveita a energia potencial da água em reservatórios elevados. 
            Quando a água desce através de turbinas, sua energia potencial é convertida em energia 
            cinética e depois em energia elétrica através de geradores. É uma das fontes de energia 
            renovável mais estabelecidas e confiáveis do mundo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-800/30 to-blue-700/20 border border-blue-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 mr-3">
                <Mountain className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Barragem</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Estrutura que represa a água, criando um reservatório com diferença de nível 
              para gerar energia potencial.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-cyan-800/30 to-cyan-700/20 border border-cyan-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-cyan-600/20 border border-cyan-500/30 mr-3">
                <Waves className="h-5 w-5 text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Turbina</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A força da água em movimento gira as pás da turbina, convertendo energia 
              hidráulica em energia mecânica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-indigo-800/30 to-indigo-700/20 border border-indigo-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30 mr-3">
                <Zap className="h-5 w-5 text-indigo-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Gerador</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Converte a energia mecânica da turbina em energia elétrica que pode ser 
              distribuída para consumo.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Vantagens</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Fonte renovável e sustentável</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Não produz gases poluentes</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Longa vida útil das instalações</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Controle de enchentes</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Fornecimento de água para irrigação</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Criação de áreas de lazer</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-2xl p-8 border border-amber-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Desafios Ambientais</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-amber-600/20 border border-amber-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Impacto nos Ecossistemas</h4>
                <p className="text-gray-300">Alteração dos habitats aquáticos e terrestres nas áreas alagadas.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-orange-600/20 border border-orange-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Migração de Peixes</h4>
                <p className="text-gray-300">Necessidade de sistemas para permitir a passagem de espécies migratórias.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Sedimentação</h4>
                <p className="text-gray-300">Acúmulo de sedimentos no reservatório e redução downstream.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-6 border border-blue-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-4">Importância Global</h3>
          <p className="text-gray-300 leading-relaxed">
            A energia hidrelétrica representa cerca de 16% da geração mundial de eletricidade e 
            é fundamental para países como Brasil, Canadá e Noruega. É considerada essencial 
            para a transição energética sustentável e o combate às mudanças climáticas.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default HydroelectricSource;