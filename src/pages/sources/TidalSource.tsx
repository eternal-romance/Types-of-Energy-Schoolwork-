import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Moon, Clock } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import SourceBadge from '../../components/SourceBadge';

const TidalSource = () => {
  return (
    <PageLayout 
      title="Energia das Marés e Oceanos"
      subtitle="Aproveitamento da força gravitacional e dos movimentos oceânicos"
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
            <h3 className="text-2xl font-bold text-white">Origem e Funcionamento</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia das marés e oceanos aproveita as forças gravitacionais da Lua e do Sol que 
            causam o movimento periódico das águas oceânicas. Essa energia se manifesta através 
            das marés (movimento vertical), correntes marítimas (movimento horizontal) e diferenças 
            de temperatura oceânica, oferecendo uma fonte previsível e constante de energia renovável.
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
                <Moon className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Energia das Marés</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Utiliza o movimento vertical das águas causado pela atração gravitacional 
              da Lua e Sol através de barragens ou turbinas submarinas.
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
              <h4 className="text-xl font-semibold text-white">Energia das Ondas</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Aproveita o movimento das ondas oceânicas geradas pelos ventos, 
              convertendo energia cinética e potencial em eletricidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-teal-800/30 to-teal-700/20 border border-teal-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-teal-600/20 border border-teal-500/30 mr-3">
                <Clock className="h-5 w-5 text-teal-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Energia Térmica</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Explora diferenças de temperatura entre águas superficiais e profundas 
              para gerar energia através de ciclos termodinâmicos.
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
                <p className="text-gray-300">Fonte previsível e confiável</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Energia limpa e renovável</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Não ocupa espaço terrestre</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Alta densidade energética</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Ciclos regulares e previsíveis</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Longa vida útil dos equipamentos</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Tecnologias de Captação</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-blue-600/20 border border-blue-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Barragens de Maré</h4>
                <p className="text-gray-300">Estruturas que capturam água durante a maré alta e a liberam através de turbinas na maré baixa.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-cyan-600/20 border border-cyan-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Turbinas Subaquáticas</h4>
                <p className="text-gray-300">Dispositivos submersos que capturam a energia das correntes marítimas de forma contínua.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-teal-600/20 border border-teal-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Conversores de Ondas</h4>
                <p className="text-gray-300">Equipamentos flutuantes ou costeiros que transformam o movimento das ondas em energia elétrica.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-2xl p-8 border border-amber-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Desafios Técnicos</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-amber-600/20 border border-amber-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Ambiente Marinho</h4>
                <p className="text-gray-300">Corrosão por água salgada e necessidade de materiais resistentes ao ambiente oceânico.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-orange-600/20 border border-orange-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Custos Elevados</h4>
                <p className="text-gray-300">Investimentos iniciais altos para infraestrutura subaquática e sistemas de transmissão.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Manutenção Complexa</h4>
                <p className="text-gray-300">Dificuldades de acesso e manutenção de equipamentos instalados no fundo do mar.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-6 border border-blue-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-4">Potencial Futuro</h3>
          <p className="text-gray-300 leading-relaxed">
            A energia oceânica representa uma das últimas fronteiras da energia renovável, com 
            potencial imenso ainda pouco explorado. Países como Reino Unido, França e Coreia do Sul 
            lideram o desenvolvimento desta tecnologia, que pode fornecer energia constante e 
            previsível para comunidades costeiras em todo o mundo.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default TidalSource;