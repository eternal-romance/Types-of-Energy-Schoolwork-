import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Lightbulb, Leaf } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const SolarEnergyType = () => {
  return (
    <PageLayout 
      title="Energia Solar"
      subtitle="A energia radiante emitida pelo Sol e capturada para uso humano"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 mr-4">
              <Sun className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Definição</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia solar é a radiação eletromagnética emitida pelo Sol, resultado das reações 
            de fusão nuclear em seu núcleo. Esta energia viaja pelo espaço e chega à Terra na forma 
            de luz visível, calor e outras radiações, sendo a fonte primária de energia para 
            praticamente todos os processos energéticos do nosso planeta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-yellow-800/30 to-yellow-700/20 border border-yellow-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-yellow-600/20 border border-yellow-500/30 mr-3">
                <Lightbulb className="h-5 w-5 text-yellow-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Energia Luminosa</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A luz solar visível que permite a visão, regula ciclos biológicos e pode ser 
              convertida em eletricidade através de painéis fotovoltaicos.
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
                <Sun className="h-5 w-5 text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Energia Térmica</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              O calor solar que aquece a atmosfera, os oceanos e a superfície terrestre, 
              criando correntes de ar e evaporação da água.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-green-800/30 to-green-700/20 border border-green-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-600/20 border border-green-500/30 mr-3">
                <Leaf className="h-5 w-5 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Energia Química</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A energia convertida pelas plantas durante a fotossíntese, transformando luz 
              solar em energia química armazenada em moléculas orgânicas.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-2xl p-8 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Aproveitamento da Energia Solar</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">Conversão Direta</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Painéis fotovoltaicos (luz → eletricidade)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Coletores térmicos (calor → água quente)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Concentradores solares (vapor → eletricidade)</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-teal-400">Conversão Indireta</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Energia eólica (aquecimento → ventos)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Energia hidráulica (evaporação → chuva)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Biomassa (fotossíntese → matéria orgânica)</p>
                </div>
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
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Importância Fundamental</h3>
          
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              A energia solar é a fonte primária de praticamente toda a energia disponível na Terra. 
              Sem ela, não existiriam ventos, correntes oceânicas, ciclo da água, fotossíntese ou vida 
              como conhecemos. É abundante, renovável e essencial para a sustentabilidade energética do futuro.
            </p>
            
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30">
              <Sun className="h-6 w-6 text-yellow-400 mr-3" />
              <span className="text-white font-medium">Potência solar incidente na Terra: ~174.000 TW</span>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default SolarEnergyType;