import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Thermometer, Sun } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const ThermalEnergy = () => {
  return (
    <PageLayout 
      title="Energia Térmica"
      subtitle="A energia relacionada ao movimento das partículas e à temperatura dos corpos"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 mr-4">
              <Flame className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Definição</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia térmica está diretamente relacionada ao movimento aleatório das partículas que compõem 
            a matéria. Quanto maior a agitação dessas partículas, maior será a temperatura e a energia térmica 
            do sistema. É uma das formas mais comuns de energia em nosso cotidiano.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-red-800/30 to-red-700/20 border border-red-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-red-600/20 border border-red-500/30 mr-3">
                <Flame className="h-5 w-5 text-red-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Combustão</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Liberação de energia térmica através da queima de combustíveis como madeira, gás natural, 
              gasolina e carvão.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-orange-800/30 to-orange-700/20 border border-orange-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-orange-600/20 border border-orange-500/30 mr-3">
                <Thermometer className="h-5 w-5 text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Atrito</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Quando dois objetos se esfregam, parte da energia mecânica é convertida em energia térmica, 
              aquecendo os materiais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-yellow-800/30 to-yellow-700/20 border border-yellow-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-yellow-600/20 border border-yellow-500/30 mr-3">
                <Sun className="h-5 w-5 text-yellow-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Radiação</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transferência de energia térmica através de ondas eletromagnéticas, como o calor do Sol 
              que chega até nós.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-2xl p-8 border border-red-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Formas de Transferência</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Condução</h4>
                <p className="text-gray-300">Transferência através do contato direto entre materiais, como uma colher esquentando no café quente.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-orange-600/20 border border-orange-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Convecção</h4>
                <p className="text-gray-300">Transferência através do movimento de fluidos, como o ar quente subindo e o ar frio descendo.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-yellow-600/20 border border-yellow-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Radiação</h4>
                <p className="text-gray-300">Transferência através de ondas eletromagnéticas, sem necessidade de contato ou meio material.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-amber-600/10 to-red-600/10 rounded-2xl p-6 border border-amber-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-4">Aplicações Cotidianas</h3>
          <p className="text-gray-300 leading-relaxed">
            Aquecimento doméstico, cozimento de alimentos, motores de combustão, usinas termoelétricas, 
            sistemas de refrigeração e processos industriais que dependem do controle preciso da temperatura.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ThermalEnergy;