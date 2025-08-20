import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Zap, MapPin } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import SourceBadge from '../../components/SourceBadge';

const WindSource = () => {
  return (
    <PageLayout 
      title="Energia Eólica"
      subtitle="Aproveitamento da força dos ventos para geração de eletricidade"
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
            <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 mr-4">
              <Wind className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Princípio de Funcionamento</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia eólica utiliza a força cinética do vento para girar turbinas conectadas 
            a geradores elétricos. O vento, criado pelas diferenças de pressão atmosférica 
            causadas pelo aquecimento desigual da Terra pelo Sol, oferece uma fonte de energia 
            limpa e renovável com grande potencial de crescimento mundial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-sky-800/30 to-sky-700/20 border border-sky-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-sky-600/20 border border-sky-500/30 mr-3">
                <MapPin className="h-5 w-5 text-sky-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Eólica Onshore</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Turbinas instaladas em terra firme, geralmente em áreas abertas como campos, 
              montanhas e desertos com ventos constantes.
            </p>
            <div className="text-sm text-sky-300 bg-sky-900/30 p-3 rounded-lg">
              <strong>Características:</strong> Menor custo de instalação, fácil manutenção, menor capacidade
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-teal-800/30 to-teal-700/20 border border-teal-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-teal-600/20 border border-teal-500/30 mr-3">
                <Wind className="h-5 w-5 text-teal-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Eólica Offshore</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Turbinas instaladas no mar, onde os ventos são mais fortes e constantes, 
              oferecendo maior potencial de geração de energia.
            </p>
            <div className="text-sm text-teal-300 bg-teal-900/30 p-3 rounded-lg">
              <strong>Características:</strong> Maior custo inicial, ventos mais fortes, maior capacidade
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Vantagens</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-full bg-green-600/20 border border-green-500/30 inline-block mb-4">
                <Wind className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Renovável</h4>
              <p className="text-gray-300 text-sm">Fonte inesgotável baseada nos ventos naturais</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-green-600/20 border border-green-500/30 inline-block mb-4">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Eficiente</h4>
              <p className="text-gray-300 text-sm">Alto fator de capacidade em locais adequados</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-green-600/20 border border-green-500/30 inline-block mb-4">
                <MapPin className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Uso da Terra</h4>
              <p className="text-gray-300 text-sm">Permite outros usos do solo entre as turbinas</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Componentes de uma Turbina Eólica</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-blue-600/20 border border-blue-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Pás do Rotor</h4>
                <p className="text-gray-300">Capturam a energia cinética do vento e convertem em movimento rotacional.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Caixa de Transmissão</h4>
                <p className="text-gray-300">Aumenta a velocidade de rotação das pás para o nível adequado do gerador.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-purple-600/20 border border-purple-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Gerador Elétrico</h4>
                <p className="text-gray-300">Converte a energia mecânica de rotação em energia elétrica.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="bg-gradient-to-r from-amber-600/10 to-yellow-600/10 rounded-2xl p-8 border border-amber-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Considerações Ambientais</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-emerald-400">Aspectos Positivos</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Não produz emissões poluentes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Não consome água</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Ocupação mínima do solo</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-amber-400">Desafios</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Ruído das turbinas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Impacto visual na paisagem</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Risco para aves migratórias</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl p-6 border border-cyan-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-4">Potencial Mundial</h3>
          <p className="text-gray-300 leading-relaxed">
            A energia eólica é uma das fontes renováveis de maior crescimento no mundo. Com avanços 
            tecnológicos constantes e redução de custos, representa uma peça fundamental na matriz 
            energética sustentável, contribuindo significativamente para os objetivos de descarbonização global.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default WindSource;