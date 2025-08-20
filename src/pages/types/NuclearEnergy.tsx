import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, AlertTriangle } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const NuclearEnergy = () => {
  return (
    <PageLayout 
      title="Energia Nuclear"
      subtitle="A imensa energia liberada através de transformações no núcleo atômico"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 mr-4">
              <Atom className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Definição</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia nuclear provém de transformações que ocorrem no núcleo dos átomos. É uma das 
            formas mais concentradas de energia conhecidas, podendo ser liberada através de dois 
            processos principais: fissão nuclear (divisão de núcleos pesados) e fusão nuclear 
            (união de núcleos leves).
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
                <Atom className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Fissão Nuclear</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Processo onde núcleos atômicos pesados (como urânio-235) são divididos em fragmentos 
              menores, liberando grande quantidade de energia e nêutrons.
            </p>
            <div className="text-sm text-blue-300 bg-blue-900/30 p-3 rounded-lg">
              <strong>Uso:</strong> Usinas nucleares, reatores de pesquisa, medicina nuclear
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-yellow-800/30 to-yellow-700/20 border border-yellow-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-yellow-600/20 border border-yellow-500/30 mr-3">
                <Zap className="h-5 w-5 text-yellow-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Fusão Nuclear</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Processo onde núcleos leves (como hidrogênio) se unem formando núcleos mais pesados, 
              liberando enormes quantidades de energia.
            </p>
            <div className="text-sm text-yellow-300 bg-yellow-900/30 p-3 rounded-lg">
              <strong>Exemplos:</strong> Sol e estrelas, pesquisa em reatores experimentais
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-2xl p-8 border border-emerald-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Vantagens da Energia Nuclear</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-full bg-emerald-600/20 border border-emerald-500/30 inline-block mb-4">
                <Zap className="h-8 w-8 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Alta Eficiência</h4>
              <p className="text-gray-300 text-sm">Uma pequena quantidade de combustível produz muita energia</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-emerald-600/20 border border-emerald-500/30 inline-block mb-4">
                <Atom className="h-8 w-8 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Baixas Emissões</h4>
              <p className="text-gray-300 text-sm">Não emite gases de efeito estufa durante operação</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-emerald-600/20 border border-emerald-500/30 inline-block mb-4">
                <div className="w-8 h-8 flex items-center justify-center text-emerald-400 font-bold text-lg">
                  24h
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Operação Contínua</h4>
              <p className="text-gray-300 text-sm">Funciona independente de condições climáticas</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl p-8 border border-orange-500/30"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-orange-600/20 border border-orange-500/30 mr-4">
              <AlertTriangle className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Desafios e Segurança</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Resíduos Radioativos</h4>
                <p className="text-gray-300">Necessidade de armazenamento seguro por longos períodos devido à radioatividade.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-orange-600/20 border border-orange-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Segurança Operacional</h4>
                <p className="text-gray-300">Sistemas múltiplos de segurança para prevenir acidentes e vazamentos.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-yellow-600/20 border border-yellow-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Custos Elevados</h4>
                <p className="text-gray-300">Investimento inicial alto para construção de usinas e sistemas de segurança.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl p-6 border border-indigo-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-4">Aplicações Além da Energia</h3>
          <p className="text-gray-300 leading-relaxed">
            A energia nuclear tem aplicações importantes na medicina (radioterapia, diagnósticos), 
            pesquisa científica, preservação de alimentos e propulsão de navios e submarinos. 
            É uma tecnologia versátil com potencial para contribuir significativamente no futuro energético.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default NuclearEnergy;