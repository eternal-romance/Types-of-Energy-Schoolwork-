import React from 'react';
import { motion } from 'framer-motion';
import { Cog, ArrowUp, ArrowRight } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const MechanicalEnergy = () => {
  return (
    <PageLayout 
      title="Energia Mecânica"
      subtitle="A energia associada ao movimento e à posição dos objetos"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 mr-4">
              <Cog className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Definição</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia mecânica é a soma da energia cinética (relacionada ao movimento) e da energia potencial 
            (relacionada à posição). É a forma de energia mais visível em nosso dia a dia, manifestando-se 
            em objetos em movimento, corpos elevados e sistemas em funcionamento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-800/30 to-blue-700/20 border border-blue-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 mr-3">
                <ArrowRight className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Energia Cinética</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              É a energia que um objeto possui devido ao seu movimento. Quanto maior a velocidade e a massa 
              do objeto, maior será sua energia cinética.
            </p>
            <div className="mt-4 text-sm text-blue-300 bg-blue-900/30 p-3 rounded-lg">
              <strong>Exemplos:</strong> Carro em movimento, bola de futebol voando, águas de um rio
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-green-800/30 to-green-700/20 border border-green-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-600/20 border border-green-500/30 mr-3">
                <ArrowUp className="h-5 w-5 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Energia Potencial</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              É a energia armazenada em um objeto devido à sua posição ou configuração. Pode ser 
              gravitacional, elástica ou de outro tipo.
            </p>
            <div className="mt-4 text-sm text-green-300 bg-green-900/30 p-3 rounded-lg">
              <strong>Exemplos:</strong> Pedra no alto de um penhasco, mola comprimida, arco tensionado
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Aplicações Práticas</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="p-4 rounded-full bg-purple-600/20 border border-purple-500/30 inline-block mb-4">
                <Cog className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Máquinas</h4>
              <p className="text-gray-300 text-sm">Motores, turbinas e equipamentos industriais</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-purple-600/20 border border-purple-500/30 inline-block mb-4">
                <ArrowUp className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Usinas</h4>
              <p className="text-gray-300 text-sm">Hidrelétricas e eólicas aproveitam energia mecânica</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-purple-600/20 border border-purple-500/30 inline-block mb-4">
                <ArrowRight className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Transporte</h4>
              <p className="text-gray-300 text-sm">Veículos, trens e navios utilizam energia mecânica</p>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default MechanicalEnergy;