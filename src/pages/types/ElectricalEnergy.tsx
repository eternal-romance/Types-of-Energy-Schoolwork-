import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Lightbulb } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const ElectricalEnergy = () => {
  return (
    <PageLayout 
      title="Energia Elétrica"
      subtitle="A energia do movimento organizado de cargas elétricas"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 mr-4">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Definição</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia elétrica resulta do movimento ordenado de cargas elétricas, principalmente elétrons, 
            através de condutores. É uma das formas mais versáteis e amplamente utilizadas de energia, 
            podendo ser facilmente convertida em outras formas como luz, calor, movimento e som.
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
                <Zap className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Corrente Contínua (CC)</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Fluxo constante de elétrons em uma única direção. Utilizada em baterias, dispositivos 
              eletrônicos e sistemas de baixa tensão.
            </p>
            <div className="text-sm text-blue-300 bg-blue-900/30 p-3 rounded-lg">
              <strong>Exemplos:</strong> Baterias de celular, pilhas, painéis solares, carros elétricos
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-cyan-800/30 to-cyan-700/20 border border-cyan-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-cyan-600/20 border border-cyan-500/30 mr-3">
                <Battery className="h-5 w-5 text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Corrente Alternada (CA)</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Fluxo de elétrons que muda de direção periodicamente. É a forma de energia elétrica 
              distribuída nas residências e indústrias.
            </p>
            <div className="text-sm text-cyan-300 bg-cyan-900/30 p-3 rounded-lg">
              <strong>Exemplos:</strong> Rede elétrica doméstica, motores industriais, tomadas
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl p-8 border border-indigo-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Geração de Energia Elétrica</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-indigo-400">Métodos Tradicionais</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Usinas termoelétricas (carvão, gás, óleo)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Usinas nucleares</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Usinas hidrelétricas</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-400">Métodos Renováveis</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Painéis solares fotovoltaicos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Turbinas eólicas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Usinas geotérmicas</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-800/20 to-emerald-700/10 border border-emerald-600/50">
            <div className="p-4 rounded-full bg-emerald-600/20 border border-emerald-500/30 inline-block mb-4">
              <Lightbulb className="h-8 w-8 text-emerald-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Iluminação</h4>
            <p className="text-gray-300 text-sm">Lâmpadas LED, fluorescentes e incandescentes</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-800/20 to-blue-700/10 border border-blue-600/50">
            <div className="p-4 rounded-full bg-blue-600/20 border border-blue-500/30 inline-block mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Eletrônicos</h4>
            <p className="text-gray-300 text-sm">Computadores, smartphones e eletrodomésticos</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-800/20 to-purple-700/10 border border-purple-600/50">
            <div className="p-4 rounded-full bg-purple-600/20 border border-purple-500/30 inline-block mb-4">
              <Battery className="h-8 w-8 text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Armazenamento</h4>
            <p className="text-gray-300 text-sm">Baterias e sistemas de backup</p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ElectricalEnergy;