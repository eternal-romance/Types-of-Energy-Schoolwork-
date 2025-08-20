import React from 'react';
import { motion } from 'framer-motion';
import { Flame, MapPin, Thermometer } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import SourceBadge from '../../components/SourceBadge';

const GeothermalSource = () => {
  return (
    <PageLayout 
      title="Energia Geotérmica"
      subtitle="Aproveitamento do calor natural armazenado no interior da Terra"
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
            <div className="p-3 rounded-lg bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 mr-4">
              <Flame className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Como Funciona</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia geotérmica aproveita o calor natural armazenado no interior da Terra, 
            originado pelo decaimento radioativo de elementos e pelo calor residual da formação 
            do planeta. Este calor aquece água subterrânea, criando vapor que pode ser usado 
            diretamente para aquecimento ou para gerar eletricidade através de turbinas.
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
                <Thermometer className="h-5 w-5 text-red-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Alta Temperatura</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Sistemas que utilizam reservatórios com temperaturas acima de 150°C para 
              geração de eletricidade em usinas geotérmicas.
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
                <Flame className="h-5 w-5 text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Média Temperatura</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Sistemas com temperaturas entre 90°C e 150°C, usados para aquecimento 
              direto de edifícios e processos industriais.
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
                <MapPin className="h-5 w-5 text-yellow-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Baixa Temperatura</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Sistemas com temperaturas abaixo de 90°C, utilizados com bombas de calor 
              para aquecimento e refrigeração residencial.
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
                <p className="text-gray-300">Fonte de energia confiável e constante</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Baixas emissões de gases poluentes</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Não depende de condições climáticas</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Longa vida útil das instalações</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Ocupação mínima de área superficial</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Energia renovável e sustentável</p>
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
          <h3 className="text-2xl font-bold text-white mb-6">Localizações Favoráveis</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Zonas Vulcânicas</h4>
                <p className="text-gray-300">Regiões com atividade vulcânica recente oferecem as maiores temperaturas geotérmicas.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-orange-600/20 border border-orange-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Falhas Geológicas</h4>
                <p className="text-gray-300">Áreas com fraturas na crosta terrestre facilitam o acesso ao calor subterrâneo.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-yellow-600/20 border border-yellow-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Fontes Termais</h4>
                <p className="text-gray-300">Locais com nascentes de água quente indicam potencial geotérmico próximo à superfície.</p>
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
          <h3 className="text-2xl font-bold text-white mb-6">Aplicações Práticas</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-full bg-amber-600/20 border border-amber-500/30 inline-block mb-4">
                <Flame className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Aquecimento</h4>
              <p className="text-gray-300 text-sm">Sistemas de aquecimento de edifícios e estufas</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-amber-600/20 border border-amber-500/30 inline-block mb-4">
                <Thermometer className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Industria</h4>
              <p className="text-gray-300 text-sm">Processos industriais que requerem calor</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-amber-600/20 border border-amber-500/30 inline-block mb-4">
                <MapPin className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Turismo</h4>
              <p className="text-gray-300 text-sm">Spas, piscinas termais e centros de bem-estar</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-2xl p-6 border border-red-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-4">Potencial Global</h3>
          <p className="text-gray-300 leading-relaxed">
            A energia geotérmica tem grande potencial de crescimento, especialmente com o desenvolvimento 
            de tecnologias de sistemas geotérmicos melhorados que podem acessar recursos em áreas 
            sem atividade geotérmica natural. Países como Islândia, Filipinas e Estados Unidos 
            lideram na utilização desta fonte de energia limpa e confiável.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default GeothermalSource;