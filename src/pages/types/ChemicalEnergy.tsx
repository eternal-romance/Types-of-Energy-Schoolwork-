import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Flame, Leaf } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const ChemicalEnergy = () => {
  return (
    <PageLayout 
      title="Energia Química"
      subtitle="A energia armazenada nas ligações entre átomos e moléculas"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 mr-4">
              <Beaker className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Definição</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia química está armazenada nas ligações que mantêm átomos unidos formando moléculas. 
            Quando essas ligações são quebradas durante reações químicas, a energia é liberada e pode 
            ser convertida em outras formas como calor, luz ou trabalho mecânico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-orange-800/30 to-orange-700/20 border border-orange-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-orange-600/20 border border-orange-500/30 mr-3">
                <Flame className="h-5 w-5 text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Combustão</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Reação química que libera energia na forma de calor e luz, como a queima de combustíveis 
              fósseis, madeira e outros materiais orgânicos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-green-800/30 to-green-700/20 border border-green-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-600/20 border border-green-500/30 mr-3">
                <Leaf className="h-5 w-5 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Fotossíntese</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Processo pelo qual as plantas convertem energia solar em energia química, armazenando-a 
              na forma de glicose e outras moléculas orgânicas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-red-800/30 to-red-700/20 border border-red-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-red-600/20 border border-red-500/30 mr-3">
                <Beaker className="h-5 w-5 text-red-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Respiração</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Processo celular que quebra moléculas de glicose e outras substâncias para liberar 
              energia necessária às funções vitais dos organismos vivos.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-gradient-to-r from-teal-600/10 to-cyan-600/10 rounded-2xl p-8 border border-teal-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Fontes de Energia Química</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-teal-400">Combustíveis Fósseis</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Petróleo e derivados (gasolina, diesel)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Gás natural</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Carvão mineral</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cyan-400">Biomassa e Biocombustíveis</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Etanol da cana-de-açúcar</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Biodiesel de óleos vegetais</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Madeira e resíduos orgânicos</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Importância Biológica</h3>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              A energia química é fundamental para toda a vida na Terra. Desde a fotossíntese que 
              sustenta as cadeias alimentares até a respiração celular que mantém nossos organismos 
              funcionando, toda atividade biológica depende da conversão e utilização da energia química.
            </p>
            
            <div className="flex justify-center items-center space-x-8 text-purple-400">
              <span className="text-lg font-medium">Plantas</span>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-purple-400"></div>
                <div className="w-0 h-0 border-l-4 border-l-purple-400 border-y-2 border-y-transparent ml-1"></div>
              </div>
              <span className="text-lg font-medium">Animais</span>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-purple-400"></div>
                <div className="w-0 h-0 border-l-4 border-l-purple-400 border-y-2 border-y-transparent ml-1"></div>
              </div>
              <span className="text-lg font-medium">Energia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ChemicalEnergy;