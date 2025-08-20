import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Fuel, AlertTriangle } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import SourceBadge from '../../components/SourceBadge';

const FossilFuelsSource = () => {
  return (
    <PageLayout 
      title="Combustíveis Fósseis"
      subtitle="Fontes de energia formadas pela decomposição de matéria orgânica ao longo de milhões de anos"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center"
        >
          <SourceBadge isRenewable={false} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 mr-4">
              <Fuel className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Origem e Formação</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            Os combustíveis fósseis são recursos energéticos formados pela decomposição de organismos 
            mortos (plantas e animais) sob condições específicas de pressão e temperatura ao longo 
            de milhões de anos. São considerados não renováveis porque sua formação ocorre em escalas 
            de tempo geológicas, muito superiores ao consumo humano atual.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-700/20 border border-gray-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gray-600/20 border border-gray-500/30 mr-3">
                <Fuel className="h-5 w-5 text-gray-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Carvão</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Rocha sedimentar formada por plantas decompostas. Principal combustível para 
              geração de eletricidade em muitos países, especialmente na Ásia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-amber-800/30 to-amber-700/20 border border-amber-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-amber-600/20 border border-amber-500/30 mr-3">
                <Flame className="h-5 w-5 text-amber-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Petróleo</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Líquido viscoso formado por microorganismos marinhos. Base para combustíveis 
              de transporte e matéria-prima para a indústria petroquímica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-800/30 to-blue-700/20 border border-blue-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 mr-3">
                <AlertTriangle className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Gás Natural</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Mistura gasosa de hidrocarbonetos, principalmente metano. Combustível mais 
              limpo entre os fósseis, usado para aquecimento e eletricidade.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl p-8 border border-orange-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Aplicações Principais</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-orange-600/20 border border-orange-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Geração de Eletricidade</h4>
                <p className="text-gray-300">Usinas termoelétricas que queimam carvão, óleo ou gás natural para produzir vapor e gerar eletricidade.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Transporte</h4>
                <p className="text-gray-300">Gasolina, diesel, querosene de aviação e combustível naval derivados do refino do petróleo.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-yellow-600/20 border border-yellow-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Indústria e Aquecimento</h4>
                <p className="text-gray-300">Processos industriais, aquecimento residencial e comercial, matéria-prima petroquímica.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="bg-gradient-to-r from-emerald-600/10 to-green-600/10 rounded-2xl p-8 border border-emerald-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Características</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-4">Vantagens Históricas</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Alta densidade energética</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Infraestrutura estabelecida</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Facilidade de transporte e armazenamento</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Tecnologia madura e amplamente disponível</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-4">Impactos Negativos</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Emissões de gases de efeito estufa</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Poluição atmosférica e da água</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Recursos limitados e esgotáveis</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Riscos de acidentes e vazamentos</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Impacto Ambiental</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Mudanças Climáticas</h4>
                <p className="text-gray-300">Principal fonte de emissões de CO₂, contribuindo significativamente para o aquecimento global.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-orange-600/20 border border-orange-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Poluição do Ar</h4>
                <p className="text-gray-300">Emissão de particulados, óxidos de enxofre e nitrogênio que afetam a qualidade do ar e saúde pública.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-yellow-600/20 border border-yellow-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Degradação Ambiental</h4>
                <p className="text-gray-300">Impactos da extração incluem desmatamento, contaminação de água subterrânea e destruição de habitats.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-2xl p-6 border border-amber-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-4">Transição Energética</h3>
          <p className="text-gray-300 leading-relaxed">
            Embora os combustíveis fósseis tenham impulsionado o desenvolvimento industrial e 
            ainda sejam fundamentais para a economia global, a crescente preocupação com mudanças 
            climáticas e sustentabilidade está acelerando a transição para fontes de energia 
            renovável. Este processo representa um dos maiores desafios energéticos do século XXI.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default FossilFuelsSource;